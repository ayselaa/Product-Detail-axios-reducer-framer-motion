export const reducer = (state, action) => {
    switch(action.type){
        case "FETCH START":
            return {...state, loading: true,  data: "", error: ""}
        case "FETCH SUCCESS":
            return {...state, loading: false, data: action.payload}
        case "FETCH ERROR":
            return{...state, loading: false, error: action.payload }
            default: 
            return state;
    }
}