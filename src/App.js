import React from 'react';
import Layout from "./hoc/Layout/Layout";
import {Switch, Route} from 'react-router-dom';
import Quiz from "./containers/Quiz/Quiz";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";

function App() {
  return (
    <Layout>
    <Switch>
        <Route path="/auth" render={()=><Auth/>}/>
        <Route path="/quiz-creator" render={()=><QuizCreator/>}/>
        <Route path="/quiz/:id" render={()=><Quiz/>}/>
        <Route path="/" render={()=><QuizList/>}/>
    </Switch>
    </Layout>
  );
}

export default App;
