import {useState} from 'react'
import './App.css'
import envelope from './assets/images/envelope.png';
import stamp from './assets/images/stamp.png';
import Letter from './components/Letter';

const App = () => {
    const [isEnvelopeOpen, setIsEnvelopeOpen] = useState<boolean>(false)

    return (
        <div className={'main'}>
            <div onClick={() => setIsEnvelopeOpen(true)} className={'envelope'}>
                <img src={envelope} className={'envelopeImg'} alt={'envelope'}/>
                <img src={stamp} className={`stamp ${isEnvelopeOpen ? 'stmapHidden' : ''}`} alt={'stamp'}/>
            </div>
            <Letter />
        </div>
    )
}

export default App
