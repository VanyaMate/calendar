import React, {useMemo} from 'react';
import {useCalendar} from "../../hooks/calendar/use-calendar.hook";
import MONTHS from "../../resources/months.resource";
import CalendarDay from "./calendar-day/calendar-day";
import CalendarScrollDays from "./calendar-scroll-days/calendar-scroll-days";
import {useVirtualRow} from "../../hooks/_virtuals/row/use-virtual-row.hook";
import VirtualRow from "../ui/_containers/_virtuals/virtual-row";

const Calendar = (props) => {
    const calendar = useCalendar({}, {
        extensionDays: 10
    });

    const days = useMemo(() => calendar.dayList.map((day) => {
        return <CalendarDay key={+day} date={day} hook={calendar}/>
    }), [calendar.dayList]);

    const virtualDays = useVirtualRow(days, 30, 300);

    return (
        <div>
            <div onClick={calendar.selectPrevDay}>Prev</div>
            <div onClick={calendar.selectNextDay}>Next</div>
            <CalendarScrollDays offset={10}>
                <VirtualRow hook={virtualDays}/>
            </CalendarScrollDays>
            {
                calendar.currentDay.getDate() + " - " + MONTHS[calendar.currentDay.getMonth()].name + " : " + calendar.currentDay.getFullYear()
            }
        </div>
    );
};

export default Calendar;