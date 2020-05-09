import React from "react";
import styles from './ActiveQuiz.module.scss';
import AnswerList from "./AnswersList/AnswerList";

const ActiveQuiz = props => {
    return (
        <div className={styles.ActiveQuiz}>
            <p className={styles.Question}>
                <span>
                    <strong>{props.activeNumber}.</strong>&nbsp;
                    {props.question}
                </span>
                <small>{props.activeNumber} of {props.quizLength}</small>
            </p>

            <AnswerList answers={props.answers}
                        state={props.state}
                        onAnswerClick={props.onAnswerClick}/>
        </div>
    )
}

export default ActiveQuiz;