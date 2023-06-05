import React, {useMemo} from 'react';
import {useVirtualColumn} from "./hooks/_virtuals/column/use-virtual-column.hook";
import VirtualColumn from "./components/ui/_containers/_virtuals/virtual-column";
import Timer from "./components/timer";
import {useVirtualRow} from "./hooks/_virtuals/row/use-virtual-row.hook";
import VirtualRow from "./components/ui/_containers/_virtuals/virtual-row";

const App = () => {
    const cols = useMemo(() => [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ].map((num, index) => <Timer key={index} start={num}/>), []);
    const virtualColumn = useVirtualColumn(cols, 30, null, 2);
    const virtualRow = useVirtualRow(cols, 50, null, 2);

    return (
        <>
            <VirtualRow hook={virtualRow}/>
            <VirtualColumn hook={virtualColumn}/>
        </>
    );
};

export default App;
