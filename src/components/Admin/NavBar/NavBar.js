import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DehazeIcon from '@mui/icons-material/Dehaze';
import "./NavBar.css";

export default function NavBar() {

    const history = useHistory();

    const auth = getAuth();
    
    const logOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            }).catch((error) => {
            // An error happened.
            })

    }

    const rutaCreate = () => {
        
        history.push("/LoginCreate")

    }

    const rutaHome = () => {
        
        history.push("/indexAdm")

    }

    const rutaCreatePub = () => {
        
        history.push("/CreatePub")

    }
    
    const rutaListPub = () => {
        
        history.push("/ListaPublicaciones")

    }

    const rutaListUser = () => {}

    // const style = () => {

    //     const element = document.querySelectorAll('li:hover');

    //     element.className = "acrion"

    // }

    // style();
// 

    const [giro, setGiro] = useState(true);

    const efect = () => {

        if(giro) {

            let giro = document.getElementsByClassName('menuResponsive__icon')[0];

            giro.className = 'giro';

            let ul = document.getElementsByClassName('menuResponsive__ulDesactive')[0];

            ul.className = 'menuResponsive__ulActive'

            setGiro(false);

        } else {

            let giro = document.getElementsByClassName('giro')[0];

            giro.className = 'menuResponsive__icon';

            let ul = document.getElementsByClassName('menuResponsive__ulActive')[0];

            ul.className = 'menuResponsive__ulDesactive'

            setGiro(true);

        }

    }

    return (

        <div className="navContent">

            <ul className='menuResponsiveUL'>

                {/* <div className="action" ></div> */}
                <li className="izq" ><Link to="/indexAdm" >Home</Link></li>
                <li>Publicaciones

                    <ul>

                        <li><Link to="/ListaPublicaciones" >Listado de Publicaciones</Link></li>
                        <li><Link to="/CreatePub" >Crear Publicacion</Link></li>

                    </ul>

                </li>
                <li>Usuarios

                    <ul>

                        <li><Link to='/users' >Listado de Usuarios</Link></li>
                        <li><Link to="/LoginCreate" >Crear Usuario</Link></li>

                    </ul>

                </li>
                {/* <li onClick={rutaListUser}>Lista Usuarios</li> */}
                <li className="der" onClick={logOut}>LogOut</li>

            </ul>

            <div className="menuResponsive" >
                
                <div className="menuResponsive__icon" onClick={efect} ><DehazeIcon sx={{ color: '#fff' }} /></div>

                <div>

                    <ul className="menuResponsive__ulDesactive">

                        <li><Link to="/indexAdm" >Home</Link></li>
                        <li>Publicaciones

                            <ul>

                                <li><Link to="/ListaPublicaciones" >Listado de Publicaciones</Link></li>
                                <li><Link to="/CreatePub" >Crear Publicacion</Link></li>

                            </ul>

                        </li>
                        <li>Usuarios

                            <ul>

                                <li><Link to='/users' >Listado de Usuarios</Link></li>
                                <li><Link to="/LoginCreate" >Crear Usuario</Link></li>

                            </ul>

                        </li>
                        
                        <li onClick={logOut}>LogOut</li>

                    </ul>

                </div>
                
            </div>

        </div>

    )

}