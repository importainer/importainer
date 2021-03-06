import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth,signOut } from "firebase/auth";
import DehazeIcon from '@mui/icons-material/Dehaze';
import "./NavBar.css";

export default function NavBar({tipo}) {
    
    const auth = getAuth();
    
    const logOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            }).catch((error) => {
            // An error happened.
            })

    }
    
    const element = document.getElementsByTagName('li');

    const active = document.getElementsByClassName("action");
    
    const style = () => {

        const elementos = [];
        
        for (let i = 0; i < element.length; i++) {


            const e = element[i];

            if(e.id) {

                elementos.push(e);

            }

        }
        
        elementos.forEach((e, i) => {

            const cantidad = elementos.length;

            const sect = 100 / cantidad;
            
            e.addEventListener('mouseover', () => {

                if (i === 0) {

                    active[0].style.borderRadius = "0 0 0 30px";
                    
                } else if(i === elementos.length - 1) {

                    active[0].style.borderRadius = "0 0 30px 0";

                } else active[0].style.borderRadius = "0 0 0 0";

                active[0].style.position = "absolute";

                active[0].style.left = `${sect * i}%`;

                active[0].style.width = `${sect}%`;
                
                

            });
            
            e.addEventListener('mouseout', () => {

                active[0].style.width = "3%";

                active[0].style.left = "0%";

                active[0].style.borderRadius = "0 30px 0 30px";


            });

        });

    }

    style();

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

{/* <div className='menuResponsiveUL__cont' ><div className="action" ></div></div> */}

            <ul className='menuResponsiveUL'>

                <div className="action" ></div>
                <li id="mnuPrin" className="izq" ><Link to="/indexAdm" >Home</Link></li>
                {

                    tipo === 'marketing' ? <li id="mnuPrin" ><Link to="/ReservasADM">Reservas</Link></li> : null

                }

                {

                    tipo === 'marketing' ? <li id="mnuPrin hover" >Publicaciones

                            <ul>

                                <li><Link to="/ListaPublicaciones" >Listado de Publicaciones</Link></li>
                                <li><Link to="/CreatePub" >Crear Publicacion</Link></li>

                            </ul>

                        </li> : null

                }

                {

                    tipo === 'marketing' ? <li id="mnuPrin" ><Link to="/TestimonyList">Testimonios</Link></li> : null

                }

                <li id="mnuPrin" >Usuarios

                    <ul>

                        {tipo === 'admin' ? <li><Link to='/users' >Listado de Usuarios</Link></li> : null}

                        {tipo === 'marketing' ? <li><Link to='/consultasADM' >Consultas de Usuarios</Link></li> : null}

                        <li><Link to="/LoginCreate" >Crear Usuario</Link></li>

                    </ul>

                </li>
                {/* <li onClick={rutaListUser}>Lista Usuarios</li> */}
                <li id="mnuPrin" className="der" onClick={logOut}>LogOut</li>

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