import {useMemo} from "react";

export const useVirtualRowIds = function (scroll, itemWidth, viewWidth, tolerance, resizeEvent) {
    return useMemo(() => {
        const min = Math.ceil(scroll / itemWidth - tolerance);
        const max = Math.floor((scroll + viewWidth) / itemWidth + tolerance);
        return [min, max];
    }, [scroll, viewWidth, resizeEvent, tolerance]);
}