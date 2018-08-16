// NPM
import React from 'react';

// LOCAL
import FormAccueil from 'src/components/Accueil/FormAccueil';
import Footer from 'src/components/Footer';

import './app.sass';
import fond from '../../images/fond.jpg';

// COMPOSANT
const Accueil = () => (
  <div>
    <header>
      <img src={fond} className="img-fluid" alt="Camion au coucher de soleil" />
      <h3 className="text-warning">WEB TRANSPORT COMPANY ORGANIZATION</h3>
    </header>
    <main className="bg-secondary">
      <p className="text-light bg-dark p-3">
        <span className="titleP">WTCO</span> est une application permettant aux sociétés de transport de gérer leur organisation et aux chauffeurs d’avoir accès à leur propre réseau social. 
      </p>
      <FormAccueil />
      <Footer />
    </main>
  </div>
);

export default Accueil;
