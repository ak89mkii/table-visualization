import React from 'react';
import '../../App.css';

const Toggle = (props) => {
    return (
        <div>
            <label class="switch">
                <input type="checkbox" onClick={props.toggleMode} />
                <span class="slider round"></span>
            </label>
            <img
                className='iconSize'
                src={props.icon}
            />
        </div>
    )
}

export default Toggle