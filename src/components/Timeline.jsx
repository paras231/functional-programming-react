import React, { useState } from "react";
import "./timeline.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const data = [
  {
    title: "Day 1",
    date: "Port Blair (2N)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Day 2",
    date: "Port Blair",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Day 3",
    date: "Neil Island",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, ",
  },
  {
    title: "Day 4",
    date: "Havelock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, ",
  },
];

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const handleEventClick = (event) => {
    if (activeEvent === event) {
      setActiveEvent(null);
    } else {
      setActiveEvent(event);
    }
  };
  const handleExpandAllClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <button onClick={handleExpandAllClick}>Expand All</button>
      <div className="timeline">
        {data.map((event) => (
          <>
            <motion.div
              whileHover={{
                transition: { duration: 1 },
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
              whileTap={{
                scale: 1.02,
              }}
            >
              <div
                key={event.title}
                className={`event ${activeEvent === event ? "active" : ""} ${
                  isExpanded ? "expanded" : ""
                }`}
                onClick={() => handleEventClick(event)}
              >
                <FaMapMarkerAlt className="location-icon" />
                <div className="event-date">{event.date}</div>
                <div className="event-title">{event.title}</div>
                {activeEvent === event && (
                  <div className="event-description">{event.description}</div>
                )}
              </div>
            </motion.div>
          </>
        ))}
      </div>
    </>
  );
};

export default Timeline;
