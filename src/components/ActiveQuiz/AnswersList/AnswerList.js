import React from "react";
import AnswerItem from "./AnswerItem/AnswerItem";
import styles from './AnswerList.module.scss';

const AnswerList = props => {
    return (
        <ul className={styles.AnswerList}>
            {props.answers.map((answer, index) => {
                return <AnswerItem key={index} answer={answer}
                            onAnswerClick={props.onAnswerClick}
                            state={props.state? props.state[answer.id]: null}
                />
            })}
        </ul>
    )
}

export default AnswerList;