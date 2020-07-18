import React from 'react';
import '../../crossroad.css';

function Crossroad(props){
    const { color } = props;
    return (

        <div>
        <div class="wrapper">
            <div class={color === 1 ? `circle circleBGColor${color}`: 'circle'} >
            </div>
            <div class={color === 2 ? `circle circleBGColor${color}`: 'circle'} >
            </div>
            <div class={color === 3 ? `circle circleBGColor${color}`: 'circle'} >
            </div>
        	</div>
        </div>

    )
};
export default Crossroad;