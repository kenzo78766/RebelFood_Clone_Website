import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Import local images
import rebelFoodsImage from '@/assets/4527922461737951718rebelfoods.png';
import franchiseStoresImage from '@/assets/1898978731737711601Franchise Photo.png';
import ovenStoryImage from '@/assets/6503950431737724799OvenStory_Image.png';
import revenueImage from '@/assets/7262207221737951751revenue.png';
import locationImage from '@/assets/8836647751737711483location.png';

// Section data with proper layout
const sections = [
  {
    type: 'image-text' as const,
    image: rebelFoodsImage,
    title: 'Rebel Foods',
    description: "The world's largest & fastest growing internet restaurant company with 4000+ internet restaurants, 45+ brands (own & partner), and 19 offline stores (EatSure Multi-Brand Foodcourt, Wendy's, and Oven Story stores) across 80+ cities globally.",
    imageLeft: true,
  },
  {
    type: 'text-image' as const,
    image: franchiseStoresImage,
    title: 'Franchise Stores',
    description: 'We are soliciting interest in Oven Story Pizza offline store and Rebel owned brands in Cloud (Brand names: Faasos, Behrouz Biryani, The Good Bowl, Lunchbox, The Biryani Life) under the FOFO (Franchise owned, Franchise operated) model.',
    imageLeft: false,
  },
  {
    type: 'image-text' as const,
    image: ovenStoryImage,
    title: 'Oven Story Pizza',
    description: "Oven Story Pizza is one of the key brands of Rebel Foods. It is the country's fourth largest pizza brand, catering to consumers across ~70 cities in India with 350+ outlets. It is known for its superior taste and standout pizza toppings.",
    imageLeft: true,
  },
  {
    type: 'text-image' as const,
    image: revenueImage,
    title: 'Revenue Channels',
    description: 'Dine-in (Oven Story Pizza), Takeaway and Delivery (Aggregator/EatSure)',
    imageLeft: false,
  },
  {
    type: 'image-text' as const,
    image: locationImage,
    title: 'Preferred Locations for physical outlets (FOFO)',
    description: 'High Streets, Highways',
    imageLeft: true,
  },
];

const franchiseModelDetails = [
  { label: 'Total Area Required (Dine in + Cloud Kitchen)', value: '1500 Sqft' },
  { label: 'Minimum Area Required For Dine in', value: '300-350 sqft' },
  { label: 'Minimum Area Require for Cloud Kitchen of all brands', value: '1100-1200 sqft' },
  { label: 'Total Investment', value: '90 Lacs - 1cr' },
  { label: 'Agreement Tenure', value: '9 years' },
  { label: 'Time to recover franchise investment', value: '3.5 yrs' },
  { label: 'Time to double franchise investment', value: '5 yrs' },
  { label: 'Time to triple franchise investment', value: '6 yrs' },
  { label: 'Time to get five times of investment', value: '9 yrs' },
];

