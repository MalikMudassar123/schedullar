'use client';
import { useRef } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';


const HRCalendarComponent = () => {
    const callender=useRef();
   const handleEventReceive = (info) => {
  console.log('Event Dropped:', {
    title: info.event.title,
    id: info.event.id,
    start: info.event.start,
    allDay: info.event.allDay,
  });
};

    return(
        <>
        <FullCalendar
        ref={callender}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        droppable={true}
        editable={true}
        eventReceive={handleEventReceive}
         headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay',
      }}
       height="auto"
        />
        </>
    )
}

export default HRCalendarComponent;