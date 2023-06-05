import {useMemo} from "react";
import VirtualItem from "../../../components/ui/_containers/_virtuals/virtual-item";

export const useVirtualColumnItemsRender = function (list, ids, itemHeight) {
    return useMemo(() => {
        const items = [];
        for (let i = ids[0]; i <= ids[1]; i++) {
            const position = itemHeight * i;
            items.push(
                <VirtualItem key={position} height={itemHeight} top={position}>
                    { list[i] }
                </VirtualItem>
            );
        }
        return items;
    }, ids);
}