const faqs = [
  {
    question: "Is restaurant experience necessary to obtain a Rebel Foods' franchise?",
    answer: 'Restaurant experience would be helpful. However, it is not necessary to have prior experience.',
  },
  {
    question: "Will Rebel's team assist in lease negotiation, site selection & store project work?",
    answer: "The Rebel team can help in sharing store design, layout & location guidelines, but the lease, site selection & project work will have to be executed by the Franchisee Partner (FP).",
  },
  {
    question: 'Will Rebel help in procuring the Kitchen Operating Software / POS system?',
    answer: "The Franchisee stores will be operated on Rebel's proprietary software - Rebel+. It is a comprehensive system which has the capability of handling all aspects of Restaurant management. The same system is currently operating in 350+ Rebel kitchens globally.",
  },
  {
    question: 'Will Rebel provide Training support?',
    answer: "Rebel will provide initial training (at the nearest Rebel kitchen). Initial training will take 3-5 weeks. Re-training can also be provided at the FP's cost.",
  },
  {
    question: 'Will Rebel provide Manpower support?',
    answer: "If required, we will get you in touch with hiring agencies to fulfil the outlet's manpower needs.",
  },
  {
    question: 'Is owning the property necessary?',
    answer: 'While a self-owned property would be ideal, it is not a necessity. We would strongly insist on selecting an ideal location for generating the maximum returns.',
  },
  {
    question: 'Can we own more than one Franchise?',
    answer: 'Yes, we also have a region wise Master Franchise option. Please reach out on franchising@rebelfoods.com for more details.',
  },
  {
    question: 'Will Rebel provide Marketing support?',
    answer: 'Other than state & national brand building support, Rebel will provide a comprehensive (Offline + Online) Go-Live launch plan. A launch expense of INR 1.5L by the FP is already included in the total investment required.',
  },
  {
    question: 'How will I procure the necessary equipment?',
    answer: 'We will share the detailed BOQ of equipment required, divided into "Brand specific" & "Generic". The FP will have to purchase "Brand specific" equipment (impinger oven) from Rebel\'s registered vendors. The "Generic" equipment (SS Tables, Chest freezers, Bain Marie) can be purchased locally / from non-Rebel vendors as well.',
  },
  {
    question: 'How will I procure stocks & supplies?',
    answer: 'Rebel will supply core ingredients (such as Pizza bases, cheese, fillings, condiments, etc.) & will give brand guidelines for the remaining ones, which can be procured locally (eg: fresh vegetables).',
  },
  {
    question: 'Will there be a location exclusivity?',
    answer: 'Every Franchise will have location exclusivity. The same will be detailed out in the Franchise agreement.',
  },
  {
    question: 'Why should one take a Rebel Foods franchise instead of starting their own brand?',
    answer: 'This gives the FP the power of utilizing an established set of brands, many of them with annual sales of more than 100 cr spread across 300+ locations. As compared to that, starting your own brand requires figuring out everything on your own, including the menu, suppliers, dealing with aggregators, supply-chain etc.',
  },
];

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    cityState: '',
    email: '',
    propertySize: '',
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <PageTransition>
      <Header />
      <main className="bg-[#252525] text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32">
          <div className="container mx-auto px-6">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px #fbd700',
              }}
            >
              Franchise with<br />Rebel Foods
            </h1>
          </div>
        </section>

        {/* Content Sections */}
        <section className="pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            {sections.map((section, index) => (
              <div key={section.title} className={`grid lg:grid-cols-2 items-center gap-10 ${index > 0 ? 'mt-16' : ''}`}>
                {/* Image */}
                <motion.div
                  className={`${section.imageLeft ? '' : 'order-2 lg:order-2'} w-full`}
                  initial={{ opacity: 0, x: section.imageLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={section.image} alt={section.title} className="w-full h-auto" />
                </motion.div>

                {/* Text */}
                <motion.div
                  className={`${section.imageLeft ? '' : 'order-1 lg:order-1'} w-full px-2`}
                  initial={{ opacity: 0, x: section.imageLeft ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex rounded-[10px] bg-[#d4a017] px-5 py-3 mb-5">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white m-0">{section.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-xl">{section.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* Franchise Model Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-14"
              style={{ color: 'transparent', WebkitTextStroke: '2px #ff6b35' }}
            >
              We offer this Franchise models
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-[360px] sm:max-w-[420px]">
                <div className="mb-6">
                  <div className="border-4 border-[#fbd700] overflow-hidden rounded-md">
                    <img src="https://www.rebelfoods.com/images/dine_in_cloud.jpg" alt="Franchise Model" className="w-full" />
                  </div>
                  <div className="bg-[#d0333a] text-white text-center px-3 py-3">
                    <h3 className="text-sm md:text-base font-bold m-0">Dine in (Ovenstory) + Cloud Kitchen Of all Rebel Brands</h3>
                  </div>
                  <div className="bg-[#3c3c3c] text-white text-center px-3 py-4 space-y-2">
                    {franchiseModelDetails.map((detail, idx) => (
                      <div key={idx}>
                        <p className="text-[11px] md:text-xs mb-1">{detail.label}</p>
                        <p className="text-[#fbd700] font-bold text-xs md:text-sm">{detail.value}</p>
                        {idx < franchiseModelDetails.length - 1 && <hr className="border-white/30 my-2" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Franchise Enquiries */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10"
              style={{ color: 'transparent', WebkitTextStroke: '2px #ff6b35' }}
            >
              Franchise enquiries
            </h2>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-white/80 text-base md:text-lg mb-4 leading-relaxed">
                  Please fill in this quick form if you are interested in operating an Ovenstory Pizza store.
                </p>
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  You can also mention it in case you already have a property available. High street locations, Transit areas (Highways, Metros, Railway Stations) and shopping malls are high footfall locations for offline stores.
                </p>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/60 focus:border-[#fbd700] outline-none"
                    required
                    onChange={handleInputChange}
                  />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        name="contact"
                        placeholder="Contact"
                        className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/60 focus:border-[#fbd700] outline-none"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="cityState"
                        placeholder="City & State"
                        className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/60 focus:border-[#fbd700] outline-none"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/60 focus:border-[#fbd700] outline-none"
                    required
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="propertySize"
                    placeholder="Property Size (Sqft)"
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/60 focus:border-[#fbd700] outline-none"
                    required
                    onChange={handleInputChange}
                  />
                  <button type="submit" className="bg-gradient-to-r from-[#00aff7] to-[#0088cc] text-white px-6 py-3 font-semibold hover:opacity-90 transition">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10"
              style={{ color: 'transparent', WebkitTextStroke: '2px #ff6b35' }}
            >
              FAQ's
            </h2>
            <div className="grid lg:grid-cols-[0.25fr_0.75fr] gap-6 lg:gap-8">
              <div>
                <div className="bg-[#3c3c3c] rounded-lg p-4 text-center">
                  <span className="text-white font-semibold text-sm md:text-base">Franchise</span>
                </div>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-[#3c3c3c] rounded-lg overflow-hidden">
                    <button
                      className="w-full px-5 py-4 md:px-6 md:py-4 text-left flex items-center justify-between hover:bg-[#444] transition"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <span className="text-white font-medium text-sm md:text-base pr-4">{faq.question}</span>
                      <ChevronDown 
                        className={`text-[#ff6b35] flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                        size={20} 
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-5 pb-4 md:px-6 md:pb-5">
                        <p className="text-gray-300 text-sm md:text-base">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Franchise;
