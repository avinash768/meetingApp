import React, { useEffect, useState } from "react";
import { fetchMeetings, deleteMeeting } from "../api";

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const getMeetings = async () => {
      const { data } = await fetchMeetings();
      setMeetings(data);
    };

    getMeetings();
  }, []);

  const handleDelete = async (id) => {
    await deleteMeeting(id);
    setMeetings(meetings.filter((meeting) => meeting._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-gray-700 mb-4">Your Meetings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meetings.map((meeting) => (
          <div
            key={meeting._id}
            className="bg-white shadow-lg rounded-lg p-4 space-y-4"
          >
            <h3 className="text-xl font-semibold text-gray-700">{meeting.title}</h3>
            <p className="text-gray-600">
              {meeting.date} at {meeting.time}
            </p>
            <p className="text-gray-600">Type: {meeting.type}</p>
            <a
              href={meeting.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Join Meeting
            </a>
            <button
              onClick={() => handleDelete(meeting._id)}
              className="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meetings;
