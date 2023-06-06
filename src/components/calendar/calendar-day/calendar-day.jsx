import React from 'react';
import DAY from "../../../resources/day.resource";
import styled from "styled-components";

const CalendarDayContainer = styled.div
`
  width: 30px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  
  &:hover {
    cursor: pointer;
    background: #eee;
  }
`;

const CalendarDayLetter = styled.div
`
  font-size: 12px;
`;

const CalendarDayDate = styled.div
`
  font-size: 16px;
  border-radius: 50%;
  
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({active}) => {
    if (active) {
        return `
            background: red;
            color: #fff;
        `
    }
  }}
`;

const CalendarDay = (props) => {
    const { hook, date } = props;

    const selectCurrentDay = function () {
        hook.setCurrentDay(date);
    }

    return (
        <CalendarDayContainer onClick={selectCurrentDay}>
            <CalendarDayLetter>{DAY[date.getDay()].name[0]}</CalendarDayLetter>
            <CalendarDayDate active={hook.currentDay === date}>{date.getDate()}</CalendarDayDate>
        </CalendarDayContainer>
    );
};

export default CalendarDay;