import { db } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';

const getTblProduct = async (tabla) => {

    return await getDocs(collection(db, tabla))
        .then(element => {

            const elements = element.docs.map(e => e.data());

            return elements

        })
        .catch(err => console.log(err, 'error'))

}

export {
    
    getTblProduct,

}