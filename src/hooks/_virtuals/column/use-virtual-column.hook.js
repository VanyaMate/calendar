import {useVirtualColumnIds} from "./use-virtual-column-ids.hook";
import {useVirtualColumnScrollState} from "./use-virtual-column-scroll-state.hook";
import {useVirtualColumnItemsRender} from "./use-virtual-column-items-render.hook";
import {useEffect, useRef, useState} from "react";

export const useVirtualColumn = function (list,  itemHeight, viewHeight, tolerance = 2) {
    const ref = useRef(null);
    const [height, setHeight] = useState(viewHeight);
    const { scroll, setScroll, onScroll } = useVirtualColumnScrollState();
    const ids = useVirtualColumnIds(scroll, itemHeight, height, tolerance);
    const items = useVirtualColumnItemsRender(list, ids, itemHeight);

    useEffect(() => {
        setHeight(ref.current.clientHeight);
    }, [ref])

    return {
        scroll,
        setScroll,
        onScroll,
        ids,
        items,
        list,
        itemHeight,
        viewHeight,
        ref,
    }
}