import { useReducer } from "react"
import { reducer} from '../../reducer.js'

const initialState = {
    data: "",
    loading: false,
    error: ""
}

function About() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchDog = () => {

        dispatch({ type: "FETCH START" });
        
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((res) => {

         dispatch({ type: "FETCH SUCCESS", payload: res.message});
            })
            .catch(() => {
         dispatch({ type: "FETCH ERROR", payload: "Error fetching data...!"})
            });
    }

    return (
        <>
            <button onClick={fetchDog}>
                Fetch Dog
            </button>
           
                <div>
                    <img src={state.data} alt="img" />
                </div>
          
             <p>{state.error}</p>
        </>
    )

}

export default About
