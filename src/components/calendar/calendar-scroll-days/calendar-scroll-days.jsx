import styled from "styled-components";

const CalendarScrollDays = styled.div
`
  display: flex;
  width: 100%;
  height: 60px;
  & > * { margin-right: ${({ offset }) => offset }px };
  &:last-child {
    margin-right: 0;
  }
`;

export default CalendarScrollDays;