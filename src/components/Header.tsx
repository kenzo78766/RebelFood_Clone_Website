import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import rebelLogo from '@/assets/rebel-logo.svg';

interface SubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  subItems?: SubItem[];
}

const topicSubItems: SubItem[] = [
  { label: 'Brand', href: '/blogs/topics/brand' },
  { label: 'Business', href: '/blogs/topics/business' },
  { label: 'Culinary', href: '/blogs/topics/culinary' },
  { label: 'Design', href: '/blogs/topics/design' },
  { label: 'Launcher', href: '/blogs/topics/launcher' },
  { label: 'People', href: '/blogs/topics/people' },
  { label: 'Technology', href: '/blogs/topics/technology' },
];

const baseNavItems: NavItem[] = [
  { label: 'What We Do', href: '/what-we-do' },
  { 
    label: 'Who We Are', 
    href: '/who-we-are',
    subItems: [
      { label: 'Rebel Team', href: '/rebel-team' },
      { label: 'Working at Rebel', href: '/working-at-rebel' },
    ]
  },
  { 
    label: 'Be a Rebel', 
    href: '/be-a-rebel',
    subItems: [
      { label: 'Join our team', href: '/join-our-team' },
      { label: 'Launcher', href: '/launcher' },
    ]
  },
  { label: 'Franchise', href: '/franchise' },
  { 
    label: 'Rebel Spirit', 
    href: '/rebel-spirit',
    subItems: [
      { label: 'Our Blogs', href: '/blogs' },
      { label: 'Medium Stories', href: '/medium-stories' },
    ],
  },
  { 
    label: 'About Rebel', 
    href: '/about',
    subItems: [
      { label: 'Rebel News', href: '/news' },
      { label: 'Press Release', href: '/press-release' },
      { label: 'Events', href: '/events' },
      { label: 'FAQ', href: '/faq' },
    ]
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const location = useLocation();

  // Dynamically inject "Topics" at the beginning if on Rebel Spirit
  const isRebelSpiritPage = location.pathname.includes('/blogs') || location.pathname === '/rebel-spirit';
  const navItems: NavItem[] = isRebelSpiritPage
    ? [
        { 
          label: 'Topics', 
          href: '#',
          subItems: topicSubItems,
        },
        ...baseNavItems,
      ]
    : baseNavItems;

  const openDropdown = (label: string) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(label);
  };

  const scheduleCloseDropdown = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
      closeTimerRef.current = null;
    }, 120);
  };

  const cancelScheduledClose = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpandedItem(mobileExpandedItem === label ? null : label);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={rebelLogo} alt="Rebel Foods" className="h-6 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.subItems && openDropdown(item.label)}
                onMouseLeave={() => item.subItems && scheduleCloseDropdown()}
                onFocusCapture={() => item.subItems && openDropdown(item.label)}
                onBlurCapture={(e) => {
                  // Close dropdown when focus leaves the menu item + dropdown
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                    scheduleCloseDropdown();
                  }
                }}
              >
                <Link
                  to={item.href}
                  className={`group flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-6 ${
                    location.pathname === item.href
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </span>
                  {item.subItems && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.subItems && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 min-w-[200px]"
                      onMouseEnter={cancelScheduledClose}
                      onMouseLeave={scheduleCloseDropdown}
                    >
                      {/* Hover bridge so the dropdown doesn't close while moving the mouse down */}
                      <div className="pt-2">
                        <div className="bg-card border border-border rounded-lg shadow-lg py-2 overflow-hidden">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors duration-200"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden py-6 border-t border-border overflow-hidden"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() => toggleMobileSubmenu(item.label)}
                          className={`w-full flex items-center justify-between text-base font-medium py-2 transition-colors duration-200 ${
                            location.pathname === item.href
                              ? 'text-foreground'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {item.label}
                          <ChevronDown 
                            size={16} 
                            className={`transition-transform duration-200 ${
                              mobileExpandedItem === item.label ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpandedItem === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2 space-y-2">
                                {item.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    to={subItem.href}
                                    className="block text-sm text-muted-foreground hover:text-foreground py-1"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block text-base font-medium py-2 transition-colors duration-200 ${
                          location.pathname === item.href
                            ? 'text-foreground'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
