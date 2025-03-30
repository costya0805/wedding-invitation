import OpenCurve from "../../assets/images/svg/openCurve";
import CloseCurve from "../../assets/images/svg/closeCurve";
import styles from "./Letter.module.css";

import drago from "../../assets/images/dragon.png";
import fire from "../../assets/images/flame.svg";
import greenBottle from "../../assets/images/bottles/BottleGreen.png";
import blueBottle from "../../assets/images/bottles/BottleBlue.png";
import pinkBottle from "../../assets/images/bottles/BottlePink.png";
import purpleBottle from "../../assets/images/bottles/BottlePurple.png";
import yellowBottle from "../../assets/images/bottles/BottleYellow.png";
import { createRef, useEffect, useState } from "react";
import { GUESTS } from "../../constants/guests";

const Letter = () => {
    const [isShowFire, setIsShowFire] = useState<boolean>(false);
    const [isShowFire2, setIsShowFire2] = useState<boolean>(false);
    const [isShowFire3, setIsShowFire3] = useState<boolean>(false);

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const name = createRef<HTMLDivElement>();

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Удаляем событие при размонтировании компонента
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (name.current) {
                const rect = name.current.getBoundingClientRect();
                setDimensions({ width: rect.width, height: rect.height });
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleScroll = () => {
        if ((screenWidth > 760 && window.scrollY >= 300) || (screenWidth <= 760 && window.scrollY >= 300)) {
            setIsShowFire(true);
            setTimeout(() => {
                setIsShowFire2(true);
            }, 600);
            setTimeout(() => {
                setIsShowFire3(true);
            }, 1200);

            window.removeEventListener("scroll", handleScroll);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const topBlock = () => (
        <div className={styles.mainText}>
            <div className={styles.about}>
                Вы приглашены на величайшее событие в наших жизнях — союз магии и храбрости, любви
                {screenWidth > 760 ? <br /> : " "}и преданности!
            </div>
            <div className={styles.place}>
                Дата: 12 июля 2025
                <br />
                Время: 15:00
                <br />
                Место: Замок красок на Острове Сердец
                <br />
                (ул. Колмогорова, 73
                {screenWidth > 760 ? ", корп. 1, " : "к1, "}
                Краски Арт Лофт)
            </div>
        </div>
    );

    const middleBlock = () => (
        <div className={styles.drago}>
            <div className={styles.first}>
                Соберитесь вместе с нами, чтобы отпраздновать этот священный союз, сражаясь с чудовищами, поднимая
                торжественные тосты
                <br />
                за благословения богов,
                {screenWidth > 760 ? " " : <br />}
                наслаждаясь пиршеством.
            </div>
            <div className={styles.second}>
                Участникам следует прибыть
                <br />
                в доспехах или в праздничных нарядах,
                <br />и быть готовы к риску и волшебству!
            </div>
        </div>
    );

    const bottomBlock = () => (
        <div className={styles.bottomBlock}>
            <div className={styles.dressCode}>
                <div className={styles.title}>Дресс-код:</div>
                <div className={styles.bottles}>
                    <img className={styles.yellow} src={yellowBottle} />
                    <img className={styles.green} src={greenBottle} />
                    <img className={styles.blue} src={blueBottle} />
                    <img className={styles.purple} src={purpleBottle} />
                    <img className={styles.pink} src={pinkBottle} />
                </div>
            </div>
            <div className={styles.postScriptum}>
                Желаем, чтобы каждый из вас оставил свой след на свитке нашей истории.
            </div>
            <div className={styles.postScriptum}>
                Мы ждём вашего предварительного ответа
                {screenWidth > 760 ? " " : <br />}о присутствии на грядущем торжестве
                {screenWidth > 760 ? " " : <br />}в кратчайшие сроки, а точное подтверждение требуется за месяц
                {screenWidth > 760 ? " " : <br />}до наступления праздника.
            </div>
        </div>
    );

    const generateText = () => (
        <div className={styles.text}>
            <div className={styles.headerText}>Общий сбор близких приключенцев.</div>
            <div className={styles.namesText} ref={name}>
                {GUESTS[id ?? ""] ?? "Дорогой неизвестный путник"}
            </div>
            <div className={styles.textContent}>
                {topBlock()}
                {middleBlock()}
                {bottomBlock()}
            </div>
            <div className={styles.signature}>
                С любовью и магией,
                <br />
                Константин Кочергин и Дарья Дигтяренко
                <br />
                — будущие союзники в совместных битвах
                <br />и приключениях.
            </div>
        </div>
    );

    return (
        <div className={styles.letter}>
            <div className={styles.texture}></div>
            <div className={styles.headerPattern}>
                <OpenCurve />
            </div>
            {generateText()}
            <img className={styles.dragoImage} src={drago} style={{ marginTop: `${dimensions.height}px` }} />
            {isShowFire && <img src={fire} className={styles.fire} style={{ marginTop: `${dimensions.height}px` }} />}
            {isShowFire2 && <img src={fire} className={styles.fire2} style={{ marginTop: `${dimensions.height}px` }} />}
            {isShowFire3 && <img src={fire} className={styles.fire3} style={{ marginTop: `${dimensions.height}px` }} />}
            <div className={styles.bottomPattern}>
                <CloseCurve />
                <CloseCurve className={styles.revert} />
            </div>
        </div>
    );
};

export default Letter;
