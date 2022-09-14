import axios from "axios";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import {

    GET_ALL_PROYECT,
    GET_ALL_PRODUCTS,
    GET_PROYECT_GROUP,
    SET_OFERT_STATUS,
    SET_FILTER_OFERT,
    SET_STATUS_OFERT

} from "./actionType";

export function getAllProyect() {

    return async function (dispatch) {

        try {

            let proyectDB = await getDocs(collection(db, "proyectos"));
    
            return dispatch({ type: GET_ALL_PROYECT, payload: proyectDB.docs.map(e => e.data()) });

        } catch (error) {

            console.log(error, "Error de Sistema.");

        }

    };

}

export function getAllProducts() {

    return async function(dispatch) {

        try {

            let allProdDB = await getDocs(collection(db, "publicacion"));
            
            return dispatch({ type: GET_ALL_PRODUCTS, payload: allProdDB.docs.map(e => {

                return {

                    ...e.data(),
                    id: e.id

                }

            })})
            
        } catch (error) {

            console.log(error, "Error de Sistema.")
            
        }

    }

}

export function setOfertFilter() {

    return {type: SET_FILTER_OFERT, payload: ""}

}

export function getProyectGoup(tipo) {

    return {type: GET_PROYECT_GROUP, payload: tipo}

}

export function setOfertStatus(st) {

    return {type: SET_OFERT_STATUS, payload: st}

}

export function setStatusOfert(payload) {

    return {type: SET_STATUS_OFERT, payload: payload}

}