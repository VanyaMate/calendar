import React from 'react';

const styles = {
    position: 'absolute',
    overflow: 'hidden',
}

const VirtualItem = (props) => {
    const { top, left, height, width, ...other } = props;
    return (
        <div {...other} style={{...styles, top, left, height, width}}/>
    );
};

export default VirtualItem;