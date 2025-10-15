"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/667202/pexels-photo-667202.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A traveler joins Masai tribe members on a sunny day in an open African landscape." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/34268606/pexels-photo-34268606.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "wildlife safari group - Photo by Graeme Travers" },
  { "id": "contact-image", "url": "https://images.pexels.com/photos/7689884/pexels-photo-7689884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Friendly woman in a call center environment, wearing a headset and smiling." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: 'Home', id: 'home' },
            { name: 'About Us', id: 'about' },
            { name: 'Safaris', id: 'safaris' },
            { name: 'Gallery', id: 'gallery' },
            { name: 'Contact', id: 'contact' }
          ]}
          brandName="Forest Safari"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Discover Africa's Wild Beauty"
            description="Join us for an unforgettable safari adventure through the heart of Africa."
            imageSrc={(assetMap.find(a => a.id === 'hero-image')?.url)}
            buttons={[
              { text: 'Explore Now', href: 'safaris' },
              { text: 'View Gallery', href: 'gallery' }
            ]}
            className="bg-green-100 text-gray-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: 'Expert Guides', description: 'Our guides are experienced and knowledgeable.', icon: "" },
              { title: 'Unique Itineraries', description: 'Tailored safari experiences just for you.', icon: "" },
            ]}
            imageSrc={(assetMap.find(a => a.id === 'about-image')?.url)}
            className="bg-green-100 text-gray-900"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: 'Luxury Lodges', description: 'Stay in comfort with breathtaking views.', icon: 'Zap' },
              { title: 'Wildlife Encounters', description: 'Get up-close with Africa's Big Five.', icon: 'Zap' },
            ]}
            title="What We Offer"
            className="bg-green-100 text-gray-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenterForm
            title="Contact Us"
            description="Have questions? Get in touch with us."
            inputs={[
              { name: 'name', type: 'text', placeholder: 'Your Name', required: true },
              { name: 'email', type: 'email', placeholder: 'Your Email', required: true }
            ]}
            textarea={{ name: 'message', placeholder: 'Type your message...', rows: 5, required: true }}
            buttonText="Send Message"
            className="bg-green-100 text-gray-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {
                title: 'Explore',
                items: [
                  { label: 'Safaris', href: 'safaris' },
                  { label: 'Gallery', href: 'gallery' },
                ],
              },
              {
                title: 'Company',
                items: [
                  { label: 'About Us', href: 'about' },
                  { label: 'Contact', href: 'contact' },
                ],
              },
            ]}
            copyrightText="© 2025 Forest Safari"
            className="bg-green-500 text-white"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}