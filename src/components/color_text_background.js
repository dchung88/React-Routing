import React from 'react';
import { Link } from '@reach/router';

const ColorTextBackground = props => {
    return (
        <div style= {{color:props.color, backgroundColor:props.background}}><h1>Word: {props.text}</h1></div>
    )
}

export default ColorTextBackground;