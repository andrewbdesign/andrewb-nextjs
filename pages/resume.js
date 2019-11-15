import React from 'react';

const Resume = () => (
  <div className="resume">
    <div className="left-section">
      <h1>Andrew B</h1>
    </div>
    <div className="main">
      <div className="career">hello</div>
      <div className="about">What is going on</div>
    </div>
    <style jsx>{`
      * {
        padding: 0;
        margin: 0;
      }
      .resume {
        background: green;
      }
      h1 {
        font-size: 30px;
      }
    `}</style>
  </div>
);

export default Resume;
