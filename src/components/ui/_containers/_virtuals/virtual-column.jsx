import React from 'react';
import VirtualView from "./_parts/virtual-view";
import VirtualContainer from "./_parts/virtual-container";

const VirtualColumn = (props) => {
    const { hook, children, ...other } = props;
    return (
        <VirtualView {...other} onScroll={hook.onScroll} height={hook.viewHeight} ref={hook.ref}>
            <VirtualContainer height={hook.itemHeight * hook.list.length}>
                { hook.items }
            </VirtualContainer>
        </VirtualView>
    );
};

export default VirtualColumn;