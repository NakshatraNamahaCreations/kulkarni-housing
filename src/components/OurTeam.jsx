import React from "react";
import "./OurTeam.css";

const teamData = [
  {
    name: "Mayur Kulkarni",
    role: "Principal Architect",
  },
  {
    name: "Roopali Kulkarni",
    role: "Landscape Architect",
  },
  {
    name: "Vidya Joshi",
    role: "Architect",
  },
  {
    name: "Shailesh S K",
    role: "Structural Engineer",
  },
  {
    name: "Deepa Walia",
    role: "Interior Designer",
  },
];

export default function OurTeam() {
  return (
    <section className="our-team-section">
      {/* Decorative background shapes */}
      <div className="square_shape1"></div>
      <div className="square_shape2"></div>
      <div className="square_shape3"></div>
      <div className="square_shape4"></div>

      {/* Background text */}
      <span className="team-bg-text">Meet The Experts</span>

      <div className="container">
        {/* Header */}
        <div className="team-header left-align">
          <div className="heading-row">
            <span className="dot"></span>
            <span className="line"></span>
            <h2 className="title">Our Team</h2>
          </div>
          <p className="subtitle">
            A team of experienced professionals shaping thoughtful spaces.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamData.map((member, index) => (
            <div className="team-card text-only" key={index}>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
