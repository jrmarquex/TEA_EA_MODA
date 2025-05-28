
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { AboutMe } from '@/components/sections/AboutMe';
import { Collection } from '@/components/sections/Collection';
import { Lookbook } from '@/components/sections/Lookbook';
import { Footer } from '@/components/layout/Footer';
import { Croquis } from '@/components/sections/Croquis';
import { FichasTecnicas } from '@/components/sections/FichasTecnicas';
import { EnsaioFotografico } from '@/components/sections/EnsaioFotografico';
import { FashionFilm } from '@/components/sections/FashionFilm';
import { Estampas } from '@/components/sections/Estampas';
import { Acessorios } from '@/components/sections/Acessorios';
import { PressKit } from '@/components/sections/PressKit';
import { MarcaSocial } from '@/components/sections/MarcaSocial';
import { Backstage } from '@/components/sections/Backstage';

const Index: React.FC = () => {
  React.useEffect(() => {
    // Ensure we start from the top when navigating to this page
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <AboutMe />
      <Collection />
      <Estampas />
      <Croquis />
      <Acessorios />
      <FichasTecnicas />
      <EnsaioFotografico />
      <Lookbook />
      <FashionFilm />
      <PressKit />
      <Backstage />
      <MarcaSocial />
      <Footer />
    </main>
  );
};

export default Index;
