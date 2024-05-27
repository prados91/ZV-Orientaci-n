import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Responses.css'
const Responses = () => {
    const [responses, setResponses] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        const savedAnswers = JSON.parse(localStorage.getItem('answers')) || [];
        setResponses(savedAnswers);
    }, []);

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem('user')) || [];
        setUser(savedUser);
    }, []);

    return (
        <div className='response-container'>
            <div className="container mt-5 ">
                <h2 className="mb-4">Respuestas del Test: {user.name} {user.lastname} (Edad: {user.age}) </h2>
                {responses.length > 0 ? (
                    <div className="list-group">
                        {responses.map((response, index) => (
                            <div className="list-group-item mb-1" key={index}>
                                <h5 className="mb-1">Pregunta {response.questionId}: {response.question}</h5>
                                <p className="mb-1 text-p-color">{response.answer}</p>
                            </div>
                        ))}
                        <Link to="/pdf" className='button_link mt-3'>Descargar PDF</Link>
                        <Link to="/" className='button_link mt-3'>Volver al inicio</Link>
                    </div>
                ) : (
                    <p>No hay respuestas guardadas.</p>
                )}
            </div>
        </div>
    );
};

export default Responses;