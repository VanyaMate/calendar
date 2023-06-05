import {useEffect, useState} from "react";

export const useVirtualColumnResize = function () {
    const [resize, setResize] = useState(false);

    useEffect(() => {
        const resizeHandler = () => {
            console.log('resize event');
            setResize(prev => !prev);
        };

        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, [])


    return {
        resize
    }
}