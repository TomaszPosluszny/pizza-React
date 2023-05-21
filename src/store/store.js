import{createStore} from "redux"
import { ReactDOM } from "react"
import { pizzaReducer } from "./reducers/globalReducer"

const store = createStore(pizzaReducer)
export default store
