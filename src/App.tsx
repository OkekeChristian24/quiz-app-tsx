import React, { useEffect, useState } from 'react';
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
import QuestionSettings from './components/QuestionSettings';
// types
import { QuestionsState, Difficulty } from './API';
// Styles
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [difficulty, setDifficulty] = useState(Difficulty.NULL);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showWarn, setShowWarn] = useState(false);

  const startTrivia = async () => {
    if(totalQuestions < 1 || difficulty === ""){
      setShowWarn(true);
      setTimeout(function(){
        setShowWarn(false);
      }, 2500);
      return;
    }
    setLoading(true);
    setGameOver(false);
    setIsPlaying(true);
    setShowScore(false);
    setShowTable(false);
   
    const newQuestions = await fetchQuizQuestions(
      totalQuestions,
      difficulty
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    setShowScore(true);
    setShowTable(true);
   
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // Save the answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }

    if(userAnswers.length + 1 === totalQuestions){
      setGameOver(true);
    }
  };

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQ = number + 1;
    if (nextQ === totalQuestions) {
      setGameOver(true);
      setIsPlaying(false);
    } else {
      setNumber(nextQ);
    }

  };

  const getQuestions = (questions: any) => {
    setTotalQuestions(questions);
  };

  const getDifficulty = (difficulty: Difficulty) => {
    setDifficulty(difficulty);
  };

  useEffect(function(){
    if(number == totalQuestions || userAnswers.length == totalQuestions){
      setGameOver(true);
      setIsPlaying(false);
    }
  }, [number, userAnswers, totalQuestions]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h4>General Knowledge Quiz</h4>
        <h5><a href="https://github.com/OkekeChristian24/quiz-app-tsx" target="_blank" rel="noreferrer noopener">By Okeke Christian</a> </h5>
        <div className={showWarn ? "show-warn" : "hide-warn"}>
          <img src="./stop-icon.png" alt="Stop icon"/>
          <p> Please set the no. of questions and difficulty level</p>
        </div>
        <QuestionSettings getQuestions={getQuestions} getDifficulty={getDifficulty} isPlaying={isPlaying} />
        {gameOver || userAnswers.length === totalQuestions ? (
          <button className='start' onClick={startTrivia}>
            Start
          </button>
        ) : null}
        {showScore ? <p className='score'>Score: {score}</p> : null}
        {loading ? <p><img className="loading" src="./spinner.gif" alt="Loading image" /></p> : null}
        {!loading && showTable && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={totalQuestions}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== totalQuestions - 1 ? (
          <button className='next' onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
