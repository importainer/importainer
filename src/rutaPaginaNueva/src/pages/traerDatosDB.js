
import { db, app } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const getData = async () => {

    const querySnapshot = await getDocs(collection(db, "publicacion"));

    // const pub = querySnapshot.docs.filter(doc => doc.data().status !== false);

    return querySnapshot.docs.map(doc => {

        return {

            id: doc.id,
            description: doc.data().description,
            file: doc.data().file,
            porcen: doc.data().porcen,
            price: doc.data().price,
            priceDesc: doc.data().priceDesc,
            title: doc.data().title,
            status: doc.data().status,

        }

    })

}