import {useCallback, useState} from "react";

export const useVirtualColumnScrollState = function () {
    const [scroll, setScroll] = useState(0);
    const onScroll = useCallback(({ target }) => {
        setScroll(target.scrollTop);
    }, [])
    return {
        scroll,
        setScroll,
        onScroll,
    }
}