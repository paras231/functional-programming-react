import React, { useState, useEffect } from "react";
import "./timeline.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import useSWR from "swr";
import axios from "axios";


const Timeline = () => {
  const [datas,setDatas] = useState();
  const id = "640ea88ea7cfc9a13b64854b";
  const baseURL = "https://seeandamans-zf44.onrender.com";
  const fetchData = async () => {
    const { data } = await axios.get(`${baseURL}/api/user/package/${id}`);
    console.log(data);
    setDatas(data);
  };

  useEffect(() => {
    fetchData();
  },[]); 

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
      {/* <button onClick={handleExpandAllClick}>Expand All</button> */}
      <div className="timeline">
        {datas?.mypackage?.days?.map((event, index) => (
       
            <motion.div
            key={index}
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
                key={index}
                className={`event ${activeEvent === event ? "active" : ""}`}
                onClick={() => handleEventClick(event)}
              >
                <FaMapMarkerAlt className="location-icon" />
                <div className="event-date">{event.day}</div>
                <div className="event-title">{event.location}</div>
                {activeEvent === event && (
                  <div className="event-description">{event.activity}</div>
                )}
              </div>
            </motion.div>
         
        ))}
      </div>
    </>
  );
};

export default Timeline;
