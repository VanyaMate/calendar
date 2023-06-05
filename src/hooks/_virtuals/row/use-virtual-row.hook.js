import {useVirtualRowIds} from "./use-virtual-row-ids.hook";
import {useVirtualRowScrollState} from "./use-virtual-row-scroll-state.hook";
import {useVirtualRowItemsRender} from "./use-virtual-row-items-render.hook";
import {useEffect, useRef, useState} from "react";
import {useVirtualRowResize} from "./use-virtual-row-resize.hook";

export const useVirtualRow = function (list,  itemWidth, viewWidth, tolerance = 2) {
    const ref = useRef(null);
    const [width, setWidth] = useState(viewWidth);
    const { scroll, setScroll, onScroll } = useVirtualRowScrollState();
    const { resize } = useVirtualRowResize();
    const ids = useVirtualRowIds(scroll, itemWidth, width, tolerance, resize);
    const items = useVirtualRowItemsRender(list, ids, itemWidth);

    useEffect(() => {
        if (!viewWidth) {
            setWidth(ref.current.clientWidth);
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
        itemWidth,
        viewWidth,
        ref,
    }
}