import {useCallback, useState} from "react";

export const useVirtualRowScrollState = function () {
    const [scroll, setScroll] = useState(0);
    const onScroll = useCallback(({ target }) => {
        setScroll(target.scrollLeft);
    }, [])
    return {
        scroll,
        setScroll,
        onScroll,
    }
}