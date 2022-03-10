import { db } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';

const getTblProduct = async () => {

    return await getDocs(collection(db, 'productos'))
        .then(products => {

            const v = products.docs.map(e => e.data())

            console.log(v)

            return 'hola'

        })
        .catch(err => console.log(err, 'error'))

    // return 'hola'

}

export default {
    
    getTblProduct,

}