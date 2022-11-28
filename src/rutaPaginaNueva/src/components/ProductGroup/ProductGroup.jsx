import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NavBarSec from "../NavBarSec/NavBarSec";
import ProductCard from "../ProductCard/ProductCard";
import FooterSec from "../FooterSec/FooterSec";
import { getAllProyect, getAllProducts, getProyectGoup, setOfertStatus, setFilterEnt } from "../../Redux/Actions/index";
import GroupStyle from "./ProductGroupStyle.module.css";

export default function ProyectGroup({ navFoo, location, items }) {
    // estoy buscando por useparams el id del producto para poder traer el detalle de la base de datos buscando la conexion de todo para llegar al resultado

    

    // window.scroll(0,0);

    const { id } = useParams();

    const dispatch = useDispatch();

    const proyect = useSelector(state => state.proyect);
    const proyectGroup = useSelector(state => state.proyectGroup);
    const ofertState = useSelector(state => state.ofertState);
    const ofertFilter = useSelector(state => state.ofertFilter);
    const entregasFilter = useSelector(state => state.entregasFilter);

    const [proyectSelect, setProyectSelect] = useState("");

    const [heightContentST, setHeightContentST] = useState(true);
    const [cantGroup, setCantGroup] = useState(Math.round(items?.filter( e => e.orden === 1).length/3));

    const contentActive = () => {

        let filas = items !== undefined ? Math.ceil(items?.length / 3) : Math.ceil(proyectGroup?.length / 3);

        if (items !== undefined) {

            if (filas >= 3) {
    
                document.getElementsByClassName(GroupStyle.containerGroup)[0].style.height = `126em`;
                
            } else if (filas = 2) {
    
                document.getElementsByClassName(GroupStyle.containerGroup)[0].style.height = `84em`;
                
            }

        } else {

            document.getElementsByClassName(GroupStyle.containerGroup)[0].style.height = `${42 * filas}em`;

        }


    }

    useEffect(() => {

        dispatch(setFilterEnt(id));

        setProyectSelect(proyect.filter(e => e.tipo === proyectGroup[0]?.tipo));

        contentActive()

    }, []);

    const heightContent = () => {

        let multi = Math.round(items.length / 3)

        let heightContAct = document.getElementsByClassName(GroupStyle.containerGroup)[0].offsetHeight;

        if (heightContentST) {

            document.getElementsByClassName(GroupStyle.containerGroup)[0].style.height = `${42 * multi}em`;

            setHeightContentST(false)

        } else {

            document.getElementsByClassName(GroupStyle.containerGroup)[0].style.height = `${(heightContAct * 3) / multi}px`;

            setHeightContentST(true)

        }

        document.getElementsByClassName(GroupStyle.btnVerMas).item(0).classList.toggle(GroupStyle.btnVerMasClose);

        // console.log(multi, heightContentST, 'tttt')

    }

    // let i = 0;

    // const la = () => {

    //     let y =document.getElementById("jojo")?.children[i].getBoundingClientRect().top

    //     let j = document.getElementById("jojo")?.children[i+1].getBoundingClientRect().top

    //     let k = document.getElementById("jojo")?.children[i+2].getBoundingClientRect().top

    //     console.log(y,j,k, i,'llll')

    // }

    // window.addEventListener("scroll", () => la())

    // console.log(items !== undefined, 'uuu')

    return (

        <div className={GroupStyle.ContainerPG} >

            {!navFoo && <NavBarSec />}

            <h1>{!navFoo && proyectSelect[0]?.title}</h1>

            <div className={GroupStyle.containerGroup} >

                <div className={GroupStyle.gridGroup} >

                    {

                        // ofertState ?

                        //     ofertFilter.map((e, i) => ( <ProductCard banner={banner} index={i} prod={e} key={e.id} len={ofertFilter.length} /> )) :

                        //     proyectGroup.map((e, i) => ( <ProductCard banner={banner} index={i} prod={e} key={e.id} len={proyectGroup.length} /> ))
                        
                        items?.length > 0 ?

                        items.map((e, i) => (<ProductCard index={i} prod={e} key={e.id} len={ofertFilter.length} />)) : 

                        proyectGroup.map((e, i) => ( <ProductCard index={i} prod={e} key={e.id} len={proyectGroup.length} /> ))

                    }

                </div>

            </div>

            {
                
                items?.length > 0 && <div className={GroupStyle.btnVerMas} onClick={heightContent} ></div>
                
            }

            {/* <ProductGroup productGroup={proyectGroup} /> */}
            
            <FooterSec/>

        </div>

    )

}