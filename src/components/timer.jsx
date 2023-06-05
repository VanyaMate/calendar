import React, {useEffect, useState} from 'react';

const Timer = (props) => {
    const [time, setTime] = useState(props.start);

    useEffect(() => {
        const timer = setInterval(() => setTime(prev => prev + 1), 1000);
        return () => clearInterval(timer);
    }, [])

    return (
        <div>
            { time }
        </div>
    );
};

export default React.memo(Timer);