import React, { useState } from "react";
import "./timeline.css";
import { FaMapMarkerAlt } from 'react-icons/fa';
const data = [
  {
    title: "Event 1",
    date: "January 1, 2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Event 2",
    date: "February 15, 2022",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Event 3",
    date: "April 10, 2022",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Event 4",
    date: "April 10, 2022",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState(null);

  const handleEventClick = (event) => {
    if (activeEvent === event) {
      setActiveEvent(null);
    } else {
      setActiveEvent(event);
    }
  };
  return (
    <>
      <div className="timeline">
        {data.map((event) => (
          <div
            key={event.title}
            className={`event ${activeEvent === event ? "active" : ""}`}
            onClick={() => handleEventClick(event)}
          >
             <FaMapMarkerAlt className="location-icon" />
            <div className="event-date">{event.date}</div>
            <div className="event-title">{event.title}</div>
            {activeEvent === event && (
              <div className="event-description">{event.description}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;
