import ExternalEvents from "@/components/ExternalEvents";
import HRCalendarComponent from "@/components/CalendarComponent";
export default function Home() {
  return (
   <>
   <div className="flex p-6 space-x-6">
      <ExternalEvents />
      <HRCalendarComponent />
    </div>
   </>
  );
}
