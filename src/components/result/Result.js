import React from 'react';

const Result = ({ score, scoreText }) => {
    return (
            <div className="form-result">
                <div>
                    <h2>Result:</h2>
                    <p className="score">{score}</p>
                    <strong className="percent">{score * 10}</strong>
                    <p className="message">{scoreText}</p>

                </div>
            </div>
    )

}

export default Result;