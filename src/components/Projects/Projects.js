import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bahcode from "../../Assets/Projects/bahcode.png";
import ve from "../../Assets/Projects/ve.png";
import millao from "../../Assets/Projects/millao.png";
import blackbooking from "../../Assets/Projects/blackbooking.png";
import bbk from "../../Assets/Projects/bbk.png";
import fahm from "../../Assets/Projects/fahm.png";
import gw from "../../Assets/Projects/gw.png";
import waqar from "../../Assets/Projects/waqar.png";
import worktually from "../../Assets/Projects/worktually.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blackbooking}
              isBlog={false}
              title="Blackbooking"
              description="Online appointment system for saloon build with MERN Stack and Ant design which allows user to book online appointment in their desired saloon. It is also include multiple type of payment options."
              demoLink="https://blackbooking.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worktually}
              isBlog={false}
              title="Woktually"
              description="An online platform for online work like freelance marketplace where employers hire employees for different areas of work which is build with React js and Material UI. It also includes payment method."
              demoLink="https://app.worktually.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bbk}
              isBlog={false}
              title="Bundu Khan"
              description="Serving as an advanced online platform, this system empowers customers to conveniently place their orders, indulge in the delightful menu offerings, and experience a seamless dining experience from the comfort of their homes."
              demoLink="https://order.bkkhandallas.com//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gw}
              isBlog={false}
              title="Globewyze Website"
              description="Globewyze Website developed using React Js to show the portfolio and details of the company Globewyze. Globewyze is AI centric full-service start-up incubator on a mission to launch ventures in the shortest time & least capital."
              demoLink="https://globewyze.com/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={millao}
              isBlog={false}
              title="Millao"
              description="A Marketplace for Appointment-Based Professionals. Millao is a marketing and online scheduling platform for relationship management and complementary communication that enables customers and providers to jointly administer bookings and subsequent services.              "
              demoLink="https://book.millao.com/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fahm}
              isBlog={false}
              title="Fahm Quran"
              description="Fahm Quran is a webapp developer using React Js. Fahm Qur’an provides Muslims a simple way of searching, learning and comprehending most frequently used Qur’anic words. Each word in the Qur’an holds multiple layers of wisdom. Fahm, developed by WyzerLink; enable readers to transfer this wisdom into their daily lives and helps users become familiar with frequently used words in the Qur’an."
              demoLink="https://fahmquran.wyzerlink.com/Home"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bahcode}
              isBlog={false}
              title="Bahcode"
              description="The all-in-one solution for managing your business. Bahcode app and website make it easy to upload products, manage inventory, create coupons, and access analytics. Plus, customers can order products, qualify for coupons, and close transactions with our customer app."
              demoLink="http://bahcodeapp.com/home"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ve}
              isBlog={false}
              title="VE Consultants"
              description="AVEC  is a consortium of Professional Consulting Engineers specialized in Value Engineering and Multidiscipline Engineering Services. AVEC has SAVE Int’l Registered & Certified Value Engineering Consultants providing pioneer Value Engineering and Value Management Services in Pakistan and Abroad."
              demoLink="https://veconsultantspk.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={waqar}
              isBlog={false}
              title="Waqar Associates"
              description="Waqar Associates stands out for its commitment to quality, innovation, and timely project completion. Organization leverage the latest construction techniques, advanced technology, and high-quality materials to ensure that our projects are built to the highest standards."
              demoLink="https://waqarassociates.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
