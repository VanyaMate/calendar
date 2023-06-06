import {useCallback, useMemo, useState} from "react";
import {useNearbyDays} from "./use-nearby-days.hook";
import {MS_DAY} from "../../resources/millesoconds.resource";

export const useCalendar = function (notes = {}, options = {}) {
    const { extensionDays, startDay } = options;
    const [currentDay, setCurrentDay] = useState(startDay ?? new Date());
    const dayList = useNearbyDays(currentDay, extensionDays ?? 5);
    const selectNextDay = useCallback(() => {
        setCurrentDay(prev => new Date(+prev + MS_DAY));
    }, [])
    const selectPrevDay = useCallback(() => {
        setCurrentDay(prev => new Date(+prev - MS_DAY));
    }, [])

    return useMemo(() => ({
        currentDay,
        dayList,
        setCurrentDay,
        selectNextDay,
        selectPrevDay,
    }), [dayList])
}