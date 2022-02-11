import React, { useEffect, useState } from 'react';
import { db, app } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import NavBar from '../NavBar/NavBar';
import UserCard from '../UserCard/UserCard';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
// import { users } from '../../../usersMoq';
import './ListUser.css';

export default function ListUser() {

    const [user, setUser] = useState([]);

    const [userSecond, setUserSecond] = useState([]);

    const [grupo, setGrupo] = useState([]);

    const [orden, setOrden] = useState([]);

    useEffect(() => {

      const getData = async () => {
    
        const querySnapshot = await getDocs(collection(db, "estadoCliente"));

      //   const pub = querySnapshot.docs.filter(doc => doc.data().status !== false);

        const pub = querySnapshot.docs;
    
        setUser(pub.map(e => e.data()));

        setUserSecond(pub.map(e => e.data()));
    
      }

      getData();
    
      // setUser([data]);

      // setUser2(users);

      
      
    }, []);

    const stateLoading = () => {

      if(grupo.length === 0) {

        setGrupo(user.reduce((acc, user) => {

          if(!acc.includes(user.grupo)) acc.push(user.grupo);
    
          return acc;
    
        },[]));

      }

      if(orden.length === 0) {

        setOrden(user.map(e => e.orden))

      }

    }

    setTimeout(() => {

      stateLoading()

    }, 200)

    const onChangeGrupo = (e) => {

      const { value } = e.target;
      
      const ordenEt = document.getElementById('orden').value;
      
      if(ordenEt !== '') {
        
        if(orden.includes(ordenEt)) {
        
          if(grupo.includes(value)) {
  
            const userfind = userSecond.find(e => e.grupo === value);
            
            setUserSecond([userfind]);
  
          } else {
  
            setUserSecond(user.filter(e => e.orden === ordenEt));
  
          }
  
        }

      } else {
        
        // setOrden(users.reduce((acc, user) => {

        //   if(user.grupo === value) acc.push(user.orden);
  
        //   return acc;
  
        // }, []));
  
        if(value !== "") {

          if(grupo.includes(value)) {

            setUserSecond(userSecond.filter(e => e.grupo === value))

          }


          // const userSearch = userSecond.find(e => e.grupo === value);

          // if(userSearch !== undefined) setUserSecond([userSearch]);

        } else {
  
          setUserSecond(user);
        
          setOrden(user.map(e => e.orden));
  
        }
        
      }

    }

    const onchangeOrden = (e) => {

      const { value } = e.target;

      const grupoEt = document.getElementById('grupo').value;
      
      if(orden.includes(value)) {

        if(grupo.includes(grupoEt)) {

          setUserSecond(user.filter(e => e.orden === value && e.grupo === grupoEt));

        } else {

          setUserSecond(user.filter(e => e.orden === value));

        }


      }

      if(value === "") {

        if(grupoEt === "") setUserSecond(user);

        else setUserSecond(user.filter(e => e.grupo === grupoEt));

      }

    }

    const dniSearch = (e) => {

      const dni = document.getElementById('dni').value;

      const dniNumber = Number.parseInt(dni);
      
      setUserSecond([user.find(e => e.dni === dniNumber)]);

    }
    
    const widthToWindow = () => {
        
      if(window.innerWidth < 900) {

        console.log('pantalla menor a 900')
  
      }

      // console.log(window.innerWidth)

    }

    widthToWindow()

    // console.log(orden, 'dbOrden')

    // console.log(grupo, 'grupo')

    return (

        <div className="listUserContent" >

            <NavBar />

            <h1>Estados de Usuarios</h1>
            
            <div className="listUserContent__busqueda" >

              <input id='grupo' type="text" placeholder="Grupo" onChange={ e => onChangeGrupo(e)} />

              <input id='orden' type="text" placeholder="Orden" onChange={ e => onchangeOrden(e)} />

                <div className="busqueda__buscador" >

                  <input id='dni' type="text" placeholder="DNI a Buscar.." />
                  {/* 
                  <div className="buscador__buttom" >

                    <Button variant="outlined" startIcon={<SearchIcon color="error" />} color="error" >
                      Buscar
                    </Button>

                  </div> */}
                  
                  {/* <input id="btnBus" type="submit" value="Buscar" onClick={dniSearch} /> */}

                  <div className="buscador__buttom" onClick={dniSearch} > <SearchIcon /> {window.screen.width > 700 ? <p>Buscar</p> : null} </div>

                </div>
              
            </div>

            {

              userSecond?.map( e => {
                
                return (
  
                  <UserCard 
                  
                    user={e}
                  
                  />

                )

              })

            }

        </div>

    )

}