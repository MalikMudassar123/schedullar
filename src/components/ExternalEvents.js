'use client';

import { useEffect } from "react";
import { Draggable } from "@fullcalendar/interaction";

const ExternalEvents = () => {
  useEffect(() => {
    const draggableEl = document.getElementById("external-events");
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: (eventEl) => ({
          title: eventEl.innerText,
          id: eventEl.getAttribute("data-id"),
        }),
      });
    }
  }, []);

  return (
    <div id="external-events" className="w-full lg:w-64 p-4 bg-white border rounded-lg shadow">
      <h4 className="font-semibold text-lg mb-4">Draggable Events</h4>
      <div
        className="fc-event cursor-pointer p-2 mb-2 bg-blue-500 text-white rounded text-center"
        data-id="1"
      >
        Meeting
      </div>
      <div
        className="fc-event cursor-pointer p-2 mb-2 bg-green-500 text-white rounded text-center"
        data-id="2"
      >
     Workshop
      </div>
      <div
        className="fc-event cursor-pointer p-2 mb-2 bg-purple-500 text-white rounded text-center"
        data-id="3"
      >
         Conference
      </div>
    </div>
  );
};

export default ExternalEvents;
