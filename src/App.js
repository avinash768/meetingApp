import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Calendar from "./components/Calendar";
import Meetings from "./components/Meetings";
import AddMeeting from "./components/AddMeeting";
import ViewMeeting from "./components/ViewMeeting";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Navigation Bar (Optional) */}
        <nav className="bg-white shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Meeting App</h1>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-600 hover:text-purple-600">
                Dashboard
              </a>
              <a href="/calendar" className="text-gray-600 hover:text-purple-600">
                Calendar
              </a>
              <a href="/add-meeting" className="text-gray-600 hover:text-purple-600">
                Add Meeting
              </a>
            </div>
          </div>
        </nav>

        {/* Routing for Pages */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/add-meeting" element={<Meetings />} />
          <Route path="/view-meeting/:id" element={<ViewMeeting />} />
          <Route path="/Add-meeting/:id" element={<AddMeeting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
