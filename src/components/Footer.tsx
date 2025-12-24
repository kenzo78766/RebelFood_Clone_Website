import { Link } from 'react-router-dom';
import rebelLogo from '@/assets/rebel-logo.svg';

const footerLinks = {
  'Who We Are': [
    { label: 'See Who We Are', href: '/who-we-are' },
    { label: 'Rebel Team', href: '/who-we-are#team' },
    { label: 'Working at Rebel', href: '/be-a-rebel' },
  ],
  'Be A Rebel': [
    { label: 'Careers', href: '/be-a-rebel' },
    { label: 'Franchise', href: '/franchise' },
  ],
  'About Rebel': [
    { label: 'Rebel News', href: '/about#news' },
    { label: 'Press Release', href: '/about#press' },
    { label: 'Events', href: '/about#events' },
    { label: 'FAQ', href: '/about#faq' },
  ],
};

const Footer = () => {
  return (
    <footer id="about" className="py-16 bg-rebel-darker border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo & Quick Links */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={rebelLogo} alt="Rebel Foods" className="h-8 w-auto" />
            </Link>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/what-we-do" className="text-muted-foreground hover:text-foreground transition-colors">
                What We Do
              </Link>
              <Link to="/rebel-spirit" className="text-muted-foreground hover:text-foreground transition-colors">
                Rebel Spirit
              </Link>
            </div>
          </div>

          {/* Footer Link Groups */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-foreground font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Links */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap gap-6 text-sm">
            <Link to="/rebel-spirit" className="text-muted-foreground hover:text-foreground transition-colors">
              Rebel Spirit
            </Link>
            <Link to="/about#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQs
            </Link>
            <Link to="/about#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact Us
            </Link>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:info@rebelfoods.com" className="text-muted-foreground hover:text-foreground transition-colors">
              info@rebelfoods.com
            </a>
            <Link to="/about#privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
