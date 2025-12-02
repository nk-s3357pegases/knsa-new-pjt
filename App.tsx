import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Transparency from './components/Transparency';
import Integrations from './components/Integrations';
import FAQ from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BudgetModal from './components/BudgetModal';

const App: React.FC = () => {
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);

  const handleOpenBudgetModal = () => setIsBudgetModalOpen(true);
  const handleCloseBudgetModal = () => setIsBudgetModalOpen(false);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-brand-500/30 selection:text-brand-200">
      <Navbar onOpenModal={handleOpenBudgetModal} />

      <main>
        <Hero />
        <Features />
        <Workflow />
        <Transparency />
        <Integrations />
        <FAQ />
        <CTA />
      </main>

      <Footer />

      <BudgetModal
        isOpen={isBudgetModalOpen}
        onClose={handleCloseBudgetModal}
      />
    </div>
  );
};

export default App;
