import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "./calendar.css";

function CalendarPage() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar
        formatDay={(locale, date) => moment(date).format("D")}
        calendarType="gregory"
        next2Label={null}
        prev2Label={null}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default CalendarPage;
