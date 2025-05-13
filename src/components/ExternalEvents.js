'use client';
import { useEffect } from "react";
import { Draggable } from '@fullcalendar/interaction';

const ExternalEvents=()=>{

    useEffect(()=>{
        let dragaableEl= document.getElementById('external-events');
        new Draggable(dragaableEl , {
            itemSelector: '.fc-event',
            eventData: function(eventEl) {
        return {
          title: eventEl.innerText,
          id: eventEl.getAttribute('data-id'),
        };
      },
            
        })
    })

    return(
        <>

           <div id="external-events" className="p-4 border w-60 bg-gray-50">
      <h4 className="font-bold mb-2">Draggable Events</h4>
      <div className="fc-event cursor-pointer p-2 mb-2 bg-blue-500 text-white rounded" data-id="1">Meeting</div>
      <div className="fc-event cursor-pointer p-2 mb-2 bg-green-500 text-white rounded" data-id="2">Workshop</div>
      <div className="fc-event cursor-pointer p-2 mb-2 bg-purple-500 text-white rounded" data-id="3">Conference</div>
    </div>
        </> 
    )
}
export default ExternalEvents;