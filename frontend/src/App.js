/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Navbar2 from './component/navbar2';
import './App.css';
import  AjouterEtablissement from './pages/AjouterEtablissement';
import  ListeEtablissements from './pages/ListeEtablissements';
import  AjouterGestionnaire from './pages/AjouterGestionnaire';
import ListeGestionnaires from './pages/ListeGestionnaire';
import Home from './pages/Home';
import Modifier from './pages/modifier';




function App() {
    return (
      

      <div className='container'>
       



        <Router>
           
             <Navbar />
             <Navbar2/>
          
            <div className='form'>

            <Routes>
           
                <Route path="/gestionnaire" element={<AjouterGestionnaire/>}/>
                <Route path="/listegest" element={<ListeGestionnaires/>}/>
                <Route path="/etab" element={<AjouterEtablissement />} />
                <Route path="/listeetab" element={< ListeEtablissements/>} />
                <Route path="/Home" element={<Home/>}    />  
                <Route path={'/modifier/:cin'}  element={<Modifier />} />

            </Routes>
            </div>
        </Router>
         
        </div>


 

        


    );

}

export default App;*/



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './condidat/LoginForm';

import Cnx from './condidat/cnxcdt'; 
import Home from './pages/Home';
import Authentif from'./pages/authentification';
import  AjouterEtablissement from './pages/AjouterEtablissement';
import  ListeEtablissements from './pages/ListeEtablissements';
import  AjouterGestionnaire from './pages/AjouterGestionnaire';
import ListeGestionnaires from './pages/ListeGestionnaire';
import Navbar2 from './navbura/navbar2';
import Dcnx from './pages/deconnexion';
import Dashboard from './pages/dashbord';
import Navbar from './navbura/navbar';
import Modifieretab from './pages/modifieretab';
import Modifiergest from './pages/modifiergest';
import Dashboardgest from './pages/dashbordgest';
import Ajoutermastere from'./gestionnaire/Ajoutermastere';
import Listemastere from './gestionnaire/Listemastere';
import Modifiermast from './gestionnaire/modifermast';
import Upload from './condidat/upload';
import Dossier from './condidat/dossier';



const App = () => {
    
    return (

        <div  >
          <Navbar2/>
        
    
        <Router>
          
            <div>
                <Routes>
                <Route path="/Ajoutermastere" element={<Ajoutermastere/> }/>
                <Route path="/dashbord" element={<Dashboard/>} />
                <Route path="/modifiergest/:id" element={ <Modifiergest/>} />
                <Route path="/modifieretab/:id" element={ <Modifieretab/>} />
                <Route path="/modifiermast/:id" element={ <Modifiermast/>} />
                <Route path="/dashboardgest" element={<Dashboardgest/> }/>
                <Route path="/dashbord" element={<Navbar/>} />
                <Route path="/LoginForm" element={<LoginForm />} />
                <Route path="/cnxcdt" element={<Cnx />} />
                <Route path="/Home" element={<Home/>}    /> 
                <Route path="/Authentif" element={<Authentif/>}    /> 
                <Route path="/deconnexion" element={<Dcnx/>}    />   
                <Route path="/gestionnaire" element={<AjouterGestionnaire/>}/>
                   <Route path="/ListeGestionnaire" element={<ListeGestionnaires/>}/>
                  <Route path="/etab" element={<AjouterEtablissement />} />
                <Route path="/listeetab" element={< ListeEtablissements/>} />
                <Route path="/modifieretab/:nom" element={<modifieretab/>} />
                <Route path="/Listemastere" element={<Listemastere/>} />
                <Route exact path="/" element={<Home />} />
                <Route path="/Upload" element={<Upload/>} />
                     
                     
                   
                </Routes>
            </div>
        </Router>
        </div>
    );
};

export default App;
