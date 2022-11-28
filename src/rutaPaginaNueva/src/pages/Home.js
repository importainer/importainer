import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarPrinc from "../components/NavBarPrinc/NavBarPrinc";
import Wpp from "../components/wpp";
import BannerF from "./BannerF";
import { getAllProyect, getAllProducts, getProyectGoup, setOfertFilter, setOfertStatus } from "../Redux/Actions/index";
import ProductGroup from "../components/ProductGroup/ProductGroup";
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';

const ContactoComplete = React.lazy(() =>
  import("../components/Contacto/ContactoComplete")
);
const FooterPrinc = React.lazy(() =>
  import("../components/FooterPrinc/FooterPrinc")
);

const Home = () => {

  // window.scroll(0,0);

  const dispatch = useDispatch();

  const allProducts = useSelector(state => state.allProducts);

  useEffect(() => {

    dispatch(getAllProyect());
    dispatch(getAllProducts());
    dispatch(setOfertFilter());
    dispatch(setOfertStatus(true));

  }, [])

  return (
    <div>
      <BannerF />
      <NavBarPrinc />
      <ProductGroup navFoo={true} items={allProducts.sort((a,b) => a.orden - b.orden)} />
      {/* El suspense es para que se renderice esa seccion solo cuando sea necesario */}
      <Suspense fallback={<div>Cargando...</div>}>
        <FooterPrinc />
      </Suspense>
      <Wpp />
    </div>
  );
};

export default Home;
