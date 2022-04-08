import './App.css';
import {Comments, Posts, Users} from "./components";

function App() {
    return (
        <div className="App">
            <Users/>
            <hr/>
            <Posts/>
            <hr/>
            <Comments/>
        </div>
    );
}

export default App;