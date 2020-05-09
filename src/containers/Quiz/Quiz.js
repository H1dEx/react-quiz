import React, {Component} from "react";
import styles from './Quiz.module.scss';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";


export default class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                id: 1,
                question: 'How are you?',
                rightAnswer: 2,
                answers: [
                    {text:'Fine', id: 1},
                    {text:'Ok', id: 2},
                    {text:'Well', id: 3},
                    {text:'Very bad', id: 4},
                ]
            },
            {
                id: 2,
                question: 'How many fingers do you have?',
                rightAnswer: 4,
                answers: [
                    {text:'Five', id: 1},
                    {text:'Nine', id: 2},
                    {text:'Ten', id: 3},
                    {text:'Twenty', id: 4},
                ]
            },
            {
                id: 3,
                question: 'Are you having good time?',
                rightAnswer: 2,
                answers: [
                    {text:'Of course', id: 1},
                    {text:'Yep', id: 2},
                    {text:'Nope', id: 3},
                    {text:'Yooyyoy', id: 4},
                ]
            },
        ]
    }

    retryHandler = () => {
        this.setState({
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
        })
    }

    onAnswerClickHandler = answerId => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') return;
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = {...this.state.results};

        if (question.rightAnswer === answerId) {
            if (!results[question.id]) results[question.id] = 'success';
            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })

            const timeout = setTimeout(() => {
                    if (this.isQuizFinished()) {
                        this.setState({isFinished: true})
                    } else {
                        this.setState(
                            {
                            activeQuestion: this.state.activeQuestion + 1,
                                answerState: null
                        })
                    }
                clearTimeout(timeout);
            }, 1000)
        } else {
            results[question.id] = 'error';
            console.log(this.state.results)
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    render() {
        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Quiz</h1>
                    {(this.state.isFinished)
                        ? (<FinishedQuiz results={this.state.results}
                                         quiz={this.state.quiz}
                                         onRetry={this.retryHandler}
                        />)
                        :( <ActiveQuiz answers={this.state.quiz[this.state.activeQuestion].answers}
                                      question={this.state.quiz[this.state.activeQuestion].question}
                                      onAnswerClick={this.onAnswerClickHandler}
                                      quizLength={this.state.quiz.length}
                                      activeNumber={this.state.activeQuestion + 1}
                                      state={this.state.answerState}
                        />)
                    }
                </div>
            </div>
        );
    }
}
