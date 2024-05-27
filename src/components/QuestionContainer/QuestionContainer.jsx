import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Question from '../Question/Question';
import dbQuestion from '../../assets/db';
import './QuestionContainer.css';

const QuestionContainer = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const savedAnswers = JSON.parse(localStorage.getItem('answers')) || [];
        setAnswers(savedAnswers);

        const remainingQuestions = dbQuestion.filter(
            q => !savedAnswers.some(a => a.questionId === q.id)
        );
        setQuestions(remainingQuestions);
        setCurrentQuestion(getRandomQuestion(remainingQuestions, savedAnswers));
    }, []);

    const getRandomQuestion = (questions, answers) => {
        const remainingQuestions = questions.filter(
            q => !answers.some(a => a.questionId === q.id)
        );
        if (remainingQuestions.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
        return remainingQuestions[randomIndex];
    };

    const handleSaveAnswer = (answer) => {
        const newAnswers = [...answers, { questionId: currentQuestion.id, question: currentQuestion.question, answer }];
        newAnswers.sort((a, b) => a.questionId - b.questionId);
        setAnswers(newAnswers);
        localStorage.setItem('answers', JSON.stringify(newAnswers));
        const updatedQuestions = questions.filter(q => q.id !== currentQuestion.id);
        setQuestions(updatedQuestions);
        setCurrentQuestion(getRandomQuestion(updatedQuestions, newAnswers));
    };
    const handleRestartTest = () => {
        localStorage.removeItem('answers');
        localStorage.removeItem('user');
        setAnswers([]);
        setQuestions(dbQuestion);
        setCurrentQuestion(getRandomQuestion(dbQuestion, []));
    };

    const handleEndTest = () => {
        const test = JSON.parse(localStorage.getItem('answers')) || [];
        setAnswers(test);
    };

    return (
        <div className='questionContainer-container'>
            <div className="container ">
                <div className='row'>
                    <h1>Orientación Vocacional</h1>
                    {currentQuestion ? (
                        <div className=''>
                            <Question question={currentQuestion} onSaveAnswer={handleSaveAnswer} />
                            <Link to="/responses" onClick={handleEndTest} className='btn btn-dark mb-3 mt-3'>Finalizar Test</Link>
                        </div>
                    ) : (
                        <div>
                            <p>Gracias por realizar la evaluación. ¡Ya no hay más preguntas!</p>
                            <Link to="/responses" className='btn btn-success mb-3 mt-3'>Ver Respuestas</Link>
                        </div>
                    )}
                </div>
                <Link to="/" onClick={handleRestartTest} className='btn btn-dark mb-3 mt-3'>Reiniciar Test</Link>
            </div>
        </div>
    );
};

export default QuestionContainer;
