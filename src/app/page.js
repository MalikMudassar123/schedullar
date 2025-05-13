'use client';
import ExternalEvents from "@/components/ExternalEvents";
import HRCalendarComponent from "@/components/CalendarComponent";

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <div className="flex flex-col lg:flex-row gap-6">
        <ExternalEvents />
        <HRCalendarComponent />
      </div>
    </main>
  );
}
