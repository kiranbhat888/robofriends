import React from 'react';

const Scroll = (props) => {
    let style = {overflow:'scroll',border:'3px solid black',height:'800px'}
    return (
        <div style={style}>
            {props.children}
        </div>
    );
}

export default Scroll;