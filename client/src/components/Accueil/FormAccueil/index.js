import React from 'react';
import { NavLink } from 'react-router-dom';

const FormAccueil = () => (
  // const state = {
  //   user: "entreprise",
  // }
  
  <div className="card-body col-md-8 mx-auto"> 
  <div className="d-flex justify-content-between mb-2">
  <NavLink exact to="/compagny/home">
  <div className="form-check text-dark">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
  <label className="form-check-label" for="exampleRadios1">
    Entreprise
  </label>
  </div>
  </NavLink>
  <NavLink exact to="/social/blog">
  <div className="form-check text-dark">
    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
    <label className="form-check-label" for="exampleRadios2">
      Chauffeur
    </label>
  </div>
  </NavLink>
  <NavLink exact to="/social/blog">
  <div className="form-check text-dark">
    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
    <label className="form-check-label" for="exampleRadios3">
      Visiteur
    </label>
  </div> 
  </NavLink>
  </div>

    <form>
      <div className="form-group row">
        {/* <label for="inputEmail3" className="col-12 col-form-label text-light">Email</label>  */}
        <div className="col-12">
          <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
        </div>
      </div>
      <div className="form-group row">
         {/* <label for="inputPassword3" className="col-12 col-form-label text-light">Mot de passe</label>  */}
        <div className="col-12">
          <input type="password" className="form-control" id="inputPassword3" placeholder="Mot de passe" />
          <div className="form-check text-light m-2">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Rester connecté</label>
        </div>
          <div className="mt-4 d-flex justify-content-between">
            {/* <button type="submit" className="btn btn-success">Se connecter</button> */}
            <NavLink exact to="/social"><button type="submit" className="btn btn-success"> Se connecter</button></NavLink>
            <a href="/" className="text-warning d-sm-block d-none">J'ai oublié mon mot de passe</a>
            <button type="submit" className="btn btn-primary">S'enregistrer</button>
          </div>
          <a href="/" className=" text-center mt-3 text-warning d-sm-none d-block">J'ai oublié mon mot de passe</a>
        </div>
      </div>
    </form>
  </div>
);

export default FormAccueil;
