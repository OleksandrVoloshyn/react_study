import './App.css';
import {useState} from "react";

import {CarForm, Cars} from "./components";

function App() {
    const [newCar, setNewCar] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <div className="App">
            <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars newCar={newCar} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
}

export default App;
