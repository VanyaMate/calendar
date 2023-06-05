import React from 'react';
import VirtualView from "./_parts/virtual-view";
import VirtualContainer from "./_parts/virtual-container";

const VirtualRow = (props) => {
    const { hook, children, ...other } = props;
    return (
        <VirtualView {...other} onScroll={hook.onScroll} width={hook.viewWidth} ref={hook.ref}>
            <VirtualContainer width={hook.itemWidth * hook.list.length}>
                { hook.items }
            </VirtualContainer>
        </VirtualView>
    );
};

export default VirtualRow;