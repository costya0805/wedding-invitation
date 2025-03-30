import "./App.css";
import Letter from "./components/Letter";
import Envelope from "./components/Envelope";
import { useState } from "react";

const App = () => {
    const [isLetterOpen, setIsLetterOpen] = useState<boolean>(false);

    const handleClick = () => {
        setIsLetterOpen(true)
    }

    return (
        <div className={"main"}>
            <Envelope openLetter={handleClick} />
            {isLetterOpen && <Letter />}
        </div>
    );
};

export default App;
