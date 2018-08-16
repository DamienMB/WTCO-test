/**
 * Import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
/**
 * Local import
 */
// Composants
import Accueil from 'src/components/Accueil';
import Header from 'src/components/Header';
import CompagnyHome from 'src/components/Compagny/Home';
import CompagnyProfile from 'src/components/Compagny/Profile';
import EditCompagnyProfile from 'src/components/Compagny/Profile/EditProfile';
import Profil from 'src/components/Social/Profil';
import Messagerie from 'src/components/Social/Messagerie';
import Blog from 'src/components/Social/Blog';
import Entreprise from 'src/components/Social/Entreprise';
import Formulaire from 'src/components/Social/Formulaire';
import Map from 'src/components/Social/Map';
import CompagnyDrivers from 'src/containers/Compagny/Drivers';
import Footer from 'src/components/Footer';
import Social from 'src/components/Social';
// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = () => {
  return (
    <div id="app">
      <Switch>
        <Route exact path="/compagny/home"  render={() =>  (
          <React.Fragment>
            <Header />
            <CompagnyHome />
          </React.Fragment>
          )}
        />
        <Route exact path="/chauffeurProfil" render={() => <div>Profil Chauffeur</div>} />
        <Route exact path="/social/profil" component={Profil} />
        <Route exact path="/social/messagerie" component={Messagerie} />
        <Route exact path="/social/blog" component={Blog} />
        <Route exact path="/social/entreprise" component={Entreprise} />
        <Route exact path="/social/formulaire" component={Formulaire} />
        <Route exact path="/social/map" component={Map} />
        <Route exact path="/social" component={Social} />
        <Route path="/accueil" component={Accueil} />
        <Route path="/" component={Accueil} />
      </Switch>
      <Footer />
      {/* <EditCompagnyProfile /> */}
      {/* <CompagnyProfile /> */}
      {/* <CompagnyHome /> */}
      {/* <Route path="/drivers" render={() => (
        <React.Fragment>
          <Header/>
          <CompagnyDrivers/>
        </React.Fragment>
      )} /> */}
    </div>
  );
};

/**
 * Export
 */
export default App;
