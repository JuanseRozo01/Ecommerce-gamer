import { useReducer } from "react";


const initialState = {
    contador: 0
}

type ActionType = 
| {type: 'Increment'}
| {type: 'decrement'}

 //manera facil de inferir en el tipo con typeScript
const contaReducer = (state: typeof initialState, action: ActionType) => {

    switch(action.type){
        case 'Increment':
            return {
                ...state,
                contador: state.contador + 1
            }

            case 'decrement':
            return{
                ...state,
                contador: state.contador -1
            }
        default:
            return state;

    }
}




export const Products = () => {
    const [contadorState,dispatch] = useReducer(contaReducer, initialState)
    return(
        <>
        <h2>
            contador: {contadorState.contador} 
        </h2>
        <button onClick={() => dispatch({type: 'Increment'})}>+1</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-1</button>
        </>
    )
    }