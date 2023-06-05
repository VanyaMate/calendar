import React from 'react';

const styles = {
    position: 'relative',
    overflow: 'auto',
    height: '100%'
}

const VirtualRow = (props) => {
    const { hook, children, ...other } = props;
    return (
        <div {...other} onScroll={hook.onScroll} style={{...styles, width: hook.viewWidth ?? '100%'}} ref={hook.ref}>
            <div style={{width: hook.itemWidth * hook.list.length}}>
                { hook.items }
            </div>
        </div>
    );
};

export default VirtualRow;