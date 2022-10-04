import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { getAllProyect, getAllProducts, getProyectGoup, setOfertFilter } from "../../Redux/Actions/index";
import NavBarSec from "../NavBarSec/NavBarSec";
import ProductCard from "../ProductCard/ProductCard";
import GroupStyle from "./ProductGroupStyle.module.css";

export default function ProyectGroup({ banner }) {

    const dispatch = useDispatch();

    const proyect = useSelector(state => state.proyect);
    const allProducts = useSelector(state => state.allProducts);
    const proyectGroup = useSelector(state => state.proyectGroup);
    const ofertState = useSelector(state => state.ofertState);
    const ofertFilter = useSelector(state => state.ofertFilter);

    const [proyectSelect, setProyectSelect] = useState("");
    const [prodSelect, setProdSelect] = useState([]);

    useEffect(() => {

        setProyectSelect(proyect.filter(e => e.tipo === proyectGroup[0]?.tipo))

    }, []);

    return (

        <div className={GroupStyle.ContainerPG} >

            {!ofertState && <NavBarSec />}

            <h1>{!ofertState && proyectSelect[0]?.title}</h1>

            <div className={GroupStyle.containerGroup} >

                {

                    ofertState ?

                        ofertFilter.map((e, i) => ( <ProductCard banner={banner} index={i} prod={e} key={e.id} len={ofertFilter.length} /> )) :
                        
                        proyectGroup.map((e, i) => ( <ProductCard banner={banner} index={i} prod={e} key={e.id} len={proyectGroup.length} /> ))

                }

            </div>

            {/* <ProductGroup productGroup={proyectGroup} /> */}

        </div>

    )

}