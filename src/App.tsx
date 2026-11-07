import React, { useState } from 'react';
import { PROPERTY } from './data/property.ts';
import { Header } from './components/Header.tsx';
import { PhotoGallery } from './components/PhotoGallery.tsx';
import { PropertyHeader } from './components/PropertyHeader.tsx';
import { KeyFeatures } from './components/KeyFeatures.tsx';
import { PropertyDescription } from './components/PropertyDescription.tsx';
import { SidebarContact } from './components/SidebarContact.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { SurpriseModal } from './components/SurpriseModal.tsx';
import { ContactSurpriseModal } from './components/ContactSurpriseModal.tsx';
import { LightboxModal } from './components/LightboxModal.tsx';
import { FloatingMobileBar } from './components/FloatingMobileBar.tsx';
import { SurpriseFloatingTeaser } from './components/SurpriseFloatingTeaser.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactActionType, setContactActionType] = useState<'whatsapp' | 'contact' | 'phone'>('whatsapp');

  const surprisePhoto = PROPERTY.photos.find((p) => p.isSurprise) || PROPERTY.photos[3];

  const handleTriggerSurprise = () => {
    setIsSurpriseOpen(true);
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
    if (PROPERTY.photos[index]?.isSurprise) {
      setIsSurpriseOpen(true);
    }
  };

  const handleOpenContactModal = (type: 'whatsapp' | 'contact' | 'phone') => {
    setContactActionType(type);
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f6f8] text-[#2c323f]">
      {/* Real Estate Portal Header */}
      <Header onTriggerSurprise={handleTriggerSurprise} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-4 pb-12">
        
        {/* Title, Address, Breadcrumbs */}
        <PropertyHeader 
          property={PROPERTY} 
          onTriggerSurprise={handleTriggerSurprise} 
        />

        {/* Interactive Photo Collage Grid & Carousel */}
        <PhotoGallery
          photos={PROPERTY.photos}
          onOpenLightbox={handleOpenLightbox}
          onTriggerSurprise={handleTriggerSurprise}
        />

        {/* Content Layout: 2 Columns (Main Details + Sticky Contact Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          
          {/* Left Column (Details, Specs, Description, Location) */}
          <div className="lg:col-span-2 space-y-6">
            <KeyFeatures 
              property={PROPERTY} 
              onTriggerSurprise={handleTriggerSurprise} 
            />

            <PropertyDescription 
              property={PROPERTY} 
              onTriggerSurprise={handleTriggerSurprise} 
            />

            <LocationSection 
              onTriggerSurprise={handleTriggerSurprise} 
            />
          </div>

          {/* Right Column (Sticky Contact Form & Advertiser) */}
          <div className="lg:col-span-1">
            <SidebarContact
              property={PROPERTY}
              onOpenContactModal={handleOpenContactModal}
              onTriggerSurprise={handleTriggerSurprise}
            />
          </div>

        </div>

      </main>

      {/* Bottom Footer */}
      <Footer onTriggerSurprise={handleTriggerSurprise} />

      {/* Mobile Sticky Bar */}
      <FloatingMobileBar
        property={PROPERTY}
        onOpenContactModal={handleOpenContactModal}
      />

      {/* Floating Teaser Pill */}
      <SurpriseFloatingTeaser onTriggerSurprise={handleTriggerSurprise} />

      {/* Grand Reveal Modal (Confetti + Audio + Baby Photo) */}
      <SurpriseModal
        isOpen={isSurpriseOpen}
        onClose={() => setIsSurpriseOpen(false)}
        surprisePhotoUrl={surprisePhoto.url}
      />

      {/* Contact Surprise Modal (When clicking WhatsApp / Contactar) */}
      <ContactSurpriseModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onOpenFullSurprise={() => {
          setIsContactModalOpen(false);
          setIsSurpriseOpen(true);
        }}
        actionType={contactActionType}
      />

      {/* Full-Screen Lightbox Image Viewer */}
      <LightboxModal
        isOpen={isLightboxOpen}
        currentIndex={lightboxIndex}
        photos={PROPERTY.photos}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(newIndex) => {
          setLightboxIndex(newIndex);
          if (PROPERTY.photos[newIndex]?.isSurprise) {
            setIsSurpriseOpen(true);
          }
        }}
        onTriggerSurprise={handleTriggerSurprise}
      />
    </div>
  );
}
