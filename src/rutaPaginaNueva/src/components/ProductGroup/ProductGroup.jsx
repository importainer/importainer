import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NavBarSec from "../NavBarSec/NavBarSec";
import ProductCard from "../ProductCard/ProductCard";
import { getAllProyect, getAllProducts, getProyectGoup, setOfertStatus, setFilterEnt } from "../../Redux/Actions/index";
import GroupStyle from "./ProductGroupStyle.module.css";

export default function ProyectGroup({ banner, location }) {
// estoy buscando por useparams el id del producto para poder traer el detalle de la base de datos buscando la conexion de todo para llegar al resultado
    const { id } = useParams();
    console.log(id, 'hhhh');

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(setFilterEnt(id));

    }, [])

    const proyect = useSelector(state => state.proyect);
    const proyectGroup = useSelector(state => state.proyectGroup);
    const ofertState = useSelector(state => state.ofertState);
    const ofertFilter = useSelector(state => state.ofertFilter);
    const entregasFilter = useSelector(state => state.entregasFilter);

    const [proyectSelect, setProyectSelect] = useState("");

    useEffect(() => {

        setProyectSelect(proyect.filter(e => e.tipo === proyectGroup[0]?.tipo)); 

    }, []);

    console.log(entregasFilter, 'llll')

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