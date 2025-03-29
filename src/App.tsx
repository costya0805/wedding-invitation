import './App.css';
import Letter from './components/Letter';
import {Envelope} from "./components/Envelope/Envelope.tsx";

const App = () => {

    return (
        <div className={'main'}>
            <Letter />
            <Envelope/>
        </div>
    );
}

export default App;
