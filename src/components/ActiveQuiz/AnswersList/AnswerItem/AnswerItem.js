import React from "react";
import styles from './AnswerItem.module.scss';

const AnswerItem = props => {
    const clazz = [styles.AnswerItem]
    if (props.state) {
        clazz.push(styles[props.state])
    }
    return (
        <li className={clazz.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}>
            {props.answer.text}
        </li>
    )
}
export default AnswerItem;