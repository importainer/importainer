import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { getAllProyect, getAllProducts, getProyectGoup, setOfertFilter } from "../../Redux/Actions/index";
import NavBarSec from "../NavBarSec/NavBarSec";
import ProductCard from "../ProductCard/ProductCard";
import GroupStyle from "./ProyectGroupStyle.module.css";

export default function ProyectGroup() {

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

    // console.log(proyect.filter(e => e.tipo === proyectGroup[0].tipo), 'eeeee')

    return (

        <div className={GroupStyle.ContainerPG} >

            {!ofertState ? <NavBarSec /> : null}

            <h1>{!ofertState ? proyectSelect[0]?.title : null}</h1>

            <div className={GroupStyle.containerGroup} >

                {

                    ofertState ?

                        ofertFilter.map(e => ( <ProductCard prod={e} key={e.id} /> )) :
                        
                        proyectGroup.map(e => ( <ProductCard prod={e} key={e.id} /> ))

                }

            </div>

            {/* <ProductGroup productGroup={proyectGroup} /> */}

        </div>

    )

}