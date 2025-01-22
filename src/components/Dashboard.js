import React from 'react';
import AddMeeting from './AddMeeting';
import { BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'
const Dashboard = () => {
  const todayEvents = [
    { name: 'New Year Special Shoot', time: '10 AM', location: 'Bandra' },
    { name: 'Christmas Shoot', time: '10 AM', location: 'Bandra' },
    { name: 'Daily Update Shoot', time: '12 PM', location: 'Bandra' },
  ];

  const tomorrowEvents = [
    { name: 'New Year Special Shoot', time: '10 AM', location: 'Bandra' },
    { name: 'Christmas Shoot', time: '10 AM', location: 'Bandra' },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome, <span className="text-purple-500">&lt;name&gt;</span></h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/4 border-r pr-4">
            <div className="mb-8">
              <h2 className="text-lg font-bold flex items-center mb-2">
                <span role="img" aria-label="calendar" className="mr-2">📅</span>
                Upcoming
              </h2>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600">
              <span role="img" aria-label="schedule" className="mr-2" Link={AddMeeting}>➕</span>
              <Link
                to="/addMeeting"
              >
                Schedule a Meeting
              </Link>
              
            </button>
          </div>

          {/* Main Content */}
          <div className="w-3/4 pl-4">
            <div className="mb-4">
              <h2 className="text-xl font-bold border-b pb-2">Today - 29 November</h2>
              {todayEvents.map((event, index) => (
                <div key={index} className="flex justify-between py-2">
                  <span>{event.name}</span>
                  <span>{event.time}</span>
                  <span>{event.location}</span>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-xl font-bold border-b pb-2">Tomorrow - 30 November</h2>
              {tomorrowEvents.map((event, index) => (
                <div key={index} className="flex justify-between py-2">
                  <span>{event.name}</span>
                  <span>{event.time}</span>
                  <span>{event.location}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
