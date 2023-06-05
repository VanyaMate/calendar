import React from 'react';
import {useCalendar} from "../../hooks/calendar/use-calendar.hook";
import DAY from "../../resources/day.resource";
import MONTHS from "../../resources/months.resource";

const Calendar = (props) => {
    const calendar = useCalendar();

    return (
        <div>
            <div onClick={calendar.selectPrevDay}>Prev</div>
            <div onClick={calendar.selectNextDay}>Next</div>
            {
                calendar.dayList.map((day, index) => {
                    return <div key={+day}>{ index } : { DAY[day.getDay()].name[0] }</div>
                })
            }
            {
                calendar.currentDay.getDate() + " - " + MONTHS[calendar.currentDay.getMonth()].name + " : " + calendar.currentDay.getFullYear()
            }
        </div>
    );
};

export default Calendar;