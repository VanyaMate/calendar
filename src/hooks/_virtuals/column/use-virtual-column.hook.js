import {useVirtualColumnIds} from "./use-virtual-column-ids.hook";
import {useVirtualColumnScrollState} from "./use-virtual-column-scroll-state.hook";
import {useVirtualColumnItemsRender} from "./use-virtual-column-items-render.hook";
import {useEffect, useRef, useState} from "react";
import {useVirtualColumnResize} from "./use-virtual-column-resize.hook";

export const useVirtualColumn = function (list,  itemHeight, viewHeight, tolerance = 2) {
    const ref = useRef(null);
    const [height, setHeight] = useState(viewHeight);
    const { scroll, setScroll, onScroll } = useVirtualColumnScrollState();
    const { resize } = useVirtualColumnResize();
    const ids = useVirtualColumnIds(scroll, itemHeight, height, tolerance, resize);
    const items = useVirtualColumnItemsRender(list, ids, itemHeight);

    useEffect(() => {
        if (!viewHeight) {
            setHeight(ref.current.clientHeight);
        }
    }, [ref, resize])

    return {
        scroll,
        setScroll,
        onScroll,
        resize,
        ids,
        items,
        list,
        itemHeight,
        viewHeight,
        ref,
    }
}