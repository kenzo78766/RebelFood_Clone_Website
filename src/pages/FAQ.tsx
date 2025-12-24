import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const franchiseFAQs = [
  {
    question: "What countries are you looking at for franchise partners?",
    answer: "No, we are not restricted to any particular country or territory. Our franchise model can easily be adapted across geographies. Anybody from around the globe can become a franchise partner, as long as our partner criteria are met."
  },
  {
    question: "What is the investment needed? What are the associated fees and ongoing payments?",
    answer: "Fixed license fee of $550 million across 3 years, Franchise/ royalty fees at 3% of cart sales, Transaction fee of $0.15 per transaction*"
  },
  {
    question: "Are there any additional fees or hidden charges?",
    answer: "No, there are no additional fees or hidden charges apart from the ones mentioned above. However, any ancillary services outside the scope of the agreement may be charged. In case you are interested in having the rights to sell one of Rebel's existing brands in the local market, additional royalty fee may apply."
  },
  {
    question: "What kind of support do you provide for a franchise partner?",
    answer: "Refer to our 'Partner Criteria' tab for detailed information about who brings what to the table."
  },
  {
    question: "Will you help me with finding the location, setting up the supply chain and food menu?",
    answer: "No. Responsibility of finding the kitchen location, setting up the supply chain lies with the partner. Partner will also be responsible for coming up with the food brands to be launched based on the market research and understanding. However, we will help you to identify the right vendors, processes and culinary counsel to make your brand or brands more suitable for the local palette."
  },
  {
    question: "How many locations can I open?",
    answer: "There really isn't any upper limit. You can scale up to as many locations as you want."
  },
  {
    question: "What is the term of the franchise agreement?",
    answer: "We expect partners to have atleast a 3 year horizon. Exact term duration can be discussed and mutually agreed upon."
  },
  {
    question: "I am very interested. How do I get started?",
    answer: "You can write to us at franchising@rebelfoods.com. We will connect with you shortly."
  },
  {
    question: "How much money will I make?",
    answer: "You can expect an operating margin of around 20%* with a potential for more upside."
  },
  {
    question: "I already have a location. Can I start my cloud kitchen there?",
    answer: "Yes. We can help you cloudify your existing operations."
  },
  {
    question: "Who is responsible for what?",
    answer: "Refer to our 'Partner Criteria' tab for a detailed understanding of what is is the role and responsibilities for each of us."
  },
  {
    question: "Will Rebel provide the necessary training and support to my staff?",
    answer: "Yes, Rebel will help with all the necessary training required for your staff to run the cloud operations. We will also provide you with ongoing support by deputing a couple of resources on-site for the first 2 years."
  },
  {
    question: "Will you help with the financing?",
    answer: "No, we won't be able to help you with any financing. Rebel will help you with complete end-to-end operational and management support. However, we can discuss the specific terms of the commercials."
  },
  {
    question: "What is the time it will take to open a location?",
    answer: "We estimate it to take around 4 to 5 months depending on the market and the partner."
  }
];

const FAQ = () => {
  return (
    <PageTransition>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionReveal>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                FAQ's
              </h1>
              <div className="flex gap-4">
                <Link 
                  to="/franchise"
                  className="px-6 py-2 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors"
                >
                  Franchise
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {franchiseFAQs.map((faq, index) => (
                  <SectionReveal key={index} delay={index * 0.05}>
                    <AccordionItem 
                      value={`item-${index}`}
                      className="bg-card border border-border rounded-xl px-6 overflow-hidden"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:text-accent py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </SectionReveal>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default FAQ;
