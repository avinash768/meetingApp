import React, { useState, useEffect } from 'react';

const ViewMeetings = () => {
  const [meetings, setMeetings] = useState([
    {
      id: 1,
      title: 'Stand Up',
      type: 'Recurring',
      date: '2025-02-07',
      time: '10:30 AM',
      link: 'https://example.com',
      members: 'Team A, Team B',
    },
    {
      id: 2,
      title: 'Travel Brief',
      type: 'One-Time',
      date: '2025-02-08',
      time: '9:00 AM',
      link: 'https://example.com',
      members: 'John, Mary, Steve',
    },
  ]);

  const [editMeeting, setEditMeeting] = useState(null);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this meeting?');
    if (confirmDelete) {
      setMeetings(meetings.filter((meeting) => meeting.id !== id));
      alert('Meeting deleted successfully!');
    }
  };

  const handleEdit = (meeting) => {
    setEditMeeting(meeting);
  };

  const handleSaveEdit = (updatedMeeting) => {
    setMeetings(meetings.map((m) => (m.id === updatedMeeting.id ? updatedMeeting : m)));
    setEditMeeting(null);
    alert('Meeting updated successfully!');
  };

  const handleCancelEdit = () => {
    setEditMeeting(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">View Meetings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className="bg-white shadow-md rounded-lg p-4 border border-purple-200"
          >
            {editMeeting && editMeeting.id === meeting.id ? (
              <EditMeetingForm
                meeting={editMeeting}
                onSave={handleSaveEdit}
                onCancel={handleCancelEdit}
              />
            ) : (
              <>
                <h2 className="text-xl font-semibold text-gray-800">{meeting.title}</h2>
                <p>
                  <strong>Type:</strong> {meeting.type}
                </p>
                <p>
                  <strong>Date:</strong> {meeting.date}
                </p>
                <p>
                  <strong>Time:</strong> {meeting.time}
                </p>
                <p>
                  <strong>Link:</strong>{' '}
                  <a href={meeting.link} className="text-purple-600 underline" target="_blank" rel="noreferrer">
                    {meeting.link}
                  </a>
                </p>
                <p>
                  <strong>Members:</strong> {meeting.members}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => handleEdit(meeting)}
                    className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(meeting.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const EditMeetingForm = ({ meeting, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ ...meeting });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md text-gray-600 focus:outline-none focus:ring focus:ring-purple-300"
        required
      />
      <input
        type="text"
        name="type"
        value={formData.type}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md text-gray-600 focus:outline-none focus:ring focus:ring-purple-300"
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md text-gray-600 focus:outline-none focus:ring focus:ring-purple-300"
        required
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md text-gray-600 focus:outline-none focus:ring focus:ring-purple-300"
        required
      />
      <input
        type="url"
        name="link"
        value={formData.link}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md text-gray-600 focus:outline-none focus:ring focus:ring-purple-300"
      />
      <input
        type="text"
        name="members"
        value={formData.members}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md text-gray-600 focus:outline-none focus:ring focus:ring-purple-300"
      />
      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="text-gray-600 hover:underline focus:ring focus:ring-purple-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ViewMeetings;
