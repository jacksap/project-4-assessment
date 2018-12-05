import React from 'react';
import './CircleSelector.css'

const CircleSelector = (props) => (
        <div className='CircleSelector'>
                <button className={`${props.circle1selected ? 'selected' : null}`} onClick={props.handleClickCircle1}>{`${props.circle1selected ? 'CIRCLE 1 SELECTED': 'SELECT CIRCLE 1'}`}</button>
                <button className={`${props.circle2selected ? 'selected' : null}`} onClick={props.handleClickCircle2}>{`${props.circle2selected ? 'CIRCLE 2 SELECTED': 'SELECT CIRCLE 2'}`}</button>
                <button className={`${props.circle3selected ? 'selected' : null}`} onClick={props.handleClickCircle3}>{`${props.circle3selected ? 'CIRCLE 3 SELECTED': 'SELECT CIRCLE 3'}`}</button>
                <button className={`${props.circle4selected ? 'selected' : null}`} onClick={props.handleClickCircle4}>{`${props.circle4selected ? 'CIRCLE 4 SELECTED': 'SELECT CIRCLE 4'}`}</button>
        </div>
);

export default CircleSelector;