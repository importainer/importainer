import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { db, } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import NavBar from '../NavBar/NavBar';
import UserCard from '../UserCard/UserCard';
import SearchIcon from '@mui/icons-material/Search';
import './ListUser.css';

export default function ListUser({location}) {

  const history = useHistory();

  const [user, setUser] = useState([]);

  const [userSecond, setUserSecond] = useState([]);

  const [grupo, setGrupo] = useState([]);

  const [orden, setOrden] = useState([]);

  useEffect(() => {

    const getData = async () => {
  
      const querySnapshot = await getDocs(collection(db, "estadoCliente"));

      const pub = querySnapshot.docs;
  
      setUser(pub.map(e => e.data()));

      setUserSecond(pub.map(e => e.data()));
  
    }

    getData();
  
  }, []);

  const auth = getAuth();
  
  onAuthStateChanged(auth, (user) => {

    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
        
        // ...
      
    } else {

      // User is signed out
      // ...
      
      history.push("/admin")
      
    }

  });

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
      
      if(value !== "") {

        if(grupo.includes(value)) {

          setUserSecond(userSecond.filter(e => e.grupo === value))

        }

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

  }

  widthToWindow()

  return (

      <div className="listUserContent" >

          <NavBar tipo={location.state.tipo} />

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