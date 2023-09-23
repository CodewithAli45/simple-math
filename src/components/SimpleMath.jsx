import React, { useEffect, useState } from 'react';
import './Simple.css';


const SimpleMath = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [timer, setTimer] = useState('');
    const [inputAns, setInputAns] = useState('');
    const [answer, setAnser] = useState('');


    useEffect(() => {
        const n1 = Math.floor(Math.random() *100, 1);
        const n2 = Math.floor(Math.random() *100, 1);

        setNum1(n1)
        setNum2(n2)
        
    }, []);

    const handleCheckAnswer = () => {
        const input = parseFloat(inputAns);
        console.log(input);
        if(num1 + num2 === input){
            setAnser('correct')
        }
        else {
            setAnser('wrong')
        }
    }

    const handleNextbutton = () => {
        const n1 = Math.floor(Math.random() *100, 1);
        const n2 = Math.floor(Math.random() *100, 1);
        setNum1(n1)
        setNum2(n2);
        setAnser('')
        setInputAns('')
    }


    return (
        <div className='simple'>
            <div className="randomnums">
                <h1>{num1}</h1>
                <h1>+</h1>
                <h1>{num2}</h1>
            </div>
            <div className="inputans">
                <input 
                    className='inputAnswer' 
                    type="number"
                    value={inputAns}
                    onChange={(e) => setInputAns(e.target.value)}
                />
                <button className='btn' onClick={handleCheckAnswer}>Check</button>
            </div>
            <div className="timer">
                timer - coming soon
            </div>
            <div className="checkans">
                {
                    answer === 'correct' ? (
                        <h1 className='checkans-correct'>{answer}</h1>
                    ):
                    (
                        <h1 className='checkans-wrong'>{answer}</h1>
                    )
                }
                
            </div>
            <div className="btns">
                <button className='btn' onClick={handleNextbutton}>Next</button>
            </div>
        </div>
    );
}

export default SimpleMath;
