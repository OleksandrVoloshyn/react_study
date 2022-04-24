import {useDispatch, useSelector} from "react-redux";
import {Users} from "./components/Users";
import {Posts} from "./components/Posts";

function App() {

    return (
        <div>
            <Users/>
            <hr/>
            <Posts/>
        </div>
    );
}

export default App;
