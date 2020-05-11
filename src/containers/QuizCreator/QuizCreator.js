import React, {Component} from 'react';
import styles from './QuizCreator.module.scss';
import Button from "../../components/UI/Button/Button";
import {createControl, validate, validateForm} from "../../form/formFramework";
import Input from "../../components/UI/Input/Input";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Select from "../../components/UI/Select/Select";

function createOptionControl(number) {
    return createControl ({
        label: `Variant ${number}`,
        errorMessage: 'Value cannot be empty',
        id: number
    }, {required: true})
}

function createFormControls() {
    return ( {
        question: createControl({
            label: 'Enter your question',
            errorMessage: 'The question cannot be empty'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    })
}

class QuizCreator extends Component {

    state = {
        quiz: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls : createFormControls()
    }

    submitHandler = e => e.preventDefault();
    addQuestionHandler = (e) => {e.preventDefault()}
    createQuizHandler = (e) => {e.preventDefault()}
    changeHandler = (value, controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};
        control.touched = true;
        control.value = value;
        control.valid = validate(control.value, control.validation);

        formControls[controlName] = control;
        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
    }

     renderControls() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Auxiliary key={controlName + index}>
                    <Input
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={event=>this.changeHandler(event.target.value, controlName)}
                    />
                    {index === 0? <hr/>: null}
                </Auxiliary>
            );
        })
     }

     selectChangeHandler = e => {
        this.setState({rightAnswerId: +e.target.value})
     }

    render() {
        const select = <Select
            label="Choose right answer"
            value={this.state.rightAnswerId}
            onChange={this.selectChangeHandler}
            options={[
                {text: 1, value: 1},
                {text: 2, value: 2},
                {text: 3, value: 3},
                {text: 4, value: 4}
            ]}
        />;
        return (
            <div className={styles.QuizCreator}>
                <div>
                    <h1>Quiz Creator</h1>
                    <form onSubmit={this.submitHandler}>
                        {this.renderControls()}
                        {select}
                        <Button
                            type="primary"
                            onClick={this.addQuestionHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Add question
                        </Button>
                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                            disabled={this.state.quiz.length === 0}
                        >
                            Make a test
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default QuizCreator;