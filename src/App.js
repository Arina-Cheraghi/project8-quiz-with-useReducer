import React, { useEffect, useReducer } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import { type } from '@testing-library/user-event/dist/type';
import Loader from './Components/Loader';
import Error from './Components/Error';
import StartScreen from './Components/StartScreen';
import Questions from './Components/Questions';
import NextButton from './Components/NextButton';
import Progress from './Components/Progress';
import FinishScreen from './Components/FinishScreen';
import Timer from './Components/Timer';

function App() {
  const initialState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    secondsRemaining: null
  }

  function reducer(state, action) {
    switch (action.type) {
      case "dataRecived":
        return {
          ...state,
          questions: action.payload,
          status: "ready"
        };
      case "dataFailed": {
        return {
          ...state,
          status: 'error'
        }
      }
      case "start": {
        return {
          ...state,
          status: 'active',
          secondsRemaining: state.questions.length * 30
        }
      }
      case "newAnswer": {
        const question = state.questions.at(state.index);
        return {
          ...state,
          answer: action.payload,
          points: action.payload === question.correctAnswer
            ? state.points + question.points
            : state.points
        }
      }
      case "nextQuestion":
        if (state.index + 1 >= state.questions.length) {
          return { ...state, status: "finished" };
        }
        return {
          ...state,
          index: state.index + 1,
          answer: null
        };
      case "finished":
        return { ...state, status: "finished" }
      case "restart":
        return { ...initialState, questions: state.questions, status: "ready" }
      case "tick":
        return {
          ...state, secondsRemaining: state.secondsRemaining - 1,
          status: state.secondsRemaining === 0 ? "finished" : state.status,
        }
      default:
        throw new Error("action unknown")
    }
  }

  const [{ questions, status, index, answer, points, secondsRemaining }, dispatch] = useReducer(reducer, initialState);
  const numQuestions = questions ? questions.length : 0;
  const allPoints = questions ? questions.reduce((prev, cur) => prev + cur.points, 0) : 0;

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataRecived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === "loading" && < Loader />}
        {status === "ready" && < StartScreen dispatch={dispatch} numQuestions={numQuestions} />}
        {status === "active" &&
          <>
            <Progress answer={answer} allPoints={allPoints} index={index} numQuestions={numQuestions} points={points} />
            <Questions dispatch={dispatch} answer={answer} question={questions[index]} />
            <footer className='flex w-2/6 justify-between'>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton dispatch={dispatch} index={index} numQuestions={numQuestions} answer={answer} />
            </footer>
          </>
        }
        {status === "error" && < Error />}
        {status === "finished" && <FinishScreen points={points} allPoints={allPoints} dispatch={dispatch} />}
      </Main>
    </div>
  )
}

export default App;