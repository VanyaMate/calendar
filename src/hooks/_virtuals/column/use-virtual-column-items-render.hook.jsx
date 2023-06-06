import {useMemo} from "react";
import VirtualItem from "../../../components/ui/_containers/_virtuals/_parts/virtual-item";

export const useVirtualColumnItemsRender = function (list, ids, itemHeight) {
    const virtualItems = useMemo(() => list.map((item, index) => {
        const position = itemHeight * index;
        return (
            <VirtualItem key={position} height={itemHeight} top={position} children={item}/>
        );
    }), [list]);
    return useMemo(() => {
        const items = [];
        const [minId, maxId] = ids;
        for (let i = minId; i <= maxId; i++) {
            items.push(virtualItems[i]);
        }
        return items;
    }, [...ids, virtualItems]);
}