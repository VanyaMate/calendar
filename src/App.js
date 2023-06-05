import React, {useMemo} from 'react';
import {useVirtualColumn} from "./hooks/_virtuals/column/use-virtual-column.hook";
import VirtualColumn from "./components/ui/_containers/_virtuals/virtual-column";

const App = () => {
    const cols = useMemo(() => [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ].map((num) => <h2>[{ num }]</h2>), []);
    const virtual = useVirtualColumn(cols, 30, null, 1);

    return (
        <VirtualColumn hook={virtual}/>
    );
};

export default App;
