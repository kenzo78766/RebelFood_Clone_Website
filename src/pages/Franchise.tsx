import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const franchiseInfo = [
  {
    title: 'Rebel Foods',
    description: 'The world\'s largest & fastest growing internet restaurant company with 4000+ internet restaurants, 45+ brands (own & partner), and 19 offline stores (EatSure Multi-Brand Foodcourt, Wendy\'s, and Oven Story stores) across 80+ cities globally.',
  },
  {
    title: 'Franchise Stores',
    description: 'We are soliciting interest in Oven Story Pizza offline store and Rebel owned brands in Cloud (Brand names: Faasos, Behrouz Biryani, The Good Bowl, Lunchbox, The Biryani Life) under the FOFO (Franchise owned, Franchise operated) model.',
  },
  {
    title: 'Oven Story Pizza',
    description: 'Oven Story Pizza is one of the key brands of Rebel Foods. It is the country\'s fourth largest pizza brand, catering to consumers across ~70 cities in India with 350+ outlets. It is known for its superior taste and standout pizza toppings.',
  },
  {
    title: 'Revenue Channels',
    description: 'Dine-in (Oven Story Pizza), Takeaway and Delivery (Aggregator/EatSure)',
  },
  {
    title: 'Preferred Locations for physical outlets (FOFO)',
    description: 'High Streets, Highways',
  },
];

const franchiseModel = {
  title: 'Dine in (Ovenstory) + Cloud Kitchen Of all Rebel Brands',
  details: [
    { label: 'Total Area Required (Dine in + Cloud Kitchen)', value: '1500 Sqft' },
    { label: 'Minimum Area Required For Dine in', value: '300-350 sqft' },
    { label: 'Minimum Area Require for Cloud Kitchen of all brands', value: '1100-1200 sqft' },
    { label: 'Total Investment', value: '90 Lacs - 1cr' },
    { label: 'Agreement Tenure', value: '9 years' },
    { label: 'Time to recover franchise investment', value: '3.5 yrs' },
    { label: 'Time to double franchise investment', value: '5 yrs' },
    { label: 'Time to triple franchise investment', value: '6 yrs' },
    { label: 'Time to get five times of investment', value: '9 yrs' },
  ],
};

const faqs = [
  {
    question: 'Is restaurant experience necessary to obtain a Rebel Foods\' franchise?',
    answer: 'Restaurant experience would be helpful. However, it is not necessary to have prior experience.',
  },
  {
    question: 'Will Rebel\'s team assist in lease negotiation, site selection & store project work?',
    answer: 'The Rebel team can help in sharing store design, layout & location guidelines, but the lease, site selection & project work will have to be executed by the Franchisee Partner (FP).',
  },
  {
    question: 'Will Rebel help in procuring the Kitchen Operating Software / POS system?',
    answer: 'The Franchisee stores will be operated on Rebel\'s proprietary software - Rebel+. It is a comprehensive system which has the capability of handling all aspects of Restaurant management. The same system is currently operating in 350+ Rebel kitchens globally.',
  },
  {
    question: 'Will Rebel provide Training support?',
    answer: 'Rebel will provide initial training (at the nearest Rebel kitchen). Initial training will take 3-5 weeks. Re-training can also be provided at the FP\'s cost.',
  },
  {
    question: 'Will Rebel provide Manpower support?',
    answer: 'If required, we will get you in touch with hiring agencies to fulfil the outlet\'s manpower needs.',
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Franchise with</span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Rebel Foods</span>
                  </h1>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Franchise Info Section */}
          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="space-y-16">
                {franchiseInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="grid lg:grid-cols-2 gap-8 items-start"
                  >
                    <div className="lg:sticky lg:top-24">
                      <div className="bg-amber-500/90 rounded-xl px-6 py-4 inline-block">
                        <h3 className="text-xl font-bold text-background">{info.title}</h3>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Franchise Model Section */}
          <section className="py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                  We offer this Franchise model
                </h2>
              </SectionReveal>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto bg-card rounded-xl overflow-hidden"
              >
                <div className="bg-accent-coral/90 px-6 py-4">
                  <h3 className="text-xl font-bold text-background">{franchiseModel.title}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {franchiseModel.details.map((detail, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                        <span className="text-muted-foreground">{detail.label}</span>
                        <span className="font-semibold text-foreground">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Enquiry Form CTA */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <div className="max-w-2xl mx-auto text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Franchise enquiries
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Please fill in this quick form if you are interested in operating an Ovenstory Pizza store. You can also mention it in case you already have a property available. High street locations, Transit areas (Highways, Metros, Railway Stations) and shopping malls are high footfall locations for offline stores.
                  </p>
                  <a
                    href="mailto:franchising@rebelfoods.com"
                    className="inline-flex items-center px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                  FAQ's
                </h2>
              </SectionReveal>

              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-card rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                    >
                      <span className="font-medium text-foreground pr-4">{faq.question}</span>
                      <ChevronDown
                        size={20}
                        className={`flex-shrink-0 transition-transform duration-200 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Franchise;
