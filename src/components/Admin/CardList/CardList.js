import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { db, app } from "../../../firebase";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import "./CardList.css";

export default function CardList({ img, title, pricePub, id }) {

    const history = useHistory();
    
    const [open, setOpen] = useState(false);

    const Alert = React.forwardRef(function Alert(props, ref) {

        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;

    });

    const handleClick = () => {

        setOpen(true);

    };
    
    const handleClose = (event, reason) => {

        if (reason === 'clickaway') {

            return;

        }
    
        setOpen(false);
    };
    
    const deletePost = async () => {

        const collectionRef = app.firestore().collection("publicacion").doc(id);
        
        // const doc = collectionRef.delete();

        const doc = await collectionRef.update({status: false});

        handleClick();

        window.location.replace('');
        
    }

    return(

        <div className="cardContent">

            <img src={img} />
        
            <h3>{title}</h3>

            <div className="cardContent-text">Precio Publicado: ${pricePub}</div>

            <Link to={{ pathname: '/EditarPub', state: { id: id }}} ><div className="cardContent-textHover">Editar</div></Link>

            <input type="submit" value="Eliminar" onClick={deletePost} />

            {/* <div className="cardContent-textHover">Eliminar</div> */}

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>

                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>

                    Publicacion eliminada con exito!

                </Alert>

            </Snackbar>
        
        </div>

    )

}