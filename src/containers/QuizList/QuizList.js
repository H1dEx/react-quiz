import React, {Component} from 'react';
import styles from './QuizList.module.scss';
import {NavLink} from 'react-router-dom';
import axios from "../../axios/axios-quiz";
import Loader from "../../components/UI/Loader/Loader";

class QuizList extends Component {
    state={
        quizes: [],
        loading: true
    }

    async componentDidMount() {
        try {
            const response = await axios.get('quizes.json');
            const quizes = [];
            Object.keys(response.data).forEach((key,index) => {
                quizes.push({
                    id: key,
                    name: `Test № ${index + 1}`
                })
            })
            this.setState({
                quizes, loading: false
            })
        } catch (e) {
            console.log(e)
        }
    }


    renderQuizes() {
        return this.state.quizes.map(quiz => {
            return (
                <li key={quiz.id}>
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className={styles.QuizList}>
                <div>
                    <h1>Quiz List</h1>
                    {!this.state.loading
                        ? (<ul>
                            {this.renderQuizes()}
                        </ul>)
                        : <Loader/>
                    }
                </div>
            </div>
        );
    }
}

export default QuizList;