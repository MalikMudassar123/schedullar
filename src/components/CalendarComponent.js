'use client';

import { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

const HRCalendarComponent = () => {
  const calendarRef = useRef();

  const handleEventReceive = (info) => {
    console.log("Event Dropped:", {
      title: info.event.title,
      id: info.event.id,
      start: info.event.start,
      allDay: info.event.allDay,
    });
  };

  return (
    <div className="flex-1 bg-white p-4 rounded-lg shadow">
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        droppable={true}
        editable={true}
        eventReceive={handleEventReceive}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
        height="auto"
      />
    </div>
  );
};

export default HRCalendarComponent;
