import React from 'react';
import { Link } from '@reach/router';

const Word = props => {
    if(isNaN(props.word)){
        return (
            <div>
                <h1>Word: {props.word}</h1>
            </div>
        )
    }    
    else{
        return (
            <div>
                <h1>Number: {props.num}</h1>
            </div>
        );
    }
}

export default Word;