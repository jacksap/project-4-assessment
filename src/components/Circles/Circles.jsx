import React from 'react';
import './Circles.css'

const Circles = (props) => {
    return (
        <div className='Circles'>
            <div className={`${props.circle1selected ? 'selected' : null}`}>1</div>
            <div className={`${props.circle2selected ? 'selected' : null}`}>2</div>
            <div className={`${props.circle3selected ? 'selected' : null}`}>3</div>
            <div className={`${props.circle4selected ? 'selected' : null}`}>4</div>
        </div>
    );
}

export default Circles;