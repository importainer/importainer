import React, { useEffect, useState } from "react";
import { db, app } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import NavBar from "../NavBar/NavBar";
import CardList from "../CardList/CardList";
import "./ListPublic.css";

export default function ListPublic() {
    
    const [datos, setDatos] = useState([]);

    useEffect(() => {

        const getData = async () => {
      
          const querySnapshot = await getDocs(collection(db, "publicacion"));

          const pub = querySnapshot.docs.filter(doc => doc.data().status !== false);
      
          setDatos(pub.map(doc => {
            // 
            return {

                id: doc.id,
                codCRM: doc.data().codCRM,
                description: doc.data().description,
                file: doc.data().file,
                porcen: doc.data().porcen,
                price: doc.data().price,
                priceDesc: doc.data().priceDesc,
                title: doc.data().title,
                status: doc.data().status,

            }

          }));
      
        }
        const data = getData()
      
        setDatos([data])
      
    }, []);

    const orderDate = (a, b) => {

        if (a.codCRM > b.codCRM) {
      
          return 1
      
        }
      
        if (a.codCRM < b.codCRM) {
      
          return -1
      
        }
        
        return 0
      
    }

    // 
    return (

        <div className="CreatePubContent">

            <NavBar />

            <h1>Publicaciones</h1>

            <div>

                {

                    datos.sort(orderDate).map( (e, i) => {
                        
                        return (

                            <>
                            
                                <CardList img={e.file} title={e.title} pricePub={e.priceDesc} id={e.id} key={i} />
                            
                            </>

                        )

                    })

                }

            </div>

        </div>

    )

}