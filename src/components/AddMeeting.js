import React, { useState } from 'react';

const AddMeeting = () => {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    date: '',
    time: '',
    link: '',
    members: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Meeting Data:', formData);
    alert('Meeting Scheduled Successfully!');
    // Reset form
    setFormData({
      title: '',
      type: '',
      date: '',
      time: '',
      link: '',
      members: '',
    });
  };

  const handleCancel = () => {
    alert('Meeting Scheduling Cancelled.');
    // Optionally redirect or clear form
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md border border-purple-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Schedule New Meeting
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md text-gray-600 focus:outline-none focus:ring focus:ring-purple-300"
              required
            />
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md text-gray-600 focus:outline-none focus:ring focus:ring-purple-300"
              required
            >
              <option value="" disabled>
                Type
              </option>
              <option value="Stand Up">Stand Up</option>
              <option value="Review">Review</option>
              <option value="Planning">Planning</option>
            </select>
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
              placeholder="Link"
              value={formData.link}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md text-gray-600 focus:outline-none focus:ring focus:ring-purple-300"
            />
            <input
              type="text"
              name="members"
              placeholder="Members"
              value={formData.members}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md text-gray-600 focus:outline-none focus:ring focus:ring-purple-300"
            />
          </div>
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 focus:ring focus:ring-purple-300"
            >
              Schedule
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="text-gray-600 hover:underline focus:ring focus:ring-purple-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMeeting;
