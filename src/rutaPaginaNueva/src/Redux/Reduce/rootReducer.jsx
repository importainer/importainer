import {

    GET_ALL_PROYECT,
    GET_ALL_PRODUCTS,
    GET_PROYECT_GROUP,
    GET_ALL_ASPECONST,
    GET_ALL_ENTREGAS,
    SET_OFERT_STATUS,
    SET_FILTER_OFERT,
    SET_STATUS_OFERT,
    SET_FILTER_ENT

} from "../Actions/actionType";

const initialState = {

    proyect: [],
    allProducts: [],
    proyectGroup: [],
    ofertState: true,
    ofertFilter: [],
    aspeConst: [],
    allEntregas: [],
    entregasFilter: [],

};

export default function rootReducer(state = initialState, action) {

    switch (action.type) {

        case GET_ALL_PROYECT:
            
            return {

                ...state,
                proyect: action.payload

            }

        case GET_ALL_PRODUCTS:

            return {

                ...state,
                allProducts: action.payload

            }

        case GET_PROYECT_GROUP:

            return {

                ...state,
                proyectGroup: state.allProducts.filter(e => e.tipo === action.payload)

            }

        case GET_ALL_ASPECONST:
            
            return {

                ...state,
                aspeConst: action.payload

            }

        case GET_ALL_ENTREGAS:

            return {

                ...state,
                allEntregas: action.payload

            }

        case SET_OFERT_STATUS:

            return {

                ...state,
                ofertState: action.payload

            }

        case SET_FILTER_OFERT:

            return {

                ...state,
                ofertFilter: state.allProducts.filter(e => e.ofert === true)

            }

        case SET_STATUS_OFERT:

            return {

                ...state,
                ofertState: action.payload
            }

        case SET_FILTER_ENT:
            
            return {

                ...state,
                entregasFilter: state.allEntregas.filter(e => e.id === action.payload)
            
            }

        default:

            return state;

    }

}
