import { useEffect, useState } from "react";
import envelope from "../../assets/images/envelope.png";
import envelopeOpen from "../../assets/images/envelopeOpen.png";
import stamp from "../../assets/images/stamp.png";

import styles from "./Envelope.module.css";
import cn from "classnames";

const Envelope = ({ openLetter }: { openLetter: () => void }) => {
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
                setTimeout(() => {
                    openLetter();
                }, 2000);
            }, 2000);
            return () => {
                clearTimeout(timer);
                clearTimeout(timer2);
            };
        }
    }, [isEnvelopeOpen]);

    const handleClick = () => {
        setIsEnvelopeOpen(true);
    };

    return (
        <>
            <div className={styles.background}></div>
            <div onClick={handleClick} className={cn(styles.envelope, !isChangeEnvelope && styles.envelopeNotOpen)}>
                <img
                    src={envelope}
                    className={cn(styles.envelopeImg, isChangeEnvelope ? styles.opacityZero : styles.fadeOut)}
                    alt={"envelope"}
                />
                <img
                    src={envelopeOpen}
                    className={cn(
                        styles.envelopeImgOpen,
                        isChangeEnvelope ? styles.fadeIn : styles.opacityZero,
                        isEnvelopeRotating && styles.envelopeRotating
                    )}
                    alt={"envelope"}
                />
                {!isChangeEnvelope && (
                    <img src={stamp} className={cn(styles.stamp, isEnvelopeOpen && styles.stmapHidden)} alt={"stamp"} />
                )}
            </div>
        </>
    );
};

export default Envelope;
