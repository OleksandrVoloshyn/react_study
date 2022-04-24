import {useReducer, useState} from "react";

const init = initCount => {
    return {cats: initCount, dogs: initCount}
}

const reducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {id: Date.now(), name: payload}]}
        case 'removeCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)}

        case 'addDog':
            return {...state, dogs: [...state.dogs, {id: Date.now(), name: payload}]}
        case 'removeDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)}

        default:
            console.log('err')
            return state
    }
}


function App() {
    const [state, dispatch] = useReducer(reducer, [], init);
    const [catValue, setCatValue] = useState('')
    const [dogValue, setDogValue] = useState('')

    const createCat = () => {
        dispatch({type: 'addCat', payload: catValue})
        setCatValue('')
    }

    const createDog = () => {
        dispatch({type: 'addDog', payload: dogValue})
        setDogValue('')
    }

    return (
        <div>

            <div style={{display: "flex", justifyContent: "center"}}>
                <div>
                    <label>Cat name: <input type="text" onChange={(e) => setCatValue(e.target.value)}
                                            value={catValue}/></label>
                    <button onClick={createCat}>add</button>
                </div>
                <div>
                    <label>Dog name: <input type="text" onChange={(e) => setDogValue(e.target.value)}
                                            value={dogValue}/></label>
                    <button onClick={createDog}>add</button>
                </div>
            </div>

            <hr/>
            <div style={{display: "flex", justifyContent: 'space-around'}}>
                <div>
                    Cats:
                    {state.cats.map(cat => (
                        <div key={cat.id}>
                            {cat.name}
                            <button onClick={() => dispatch({type: 'removeCat', payload: cat.id})}>Delete</button>
                        </div>
                    ))}
                </div>
                <div>
                    Dogs:
                    {state.dogs.map(dog => (
                        <div key={dog.id}>
                            {dog.name}
                            <button onClick={() => dispatch({type: 'removeDog', payload: dog.id})}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
