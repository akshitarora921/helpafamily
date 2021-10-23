import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import Footer from './Footer';
import HeroSection from './HeroSection';
import HotMealDaySection from '../components/HotMealDaySection';
import Navbar from './Navbar';
import { useContextTheme } from './ThemeContext';

export default function PrimaryLayout({
  main = false,
  inNeed = false,
  children,
  description,
}) {
  const { backgroundColor, textColor } = useContextTheme();
  return (
    <>
      <Head>
        <title>{'Help a Family in Need'}</title>
        <link href="/images/favicon.ico" rel="icon" />
      </Head>
      <div className={`flex flex-col min-h-screen ${backgroundColor}`}>
        <Navbar />
        <main className={`flex-grow ${backgroundColor} text-${textColor}`}>
          <HeroSection inNeed={inNeed} main={main} />
          {main && <HotMealDaySection />}
          <div className="text-center hero-content md:m-auto">
            <div className="w-lg">
              <h2 className="pb-20 text-3xl md:text-5xl">{description}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-8 gap-y-5 justify-center align-center content-center">
                {children}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

PrimaryLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
