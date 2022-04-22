import {useReducer} from "react";

const init = initCount => {
    return {count1: initCount, count2: initCount, count3: initCount,}
}

const reducer = (state, action) => {
    const {type} = action
    console.log(state)
    switch (type) {
        // Increment
        case 'inc1':
            return {...state, count1: ++state.count1}
        case 'inc2':
            return {...state, count2: ++state.count2}
        case 'inc3':
            return {...state, count3: ++state.count3}
        // Decrement
        case 'dec1':
            return {...state, count1: --state.count1}
        case 'dec2':
            return {...state, count2: --state.count2}
        case 'dec3':
            return {...state, count3: --state.count3}
        // Reset
        case 'reset1':
            return {...state, count1: 0}
        case 'reset2':
            return {...state, count2: 0}
        case 'reset3':
            return {...state, count3: 0}

        default:
            console.log('default')
            return state

    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, 0, init);
    return (
        <div>
            <div>
                <div>Counter #1 : {state.count1}</div>
                <button onClick={() => dispatch({type: 'inc1'})}>inc</button>
                <button onClick={() => dispatch({type: 'dec1'})}>dec</button>
                <button onClick={() => dispatch({type: 'reset1'})}>reset</button>
            </div>

            <hr/>

            <div>
                <div>Counter #2 : {state.count2}</div>
                <button onClick={() => dispatch({type: 'inc2'})}>inc</button>
                <button onClick={() => dispatch({type: 'dec2'})}>dec</button>
                <button onClick={() => dispatch({type: 'reset2'})}>reset</button>
            </div>

            <hr/>

            <div>
                <div>Counter #3 : {state.count3}</div>
                <button onClick={() => dispatch({type: 'inc3'})}>inc</button>
                <button onClick={() => dispatch({type: 'dec3'})}>dec</button>
                <button onClick={() => dispatch({type: 'reset3'})}>reset</button>
            </div>
        </div>
    );
}

export default App;
