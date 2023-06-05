import {useMemo} from "react";
import {MS_DAY} from "../../resources/millesoconds.resource";

export const useNearbyDays = function (currentDay, extension) {
    return useMemo(() => {
        const days = [];
        days[extension] = currentDay;
        for (let i = 1; i <= extension; i++) {
            days[i - 1] = new Date(+currentDay - (extension - i + 1) * MS_DAY);
            days[i + extension] = new Date(+currentDay + i * MS_DAY)
        }
        return days;
    }, [currentDay, extension])
}