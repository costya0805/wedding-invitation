import OpenCurve from "../../assets/images/svg/openCurve";
import styles from "./Letter.module.css";

import greenBottle from '../../assets/images/bottles/BottleGreen.png';
import blueBottle from '../../assets/images/bottles/BottleBlue.png';
import pinkBottle from '../../assets/images/bottles/BottlePink.png';
import purpleBottle from '../../assets/images/bottles/BottlePurple.png';
import yellowBottle from '../../assets/images/bottles/BottleYellow.png';

const Letter = () => {
    const topBlock = () => (
        <div className={styles.mainText}>
            <div className={styles.about}>
                Вы приглашены на величайшее событие в наших жизнях — союз магии и храбрости, любви и преданности!
            </div>
            <div className={styles.place}>
                Дата: 12 июля 2025
                <br />
                Время: 15:00
                <br />
                Место: Замок красок на Острове Сердец
                <br />
                (ул. Колмогорова, 73, корп. 1, Краски Арт Лофт)
            </div>
        </div>
    );

    const middleBlock = () => (
        <div className={styles.drago}>
            <div className={styles.first}>
                Соберитесь вместе с нами, чтобы отпраздновать этот священный союз, сражаясь с чудовищами, поднимая
                торжественные тосты за благословения богов, наслаждаясь пиршеством.
            </div>
            <div className={styles.second}>
                Участникам следует прибыть в доспехах или в праздничных нарядах, и быть готовы к риску и волшебству!
            </div>
        </div>
    );

    const bottomBlock = () => (
        <div className={styles.bottomBlock}>
            <div className={styles.dressCode}>
                <div className={styles.title}>Дресс-код:</div>
                <div className={styles.bottles}>
                    <img width={73} id="1" src={yellowBottle}/>
                    <img width={54} id="2" src={greenBottle}/>
                    <img width={84} id="3" src={blueBottle}/>
                    <img width={57} id="4" src={purpleBottle}/>
                    <img width={97} id="5" src={pinkBottle}/>
                </div>
            </div>
            <div className={styles.postScriptum}>
                Желаем, чтобы каждый из вас оставил свой след на свитке нашей истории.
            </div>
            <div className={styles.postScriptum}>
                Мы ждём вашего предварительного ответа о присутствии на грядущем торжестве в кратчайшие сроки, а точное
                подтверждение требуется за месяц до наступления праздника.
            </div>
        </div>
    );

    const generateText = () => (
        <div className={styles.text}>
            <div className={styles.headerText}>Общий сбор близких приключенцев.</div>
            <div className={styles.namesText}>Дорогой Генадий</div>
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
            <div className={styles.bottomPattern}></div>
        </div>
    );
};

export default Letter;
