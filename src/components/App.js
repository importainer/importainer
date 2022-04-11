import React from "react";
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Franquicias from "../pages/Franquicias";
import ContactoPage from "../pages/ContactoPage";
import RouteAdm from "./RouteDefined/RouteAdm";
import RouteMark from "./RouteDefined/RouteMark";
import RouteAM from "./RouteDefined/RouteAM";
// import ContainerGeneral from "../pages/Containers/ContainerGeneral";

// ===== PROYECTOS ======
import Proyectos from "../pages/Proyectos";

// ===== CASAS ======
import Casas from "../pages/Casas";
import Cont120M2 from "../pages/Containers/Cont120M2";
import Cont90M2 from "../pages/Containers/Cont90M2";
import Cont75M2 from "../pages/Containers/Cont75M2";
import Cont45M2 from "../pages/Containers/Cont45M2";
import Cont30M2 from "../pages/Containers/Cont30M2";
import Cont15M2 from "../pages/Containers/Cont15M2";

// ===== EMPRENDIMIENTOS =====
import Emprendimientos from "../pages/Emprendimientos";
import Foodtrack15M2 from "../pages/Emprendimientos/Foodtrack15M";
import Foodtrack30M2 from "../pages/Emprendimientos/Foodtrack30M";
import Foodtrack120M2 from "../pages/Emprendimientos/Foodtrack120M";
import Bar45M2 from "../pages/Emprendimientos/Bar45M";
import Local90M2 from "../pages/Emprendimientos/Local90M";

// ===== EXTERIOR =====
import Exterior from "../pages/Exterior";
import Quincho15M2 from "../pages/Exterior/Quincho15M";
import Quincho30M2 from "../pages/Exterior/Quincho30M";
import Pileta15M2 from "../pages/Exterior/Pileta15M";
import Pileta30M2 from "../pages/Exterior/Pileta30M";

// ===== OFICINAS  =====
import Oficinas from "../pages/Oficinas";
import Oficina60M2 from "../pages/Oficinas/Oficina60M";

// ===== OTROS =====
import Reservas from "../pages/Reservas";

// import Testimonios from "../pages/Testimonios";
import Aspectos from "../pages/Aspectos";
import OfertaList from "../components/ofertas/OfertaList";
import test from "../pages/test";
import Compania from "./Compañia";

// ===== Entregas =====

import Entregas from "../components/Entregas/Entregas";
import EntregasDetail from "../components/EntregasDetail/EntregasDetail";

// ===== ADMIN =====

import Login from "./Admin/LoginIn/LoginIn";
import IndexAdm from "./Admin/IndexAdm/IndexAdm";
import LoginCreate from "./Admin/LoguinCreate/LoginCreate";
import CreatePub from "./Admin/CreatePub/CreatePub";
import ListPub from "./Admin/ListPublic/ListPublic";
import EditarPub from "./Admin/EditarPub/EditarPub";
import LoginUser from "./Admin/ListUser/ListUser";
import UserDetail from "./Admin/UserDetail/UserDetail";
import ReservasADM from "./Admin/Reservas/Reservas";
import CreateTestimony from "./Admin/CreateTestimony/CreateTestimony";
import Consultas from "./Admin/Consultas/Consultas";
import CreateProducts from "./Admin/CreateProducts/CreateProducts";
import Encuesta from "./Admin/Encuesta/Encuesta";
import EncuestaVentas from "./Admin/EncuestaVentas/EncuestaVentas";

// ===== USER =====

import Plan from "./User/Plan/Plan";

const App = () => (

  <>

    <HashRouter>
      
      <Switch>
        <Route exact path="/" component={Home} />

        {/* ===== ADMINISTACION ===== */}
        <Route exact path="/admin" component={Login} />
        <Route exact path="/Encuesta" component={Encuesta} />
        <Route exact path="/EncuestaVentas" component={EncuestaVentas} />
        {/* RouteAM RUTAS DE ACCESO ADMINISTRACION Y MARKETING */}
        <RouteAM path="/indexAdm" component={IndexAdm} />
        <RouteAM path="/LoginCreate" component={LoginCreate} />
        {/* RouteAdm RUTAS DE ACCESO ADMINISTRACION */}
        <RouteAdm path="/users" component={LoginUser} />
        <RouteAdm path="/UserDetail" component={UserDetail} />
        {/* RouteMark RUTAS DE ACCESO MARKETING */}
        <RouteMark path="/CreatePub" component={CreatePub} />
        <RouteMark path="/ListaPublicaciones" component={ListPub} />
        <RouteMark path="/EditarPub" component={EditarPub} />
        <RouteMark path="/ReservasADM" component={ReservasADM} />
        <RouteMark path="/CreateTestimony" component={CreateTestimony} />
        <RouteMark path="/ConsultasADM" component={Consultas} />
        <RouteMark path="/CreateProducts" component={CreateProducts} />

        {/* ===== USER ===== */}
        <Route exact path="/DatoPlan" component={Plan} />

        {/* ===== PROYECTOS ===== */}
        <Route exact path="/proyectos" component={Proyectos} />

        {/* ====== CASAS ====== */}
        <Route exact path="/casas" component={Casas} />
        <Route exact path="/casas/120M2" component={Cont120M2} />
        <Route exact path="/casas/90M2" component={Cont90M2} />
        <Route exact path="/casas/75M2" component={Cont75M2} />
        <Route exact path="/casas/45M2" component={Cont45M2} />
        <Route exact path="/casas/30M2" component={Cont30M2} />
        <Route exact path="/casas/15M2" component={Cont15M2} />

        {/* ====== EMPRENDIMIENTOS ===== */}
        <Route exact path="/emprendimientos" component={Emprendimientos} />
        <Route
          exact
          path="/emprendimientos/foodtrack15m2"
          component={Foodtrack15M2}
        />
        <Route
          exact
          path="/emprendimientos/foodtrack30m2"
          component={Foodtrack30M2}
        />
        <Route
          exact
          path="/emprendimientos/foodtrack120m2"
          component={Foodtrack120M2}
        />
        <Route exact path="/emprendimientos/bar45m2" component={Bar45M2} />
        <Route exact path="/emprendimientos/local90m2" component={Local90M2} />

        {/* ====== COMPAÑIA ===== */}
        <Route exact path="/compañia" component={Compania} />

        {/* ===== EXTERIOR ===== */}
        <Route exact path="/exterior" component={Exterior} />
        <Route exact path="/exterior/quincho15m2" component={Quincho15M2} />
        <Route exact path="/exterior/quincho30m2" component={Quincho30M2} />
        <Route exact path="/exterior/pileta15m2" component={Pileta15M2} />
        <Route exact path="/exterior/pileta30m2" component={Pileta30M2} />

        {/* ===== OFICINAS ===== */}
        <Route exact path="/oficinas" component={Oficinas} />
        <Route exact path="/oficinas/oficina60m2" component={Oficina60M2} />
        
        {/* ===== ENTREGAS ===== */}
        <Route exact path="/entregas" component={Entregas} />
        <Route exact path="/EntregasDetail/:id" component={EntregasDetail} />

        {/* ===== OTROS ====== */}
        <Route exact path="/aspectos" component={Aspectos} />
        <Route exact path="/franquicias" component={Franquicias} />
        <Route exact path="/contacto" component={ContactoPage} />
        <Route exact path="/reservas" component={Reservas} />

        <Route exact path="/oferta" component={OfertaList} />
        <Route exact path="/test" component={test} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>

  </>
  
);

export default App;
