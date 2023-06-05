import {useEffect, useState} from "react";

export const useVirtualRowResize = function () {
    const [resize, setResize] = useState(false);

    useEffect(() => {
        const resizeHandler = () => {
            setResize(prev => !prev);
        };

        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, [])


    return {
        resize
    }
}