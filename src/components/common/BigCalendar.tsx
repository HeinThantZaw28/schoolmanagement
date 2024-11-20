"use client";
import { useState } from "react";

import moment from "moment";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";

import { calendarEvents } from "@/constants/constantData";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selecetedView: View) => {
    setView(selecetedView);
  };
  return (
    <div className="w-full h-full">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={view}
        style={{ height: "98%" }}
        onView={handleOnChangeView}
        min={new Date(2024, 6, 0, 8, 0, 0)}
        max={new Date(2024, 11, 0, 17, 0, 0)}
      />
    </div>
  );
};

export default BigCalendar;
