/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import DirectorBio from './components/DirectorBio';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <DirectorBio />
      <Programs />
      <Impact />
      <Footer />
    </main>
  );
}
