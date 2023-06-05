import {useMemo} from "react";
import VirtualItem from "../../../components/ui/_containers/_virtuals/virtual-item";

export const useVirtualRowItemsRender = function (list, ids, itemWidth) {
    const virtualItems = useMemo(() => list.map((item, index) => {
        const position = itemWidth * index;
        return (
            <VirtualItem key={position} width={itemWidth} left={position} children={item}/>
        );
    }), [list]);
    return useMemo(() => {
        const items = [];
        const [minId, maxId] = ids;
        for (let i = minId; i <= maxId; i++) {
            items.push(virtualItems[i]);
        }
        return items;
    }, ids);
}