import { useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const mediumUrl = 'https://medium.com/search?q=rebel%20foods';

const MediumStories = () => {
  useEffect(() => {
    // Keep users in the app but prompt to open Medium.
    // eslint-disable-next-line no-console
    console.info('Redirect hint: open Medium at', mediumUrl);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Medium Stories</h1>
            <p className="text-lg text-muted-foreground">
              Explore Rebel Foods stories on Medium. Click below to view the latest posts.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors"
              >
                Open Medium
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default MediumStories;
