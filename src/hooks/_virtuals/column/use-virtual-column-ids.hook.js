import {useMemo} from "react";

export const useVirtualColumnIds = function (scroll, itemHeight, viewHeight, tolerance, resizeEvent) {
    return useMemo(() => {
        const min = Math.ceil(scroll / itemHeight - tolerance);
        const max = Math.floor((scroll + viewHeight) / itemHeight + tolerance);
        return [min, max];
    }, [scroll, viewHeight, resizeEvent, tolerance]);
}