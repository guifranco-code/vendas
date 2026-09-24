/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import FloorPlans from './components/FloorPlans';
import Amenities from './components/Amenities';
import Location from './components/Location';
import Simulator from './components/Simulator';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import ImageModal from './components/ImageModal';

export default function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
  }>({
    isOpen: false,
    imageSrc: '',
    title: '',
  });

  const handleOpenImage = (imageSrc: string, title: string) => {
    setModalState({
      isOpen: true,
      imageSrc,
      title,
    });
  };

  const handleCloseImage = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#0b0e13] text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. O Conceito & Arquitetura */}
        <Concept />

        {/* 3. Plantas Interativas */}
        <FloorPlans />

        {/* 4. Lazer & Rooftop Sky Club */}
        <Amenities onOpenImage={handleOpenImage} />

        {/* 5. Localização Privilegiada no Alto da Mooca */}
        <Location />

        {/* 6. Simulador de Condições & Fluxo de Obra */}
        <Simulator />

        {/* 7. Dúvidas Frequentes (FAQ) */}
        <FaqSection />

        {/* 8. Conversão Principal (Tenho Interesse) */}
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slim Sticky Mobile Action Bar */}
      <MobileStickyBar />

      {/* Image Preview Modal */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={handleCloseImage}
        imageSrc={modalState.imageSrc}
        title={modalState.title}
      />
    </div>
  );
}
