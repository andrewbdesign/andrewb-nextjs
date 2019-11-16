import React from 'react';
import Head from 'next/head';

const Resume = () => (
  <div className="resume">
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:500,700|Roboto&display=swap"
        rel="stylesheet"
      />
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
          <p>
            <a href="tel:+61450250792">
              <img className="icons icon-phone" src="/static/icons/phone.svg" />
              0450 250 792
            </a>
          </p>
          <p>
            <img
              className="icons icon-location"
              src="/static/icons/location.svg"
            />
            Sydney, AU
          </p>
        </div>
        <div className="social-details">
          <h2 className="social-title">Social</h2>
          <p>
            <a
              href="https://www.github.com/andrewbdesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
          <p>
            <a
              href="https://www.twitter.com/andrewbdesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/andrewbonifacio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a
              href="https://codepen.io/androobay/pens/popular"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codepen
            </a>
          </p>
          <p>
            <a
              href="https://www.andrewbdesign.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </p>
          <a>Download printer-friendly resume</a>
        </div>
      </section>
    </aside>
    <main className="main">
      {/* <section className="summary"></section> */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3 className="title">Project Reset: (Commercial project)</h3>
          <p className="scope">
            Scope: Qantas Frequent Flyer program was going to make major changes
            to their loyalty program. To build a landing page to showcase these
            changes. Expected daily traffic was 12 million users.
          </p>
          <p className="role">
            Role: Built the front end. Browser supporting up to IE10. Created
            interactive components that communicated with Qantas backend API.{' '}
          </p>
          <p className="tech">
            Technologies: CSS/SCSS, JavaScript/ES6, React, GreenSock, Lottie
          </p>
          <p className="url">URL: https://frequentflyer.qantas.com</p>
        </div>
        <div className="project">
          <h3 className="title">Qantas Car Insurance: (Commercial project)</h3>
          <p className="scope">
            Scope: Qantas was going to introduce Car insurance for the first
            time. Was assigned to build 8 responsive landing pages. Worked with
            the Qantas design lead and development team in normal HTML, CSS, and
            JavaScript.
          </p>
          <p className="role">
            Role: Built the frontend in vanilla HTML, CSS, JavaScript. Had to
            build up to 14 modules according to the design.
          </p>
          <p className="tech">
            Technologies: HTML, CSS/SCSS, JavaScript/ES6, jQuery
          </p>
          <p className="url">URL: https://insurance.qantas.com/car-insurance</p>
        </div>
        <div className="project">
          <h3 className="title">Seek Salary Report: (Commercial project)</h3>
          <p className="scope">
            Scope: Seek wanted an interactive salary report for each
            industry/role and compare it to the country nation salary average.
            There were 2 versions of the site: the Australian and New Zealand
            variation. Data was hosted on a cms backend (contentful).
          </p>
          <p className="role">
            Role: Built the front end. Used React for main framework. Website
            communicated with API via backed cms contentful. Had to build for 4
            versions: AU candidate, AU hirer, NZ candidate, NZ hirer.
          </p>
          <p className="tech">
            Technologies: CSS/SCSS, JavaScript/ES6, React, GreenSock, ChartJS,
            contentful
          </p>
          <p className="url">
            URL: https://www.seek.com.au/career-advice/page/salary-insights
          </p>
        </div>
      </section>
      <section className="experience">
        <h2>Experience</h2>
        <div className="company">
          <h3 className="title">Slik - Creative Agency</h3>
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
          </p>
        </div>
        <div className="company">
          <h3 className="title">Snakk Media - Creative Agency</h3>
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
          </p>
        </div>
      </section>
      <section className="hobbies">
        <h2>Hobbies</h2>
        <p>Pingpong, Guitar, Food</p>
      </section>
    </main>
    <style jsx>{`
      * {
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
      }
      .resume {
        display: flex;
        max-width: 960px;
        margin: 0 auto;
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
      .social-details {
        color: #fff;
        font-size: 0.8rem;
        padding: 2rem 2rem 0;
      }
      .contact-details p,
      .contact-details a,
      .social-details p,
      .social-details a {
        display: flex;
        align-items: center;
        color: hsl(220, 54%, 65%);
      }
      .contact-details p,
      .social-details p {
        margin: 0 0 10px;
      }
      .contact-details p a,
      .social-details p a {
        color: inherit;
        text-decoration: none;
        transition: color 0.2s ease-in-out;
      }
      .contact-details p a:hover,
      .social-details p a:hover {
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
        // color: hsl(220, 54%, 26%);
      }

      .profile-pic {
        border-radius: 50%;
        width: 150px;
        height: 150px;
      }
      .profile-name {
        margin-top: 10px;
      }
      .profile-title {
        color: hsl(221, 53%, 63%);
        margin-top: 2px;
      }
      .icons {
        width: 15px;
        height: 15px;
        padding: 6px;
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
    `}</style>
  </div>
);

export default Resume;
