import React from 'react'

const AnswerInputs = ({answers}) => (
    answers.map( (answer,idx) => { 
        return (
            <div>
                 <label>Text</label>
                 <textarea data-id={idx} value={answer.text} name="answer-text"/>
        
                 <label>Correct</label>
                 <input data-id={idx} type="checkbox" name="answer-correct"/>

            </div>
           
        )
    })
)

export default AnswerInputs