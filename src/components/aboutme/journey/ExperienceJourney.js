import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
        </div>
<VerticalTimeline>
<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
    date="March - April 2024"
    iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    icon={<PersonIcon />}
  >
    <h5 className="vertical-timeline-element-title">StartFleet</h5>
    <h6 className="vertical-timeline-element-subtitle mt-2">Data Analyst | Intern</h6>
    <p>• Performed in-depth data analysis and derived actionable insights using Power BI.</p>
    <p>• Designed and delivered interactive dashboards and comprehensive reports to enhance data visualization and interpretation.</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
    date="May 2024 – July 2024"
    iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    icon={<PersonIcon />}
  >
    <h5 className="vertical-timeline-element-title">Intel</h5>
    <h6 className="vertical-timeline-element-subtitle mt-2">Full Stack Developer | Intern</h6>
    <p>• Developed a responsive and dynamic website using the MERN stack (MongoDB, Express.js, React, Node.js).</p>
    <p>• Implemented user authentication and CRUD operations to enhance website functionality.</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
    date="Ongoing"
    iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    icon={<PersonIcon />}
  >
    <h5 className="vertical-timeline-element-title">PunchBiz</h5>
    <h6 className="vertical-timeline-element-subtitle mt-2">Full Stack Data Scientist | Intern</h6>
    <p>• Developed a responsive and real-time intruder detection system using Flask for the backend and React Native for the mobile and web application.</p>
    <p>• Implemented person detection using YOLO and integrated email notifications for intruder alerts, enhancing security monitoring functionality.</p>
  </VerticalTimelineElement>
  
  

  

  <VerticalTimelineElement
    iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
</div>

  );
}

export default ExperienceJourney;
