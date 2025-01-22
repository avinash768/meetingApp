import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const fetchMeetings = () => API.get("/meetings");
export const createMeeting = (meeting) => API.post("/meetings", meeting);
export const deleteMeeting = (id) => API.delete(`/meetings/${id}`);
