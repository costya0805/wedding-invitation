import {useEffect, useState} from 'react';
import './Envelope.css';
import envelope from '../../assets/images/envelope.png';
import envelopeOpen from '../../assets/images/envelopeOpen.png';
import stamp from '../../assets/images/stamp.png';

export const Envelope = () => {
    const [isEnvelopeOpen, setIsEnvelopeOpen] = useState<boolean>(false);
    const [isChangeEnvelope, setIsChangeEnvelope] = useState<boolean>(false);
    const [isEnvelopeRotating, setIsEnvelopeRotating] = useState<boolean>(false);

    useEffect(() => {
        if (isEnvelopeOpen) {
            const timer = setTimeout(() => {
                setIsChangeEnvelope(true);
            }, 1000); // ждём 1 секунду для эффекта исчезновения
            const timer2 = setTimeout(() => {
                setIsEnvelopeRotating(true);
            }, 2000);
            return () => {
                clearTimeout(timer);
                clearTimeout(timer2);
            };
        }
    }, [isEnvelopeOpen]);

    return (
        <div onClick={() => setIsEnvelopeOpen(true)}
             className={`envelope ${isChangeEnvelope ? '' : 'envelopeNotOpen'}`}>
            <img
                src={envelope}
                className={`envelopeImg ${isChangeEnvelope ? 'opacityZero' : 'fadeOut'}`}
                alt={'envelope'}
            />
            <img
                src={envelopeOpen}
                className={`envelopeImgOpen ${isChangeEnvelope ? 'fadeIn' : 'opacityZero'} ${isEnvelopeRotating ? 'envelopeRotating' : ''}`}
                alt={'envelope'}
            />
            <img src={stamp} className={`stamp ${isEnvelopeOpen ? 'stmapHidden' : ''}`} alt={'stamp'}/>
        </div>
    );
}
