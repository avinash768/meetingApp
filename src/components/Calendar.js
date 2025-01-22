import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { fetchMeetings } from "../api";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getMeetings = async () => {
      const { data } = await fetchMeetings();
      const eventList = data.map((meeting) => ({
        title: meeting.title,
        start: `${meeting.date}T${meeting.time}`,
      }));
      setEvents(eventList);
    };

    getMeetings();
  }, []);

  return <FullCalendar plugins={[timeGridPlugin, listPlugin]} events={events} />;
};

export default Calendar;
