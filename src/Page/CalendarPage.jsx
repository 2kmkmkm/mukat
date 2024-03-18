import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "./calendar.css";
import catfoot from "../Img/catfoot.svg";

function CalendarPage() {
  const [value, onChange] = useState(new Date());
  const dayList = ["2024-03-19"];

  const addContent = ({ date, view }) => {
    const content = [];
    if (dayList.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
      content.push(<img src={catfoot} alt="" />);
      return (
        <>
          <div>{content}</div>
        </>
      );
    }
  };

  return (
    <div>
      <Calendar
        formatDay={(locale, date) => moment(date).format("D")}
        calendarType="gregory"
        next2Label={null}
        prev2Label={null}
        onChange={onChange}
        value={value}
        tileContent={addContent}
      />
    </div>
  );
}

export default CalendarPage;
