import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  debug: true,
  storage,
  whitelist: ["proyect", "allProducts", "proyectGroup", "ofertState", "ofertFilter", "aspeConst", "entregasFilter"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;