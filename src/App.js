import {Cats, CatsForm, Dogs, DogsForm} from "./components";

function App() {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: "space-around"}}>
                <CatsForm/>
                <DogsForm/>
            </div>
            <hr/>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Cats/>
                <Dogs/>
            </div>
        </div>
    );
}

export default App;
