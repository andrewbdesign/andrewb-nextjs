import React from 'react';
import Head from 'next/head';

const Resume = () => (
  <div className="resume">
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:500,700|Roboto&display=swap"
        rel="stylesheet"
      />
      <link href="/static/styles.css" rel="stylesheet" />
    </Head>
    <aside className="aside">
      <section>
        <div className="profile-details">
          <img
            className="profile-pic"
            src="/static/images/profile.jpeg"
            alt="andrew profile"
          />
          <h1 className="profile-name">Andrew Bonifacio</h1>
          <p className="profile-title">Fontend Developer</p>
        </div>
        <div className="contact-details">
          <h2 className="contact-title">Contact info</h2>
          <p>
            <a href="mailto:contact@andrewbdesign.com">
              <img className="icons icon-email" src="/static/icons/email.svg" />
              contact@andrewbdesign.com
            </a>
          </p>
          {/*<p>
            <a href="tel:+61450250792">
              <img className="icons icon-phone" src="/static/icons/phone.svg" />
              0450 250 792
            </a>
          </p> */}
          <p>
            <img
              className="icons icon-location"
              src="/static/icons/location.svg"
            />
            Sydney, AU
          </p>
        </div>
        <div className="social-details">
          <h2 className="social-title">Social links</h2>
          <p>
            <a
              href="https://www.github.com/andrewbdesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons icon-github"
                src="/static/icons/github.svg"
              />
              Github
            </a>
          </p>
          <p>
            <a
              href="https://www.twitter.com/andrewbdesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons icon-twitter"
                src="/static/icons/twitter.svg"
              />
              Twitter
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/andrewbonifacio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons icon-linkedin"
                src="/static/icons/linkedin.svg"
              />
              LinkedIn
            </a>
          </p>
          <p>
            <a
              href="https://codepen.io/androobay/pens/popular"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons icon-codepen"
                src="/static/icons/codepen.svg"
              />
              Codepen
            </a>
          </p>
          <p>
            <a
              href="https://www.andrewbdesign.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons icon-website"
                src="/static/icons/website.svg"
              />
              Website
            </a>
          </p>
        </div>
        <div className="resume-details">
          <h2 className="social-title">Resume</h2>
          <a
            className="download-btn"
            href="/static/pdf/andrew-bonifacio-2019.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download resume
          </a>
        </div>
      </section>
    </aside>
    <main className="main">
      {/* <section className="summary"></section> */}
      <section className="projects">
        <h2 className="title-section">Projects</h2>
        <div className="project">
          <div className="title-group">
            <h3 className="title">Project Reset</h3>
          </div>
          <div className="project-summary">
            <table>
              <tbody>
                <tr>
                  <td>Client</td>
                  <td>Qantas</td>
                </tr>
                <tr>
                  <td>Scope</td>
                  <td>
                    Qantas Frequent Flyer program was going to make major
                    changes to their loyalty program. To build a landing page to
                    showcase these changes. Expected daily traffic was 12
                    million users.
                  </td>
                </tr>
                <tr>
                  <td>Role</td>
                  <td>
                    Built the front end. Browser supporting up to IE10. Created
                    interactive components that communicated with Qantas backend
                    API.
                  </td>
                </tr>
                <tr>
                  <td>Tech</td>
                  <td>CSS/SCSS, JavaScript/ES6, React, GreenSock, Lottie</td>
                </tr>
                <tr>
                  <td>URL</td>
                  <td>
                    <a href="https://frequentflyer.qantas.com">
                      https://frequentflyer.qantas.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="project">
          <div className="title-group">
            <h3 className="title">Qantas Car Insurance</h3>
          </div>
          <div className="project-summary">
            <table>
              <tbody>
                <tr>
                  <td>Client</td>
                  <td>Qantas</td>
                </tr>
                <tr>
                  <td>Scope</td>
                  <td>
                    Qantas was going to introduce Car insurance for the first
                    time. Was assigned to build 8 responsive landing pages.
                    Worked with the Qantas design lead and development team in
                    normal HTML, CSS, and JavaScript.
                  </td>
                </tr>
                <tr>
                  <td>Role</td>
                  <td>
                    Built the frontend in vanilla HTML, CSS, JavaScript. Had to
                    build up to 14 modules according to the design.
                  </td>
                </tr>
                <tr>
                  <td>Tech</td>
                  <td>HTML, CSS/SCSS, JavaScript/ES6, jQuery</td>
                </tr>
                <tr>
                  <td>URL</td>
                  <td>
                    <a href="https://insurance.qantas.com/car-insurance">
                      https://insurance.qantas.com/car-insurance
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="project">
          <div className="title-group">
            <h3 className="title">Seek Salary Report</h3>
          </div>
          <div className="project-summary">
            <table>
              <tbody>
                <tr>
                  <td>Client</td>
                  <td>Seek</td>
                </tr>
                <tr>
                  <td>Scope</td>
                  <td>
                    Seek wanted an interactive salary report for each
                    industry/role and compare it to the country nation salary
                    average. There were 2 versions of the site: the Australian
                    and New Zealand variation. Data was hosted on a cms backend
                    (contentful).
                  </td>
                </tr>
                <tr>
                  <td>Role</td>
                  <td>
                    Built the front end. Used React for main framework. Website
                    communicated with API via backed cms contentful. Had to
                    build for 4 versions: AU candidate, AU hirer, NZ candidate,
                    NZ hirer.
                  </td>
                </tr>
                <tr>
                  <td>Tech</td>
                  <td>
                    CSS/SCSS, JavaScript/ES6, React, GreenSock, ChartJS,
                    contentful
                  </td>
                </tr>
                <tr>
                  <td>URL</td>
                  <td>
                    <a href="https://www.seek.com.au/career-advice/page/salary-insights">
                      https://www.seek.com.au/career-advice/page/salary-insights
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="experience">
        <h2 className="title-section">Work Experience</h2>
        <div className="company">
          <div className="title-group">
            <h3 className="title">JavaScript Front-End Developer</h3>
            <p className="title-type">Full Time</p>
          </div>
          <div className="location-group">
            <p>SLIK - Redfern, Sydney</p>
            <p>2015 - 2018, 2019</p>
          </div>
          <p className="company-role">
            <span>Role:</span> Developed dynamic display ads and used GreenSock
            API for animations. Worked closely with clients such as Qantas,
            Fairfax/NINE, Suncorp, AAMI, HCF. Developed dynamic display ads that
            fetched data over APIs.
          </p>
          {/*
          <p className="years">2015 - 2018, 2019 - Present</p>
          <p className="role">
            Role: Developed dynamic display ads and used GreenSock API for
            animations. Worked closely with clients such as Qantas,
            Fairfax/NINE, Suncorp, AAMI, HCF. Developed dynamic display ads that
            fetched data over APIs.
          </p>
          <p className="tech">
            Technology stack: HTML, CSS/SCSS, JavaScript/ES6, GreenSock library,
            VueJS, React, Angular
</p>*/}
        </div>
        <div className="company">
          <div className="title-group">
            <h3 className="title">Senior Front-End Developer</h3>
            <p className="title-type">Full Time</p>
          </div>
          <div className="location-group">
            <p>Snakk Media - Surry Hills, Sydney</p>
            <p>2018</p>
          </div>
          <p className="company-role">
            <span>Role:</span> Working on the Celtra ad platform. Developed
            features that weren’t native to the ad platform. Was working as a
            Front-End Developer. Help the creative team by building prototypes
            for their ideas. Mobile and tablet testing; debugging on devices
          </p>
          {/*<h3 className="title">Snakk Media - Creative Agency</h3>
          <p className="years">2018</p>
          <p className="role">
            Role: Working on the Celtra ad platform. Developed features that
            weren’t native to the ad platform. Was working as a Front-End
            Developer. Help the creative team by building prototypes for their
            ideas. Mobile and tablet testing; debugging on devices
          </p>
          <p className="tech">
            Technology stack: HTML, CSS/SCSS, JavaScript/ES6, GreenSock library,
            Celtra
</p>*/}
        </div>
      </section>
      <section className="hobbies">
        <h2 className="title-section">Hobbies</h2>
        <p>Pingpong, Guitar, Food</p>
      </section>
    </main>
    <style jsx>{`
      * {
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        // color: #1c1c1c;
      }
      .resume {
        display: flex;
        max-width: 960px;
        margin: 0 auto;
        border: 1px solid #f2f2f2;
      }
      .aside {
        width: 30%;
        background: hsl(220, 54%, 43%);
      }
      .main {
        width: 70%;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: 'Roboto', sans-serif;
        font-size: 26px;
        font-weight: 900;
      }
      .profile-details {
        text-align: center;
        background: hsl(220, 54%, 33%);
        padding: 2rem;
        color: #fff;
      }
      .contact-details,
      .social-details,
      .resume-details {
        color: #fff;
        font-size: 0.8rem;
        padding: 2rem 2rem 0;
      }
      .resume-details {
        padding: 2rem;
      }
      .contact-details p,
      .social-details p,
      .resume-details p,
      .contact-details a,
      .social-details a,
      .resume-details a {
        display: flex;
        align-items: center;
        color: hsl(220, 54%, 65%);
      }
      .contact-details p,
      .social-details p,
      .resume-details p {
        margin: 0 0 10px;
      }
      .contact-details p a,
      .social-details p a,
      .resume-details p a {
        color: inherit;
        text-decoration: none;
        transition: color 0.2s ease-in-out;
      }
      .contact-details p a:hover,
      .social-details p a:hover,
      .resume-details p a:hover {
        // text-decoration: underline;
        color: hsl(220, 54%, 85%);
      }
      .contact-details p:last-child,
      .social-details p:last-child {
        margin-bottom: 0;
      }

      .contact-title,
      .social-title {
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.4px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        margin-bottom: 10px;
      }

      .profile-pic {
        border-radius: 50%;
        width: 150px;
        height: 150px;
      }
      .profile-name {
        margin-top: 10px;
        font-family: 'Montserrat';
        font-size: 23px;
      }
      .profile-title {
        color: hsl(221, 53%, 63%);
        margin-top: 2px;
      }
      .icons {
        width: 15px;
        height: 15px;
        padding: 6px;
        padding-left: 0;
        margin-right: 5px;
      }
      .main {
        background: #fff;
        padding: 2rem;
      }
      .projects,
      .experience,
      .hobbies {
        margin-bottom: 2rem;
      }

      .download-btn {
        background: #fff;
        padding: 1rem;
        border-radius: 5px;
        color: hsl(220, 54%, 47%);
        font-size: 16px;
        text-align: center;
        font-weight: 700;
        display: inline-block !important;
        text-decoration: none;
      }
      .title-section {
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 20px;
      }

      // EXPERIENCE
      .title-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }

      .title-type {
        background: #f2f2f2;
        padding: 8px 14px;
        border-radius: 30px;
        font-size: 12px;
      }
      .location-group {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }

      .company {
        border-bottom: 1px solid #dadada;
        padding: 40px 0;
      }

      .title-section + .company {
        padding-top: 0;
      }

      .company-role {
        color: hsl(0, 0%, 30%);
      }

      span {
        color: #000;
        font-weight: 700;
      }

      // PROJECTS
      .project {
        border-bottom: 1px solid #dadada;
        padding: 40px 0;
      }

      .title-section + .project {
        padding-top: 0;
      }

      td {
        vertical-align: initial;
        padding-right: 20px;
        padding-bottom: 10px;
        // color: hsl(0, 0%, 30%);
      }

      // .project-summary {
      //   display: flex;
      // }
      .project-summary p {
        margin-bottom: 10px;
      }
    `}</style>
  </div>
);

export default Resume;
