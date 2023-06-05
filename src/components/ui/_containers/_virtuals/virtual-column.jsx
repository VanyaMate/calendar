import React from 'react';

const styles = {
    position: 'relative',
    overflow: 'auto'
}

const VirtualColumn = (props) => {
    const { hook, children, ...other } = props;
    return (
        <div {...other} onScroll={hook.onScroll} style={{...styles, height: hook.viewHeight ?? '100%'}} ref={hook.ref}>
            <div style={{height: hook.itemHeight * hook.list.length}}>
                { hook.items }
            </div>
        </div>
    );
};

export default VirtualColumn;