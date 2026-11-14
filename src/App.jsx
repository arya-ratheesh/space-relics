
import { useState } from 'react';
import './App.css';
const missions = {
  Moon: [
  {
  id: 'descent-stage',
  name: 'Lunar Module Descent Stage',
  mission: 'Apollo 15',
  status: 'Intentionally left behind on the Moon',
  description: 'The lower half of the lunar module Falcon carried astronauts David Scott and James Irwin to the lunar surface. It also served as the launch platform for their return journey. After the ascent stage departed, the descent stage remained on the Moon.',
  image: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia13/pia13058/PIA13058.jpg?crop=faces%2Cfocalpoint&fit=crop&h=150&w=150',
  imageCaption: 'Apollo 15 landing site, showing the tracks left during lunar exploration.',
  photoSource: 'https://science.nasa.gov/photojournal/retracing-the-steps-of-apollo-15/',
  timeline: [
    {
      date: 'July 30, 1971',
      event: 'Apollo 15 landed near Hadley Rille on the Moon.'
    },
    {
      date: 'July 30 – August 2, 1971',
      event: 'Astronauts explored the lunar surface and conducted scientific experiments.'
    },
    {
      date: 'August 2, 1971',
      event: 'The lunar module ascent stage lifted off, leaving the descent stage behind.'
    },
    {
      date: 'Present day',
      event: 'The descent stage remains at the Apollo 15 landing site.'
    }
  ]
},
    {
  id: 'lunar-rover',
  name: 'Lunar Roving Vehicle',
  mission: 'Apollo 15',
  status: 'Left behind on the Moon',
  description: 'The battery-powered Lunar Roving Vehicle was the first car driven on the Moon. Astronauts David Scott and James Irwin used it to travel farther across the lunar surface, explore the terrain and collect rock samples.',
image: 'https://images-assets.nasa.gov/image/as15-86-11603/as15-86-11603~orig.jpg',
  imageCaption: 'Apollo 15 Lunar Roving Vehicle on the lunar surface.',
  photoSource: 'https://www.nasa.gov/image-article/lunar-roving-vehicle-apollo-15-mission/',
  timeline: [
    {
      date: 'July 26, 1971',
      event: 'Apollo 15 launched from Earth.'
    },
    {
      date: 'July 30, 1971',
      event: 'Apollo 15 landed near Hadley-Apennine on the Moon.'
    },
    {
      date: 'July 31, 1971',
      event: 'The Lunar Roving Vehicle made its first drive on the Moon.'
    },
    {
      date: 'August 2, 1971',
      event: 'The rover completed its third and final lunar excursion.'
    },
    {
      date: 'August 2, 1971',
      event: 'The astronauts departed the Moon, leaving the rover at the landing site.'
    }
  ]
},
{
  id: 'alsep',
  name: 'ALSEP Experiments',
  mission: 'Apollo 15',
  status: 'Shut down on September 30, 1977',
  description: 'The Apollo Lunar Surface Experiments Package (ALSEP) was a collection of scientific instruments deployed by astronauts near the Apollo 15 landing site. It studied moonquakes, heat flow beneath the lunar surface, magnetic fields and the lunar environment. The instruments continued sending scientific data to Earth long after the astronauts returned home.',
  image: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/2023/09/as15-85-11471_orig.jpg',
  imageCaption: 'Apollo 15 lunar surface photograph showing the Lunar Rover and ALSEP equipment.',
  photoSource: 'https://science.nasa.gov/resource/apollo-15-mission-image-view-of-the-apollo-lunar-surface-experiments-package-alsep/',
  timeline: [
    {
      date: 'July 30, 1971',
      event: 'Apollo 15 landed near Hadley-Apennine on the Moon.'
    },
    {
      date: 'July 31, 1971',
      event: 'Astronauts deployed the Apollo 15 ALSEP instruments and activated the central station.'
    },
    {
      date: '1971–1977',
      event: 'The instruments continuously collected and transmitted scientific measurements to Earth.'
    },
    {
      date: 'September 30, 1977',
      event: 'NASA officially shut down all ALSEP stations, ending their scientific operations.'
    }
  ]
},

  ],

Mars: [
  {
  id: 'spirit',
  name: 'Spirit',
  mission: 'Mars Exploration Rover',
  status: 'Mission ended in 2011',
  description: 'Spirit explored Mars for over six years, discovering evidence that the planet once had a wetter environment.',
 image: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia04/pia04995/PIA04995.jpg?crop=faces%2Cfocalpoint&fit=clip&h=3851&w=3498',
  imageCaption: 'First colour image of Mars taken by Spirit.',
  photoSource: 'https://science.nasa.gov/photojournal/first-color-image-from-spirit/',
  timeline: [
    {
      date: 'January 2004',
      event: 'Spirit successfully landed in Gusev Crater on Mars.'
    },
    {
      date: 'March 2004',
      event: 'Spirit discovered evidence of past water activity in Martian rocks.'
    },
    {
      date: 'April 2009',
      event: 'The rover became stuck in soft Martian soil.'
    },
    {
      date: 'March 2010',
      event: 'Spirit stopped communicating after becoming unable to move into a favourable position for winter.'
    },
    {
      date: 'May 2011',
      event: 'NASA officially ended the Spirit mission.'
    }
  ]
},
 {
  id: 'opportunity',
  name: 'Opportunity',
  mission: 'Mars Exploration Rover',
  status: 'Mission ended in 2019',
  description: 'Opportunity explored Mars for almost 15 years, studying rocks and evidence of ancient water.',
image: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia22/pia22929/PIA22929.jpg',
  imageCaption: "Opportunity's last transmitted image.",
  photoSource: 'https://photojournal.jpl.nasa.gov/catalog/PIA22929',
  timeline: [
    {
      date: 'January 2004',
      event: 'Opportunity landed in Meridiani Planum on Mars.'
    },
    {
      date: '2004',
      event: 'The rover discovered evidence that liquid water had once altered Martian rocks.'
    },
    {
      date: 'June 10, 2018',
      event: 'Opportunity sent its last communication after a planet-wide dust storm blocked sunlight.'
    },
    {
      date: 'February 13, 2019',
      event: 'NASA officially declared the Opportunity mission over.'
    }
  ]
},
 {
  id: 'insight',
  name: 'InSight',
  mission: 'Mars lander',
  status: 'Mission ended in 2022',
  description: 'InSight studied the deep interior of Mars and detected marsquakes.',
  image: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia22/pia22829/PIA22829.jpg',
  imageCaption: "InSight's first image from Mars.",
  photoSource: 'https://science.nasa.gov/photojournal/insights-first-image-from-mars/',
  timeline: [
    {
      date: 'November 26, 2018',
      event: 'InSight successfully landed on Mars.'
    },
    {
      date: 'February 2019',
      event: 'The lander began studying Mars using its scientific instruments.'
    },
    {
      date: 'April 2019',
      event: 'InSight detected its first likely marsquake.'
    },
    {
      date: 'December 2022',
      event: 'NASA confirmed that it had lost communication with InSight.'
    },
    {
      date: 'December 21, 2022',
      event: 'NASA officially declared the mission ended.'
    }
  ]
},
]
}

function App() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedMission, setSelectedMission] = useState(null);

  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">✦</span>
          SPACE RELICS
        </div>

        <div className="nav-links">
          <a href="#explore">EXPLORE</a>
          <a href="#archive">ARCHIVE</a>
          <a href="#about">ABOUT</a>
        </div>

        <button className="nav-button">MISSION LOG ↗</button>
      </nav>

          <main>
        {!selectedDestination && (
          <>

        {/* Hero Section */}
        <section className="hero" id="explore">
          <div className="hero-content">

            <div className="eyebrow">
              <span className="status-dot"></span>
              NASA SPACE EXPLORATION ARCHIVE
            </div>

            <h1>
              THE MISSIONS ENDED.
              <br />
              <span>THEIR STORIES DIDN'T.</span>
            </h1>

            <p>
              Explore the machines humanity left behind on the Moon
              and Mars. Discover their missions, scientific achievements
              and the legacy they continue to leave behind.
            </p>

            <a href="#archive" className="explore-button">
              EXPLORE THE ARCHIVE <span>↗</span>
            </a>

            <div className="hero-footer">
              <span>01 / THE HUMAN FOOTPRINT</span>
              <span>EST. 1959 — PRESENT</span>
            </div>

          </div>

          <div className="hero-visual">
            <div className="planet-glow"></div>
            <div className="planet"></div>
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="planet-label">
              <span>DESTINATION 001</span>
              <strong>THE MOON</strong>
              <small>384,400 KM FROM EARTH</small>
            </div>

            <div className="coordinates">
              00° 41' 15.0" N<br />
              23° 26' 00.0" E
            </div>
          </div>

          <div className="hero-side-label">
            FIG. 001 — HUMANITY'S FOOTPRINT
          </div>
        </section>

        {/* Statistics */}
        <section className="stats">

          <div className="stat">
            <span>01</span>
            <strong>MOON</strong>
            <small>DESTINATION</small>
          </div>

          <div className="stat">
            <span>02</span>
            <strong>MARS</strong>
            <small>DESTINATION</small>
          </div>

          <div className="stat">
            <span>∞</span>
            <strong>LEGACIES</strong>
            <small>TO DISCOVER</small>
          </div>

          <div className="stat">
            <span>NASA</span>
            <strong>MISSIONS</strong>
            <small>HUMAN & ROBOTIC</small>
          </div>

        </section>

        {/* Archive */}
        <section className="archive-section" id="archive">

          <div className="section-heading">
            <div>
              <span className="section-label">
                THE COLLECTION / 001
              </span>
              <h2>Beyond the Mission.</h2>
            </div>

            <p>
              Every machine has a story.
              <br />
              Every landing leaves a legacy.
            </p>
          </div>

          {/* Destination Cards */}
          <div className="destination-grid">

            {/* Moon Card */}
            <article
              className="destination-card moon-card"
              onClick={() => setSelectedDestination('Moon')}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedDestination('Moon');
                }
              }}
            >
              <div className="card-number">
                01 / LUNAR ARCHIVE
              </div>

              <div className="card-info">
                <h3>The Moon</h3>

                <p>
                  Explore the equipment left behind on our closest neighbour.
                </p>

                <span className="card-link">
                  EXPLORE LUNAR RELICS ↗
                </span>
              </div>
            </article>

            {/* Mars Card */}
            <article
              className="destination-card mars-card"
              onClick={() => setSelectedDestination('Mars')}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedDestination('Mars');
                }
              }}
            >
              <div className="card-number">
                02 / MARTIAN ARCHIVE
              </div>

              <div className="card-info">
                <h3>Mars</h3>

                <p>
                  Discover the machines that carried humanity's curiosity to Mars.
                </p>

                <span className="card-link">
                  EXPLORE MARTIAN RELICS ↗
                </span>
              </div>
            </article>

          </div>

          {/* Moon Archive */}
          {selectedDestination === 'Moon' && (
            <div className="relic-section">

              <div className="section-heading">
                <div>
                  <span className="section-label">
                    DESTINATION 001 / THE MOON
                  </span>
                  <h2>What We Left Behind.</h2>
                </div>

                <p>
                  Objects that remain on the lunar surface,
                  long after the missions ended.
                </p>
              </div>

              <div className="relic-grid">

                <article className="relic-card">
                  <span>01 / APOLLO 15</span>
                  <h3>Lunar Module Descent Stage</h3>
                  <p>
                    The lower half of the lunar lander that carried
                    astronauts to the Moon. It remained there after
                    the crew departed.
                  </p>
                  <small>STATUS: INTENTIONALLY LEFT BEHIND</small>
                </article>

                <article className="relic-card">
                  <span>02 / APOLLO 15</span>
                  <h3>Lunar Roving Vehicle</h3>
                  <p>
                    The electric rover used by astronauts to explore
                    the lunar surface and collect samples.
                  </p>
                  <small>STATUS: MISSION COMPLETE</small>
                </article>

                <article className="relic-card">
                  <span>03 / APOLLO 15</span>
                  <h3>ALSEP Experiments</h3>
                  <p>
                    Scientific instruments left on the Moon to study
                    its environment and interior. Their transmissions
                    ended in 1977.
                  </p>
                  <small>STATUS: SHUT DOWN IN 1977</small>
                </article>

              </div>

              <button
                className="nav-button"
                onClick={() => setSelectedDestination(null)}
              >
                ← BACK TO DESTINATIONS
              </button>

            </div>
          )}

          
{/* Mars Archive */}
{selectedDestination === 'Mars' && (
  <div className="relic-section">

    <div className="section-heading">
      <div>
        <span className="section-label">
          DESTINATION 002 / MARS
        </span>
        <h2>Silent on the Red Planet.</h2>
      </div>

      <p>
        Their signals faded.
        Their discoveries remain.
      </p>
    </div>

    <div className="relic-grid">

      <article className="relic-card">
        <span>01 / MARS EXPLORATION ROVER</span>
        <h3>Spirit</h3>
        <p>
         <img
  className="relic-image"
  src="https://photojournal.jpl.nasa.gov/jpeg/PIA04988.jpg"
  alt="NASA Spirit rover on Mars"
/>
          Spirit explored Mars for over six years, discovering
          evidence that the planet once had a wetter environment.
          It became trapped in soft soil and its mission ended in 2011.
        </p>
        <small>STATUS: MISSION ENDED · 2011</small>
        <p>
          <a
            href="https://science.nasa.gov/mission/mer-spirit/"
            target="_blank"
            rel="noreferrer"
          >
            NASA MISSION RECORD ↗
          </a>
        </p>
      </article>

      <article className="relic-card">
        <span>02 / MARS EXPLORATION ROVER</span>
        <h3>Opportunity</h3>
        <p>
          <img
  className="relic-image"
  src="https://photojournal.jpl.nasa.gov/jpeg/PIA18079.jpg"
  alt="NASA Opportunity rover on Mars"
/>
          Opportunity explored Mars for almost 15 years.
          A massive dust storm blocked sunlight from reaching
          its solar panels. NASA ended the mission in 2019.
        </p>
        <small>STATUS: MISSION ENDED · 2019</small>
        <p>
          <a
            href="https://science.nasa.gov/mission/mer-opportunity/"
            target="_blank"
            rel="noreferrer"
          >
            NASA MISSION RECORD ↗
          </a>
        </p>
      </article>

      <article className="relic-card">
        <span>03 / MARS LANDER</span>
        <h3>InSight</h3>
        <p>
          <img
  className="relic-image"
  src="https://photojournal.jpl.nasa.gov/jpeg/PIA22736.jpg"
  alt="NASA InSight lander on Mars"
/>
          InSight studied the deep interior of Mars and detected
          marsquakes. Its solar-powered batteries eventually
          ran out of energy, ending the mission in 2022.
        </p>
        <small>STATUS: RETIRED · 2022</small>
        <p>
          <a
            href="https://science.nasa.gov/mission/insight/"
            target="_blank"
            rel="noreferrer"
          >
            NASA MISSION RECORD ↗
          </a>
        </p>
      </article>

    </div>

    <button
      className="nav-button"
      onClick={() => setSelectedDestination(null)}
    >
      ← BACK TO DESTINATIONS
    </button>

  </div>
)}
        </section>
          </>
        )}

      </main>
      {/* Destination Archive Screen */}
{selectedDestination && !selectedMission && (
  <section className="relic-section">
    <div className="section-heading">
      <div>
        <span className="section-label">
          DESTINATION ARCHIVE / {selectedDestination.toUpperCase()}
        </span>
        <h2>
          {selectedDestination === 'Moon'
            ? 'What We Left Behind.'
            : 'Silent on the Red Planet.'}
        </h2>
      </div>

      <p>
        Explore the machines, their missions and the stories they left behind.
      </p>
    </div>

    <div className="relic-grid">
      {missions[selectedDestination].map((mission, index) => (
        <article
          className="relic-card"
          key={mission.id}
          onClick={() => setSelectedMission(mission)}
          role="button"
          tabIndex={0}
        >
          <span>0{index + 1} / {mission.mission.toUpperCase()}</span>
          <h3>{mission.name}</h3>
          <p>{mission.description}</p>
          <small>STATUS: {mission.status.toUpperCase()}</small>
          <p className="card-link">EXPLORE MISSION ↗</p>
        </article>
      ))}
    </div>

    <button
      className="nav-button"
      onClick={() => setSelectedDestination(null)}
    >
      ← BACK TO DESTINATIONS
    </button>
  </section>
)}

      {/* Individual Mission Detail Screen */}
{selectedMission && (
  <section className="relic-section">

    <span className="section-label">
      {selectedMission.mission.toUpperCase()} / MISSION DETAILS
    </span>

    <h2>{selectedMission.name}</h2>

    <div className="relic-card">
      {selectedMission.image && (
  <img
    src={selectedMission.image}
    alt={selectedMission.name}
    className="relic-image"
  />
)}
{selectedMission.imageCaption && (
  <p className="image-caption">
    {selectedMission.imageCaption}
    {' · '}
    <a
      href={selectedMission.photoSource}
      target="_blank"
      rel="noreferrer"
    >
      NASA Photo Source ↗
    </a>
  </p>
)}
      <span>MISSION STORY</span>

      <p>{selectedMission.description}</p>

      <br />

      <span>MISSION STATUS</span>

      <p>{selectedMission.status}</p>
    </div>
    {selectedMission.timeline && (
  <div className="timeline-section">
    <span className="section-label">MISSION TIMELINE</span>

    {selectedMission.timeline.map((item, index) => (
      <div className="timeline-item" key={index}>
        <span className="timeline-date">{item.date}</span>
        <p>{item.event}</p>
      </div>
    ))}
  </div>
)}

    <div className="relic-card">
      <span>PHOTO ARCHIVE</span>
      <h3>Explore the mission through images.</h3>
      <p>
        Mission photographs, surface discoveries and images
        captured during exploration will appear here.
      </p>
    </div>

    <button
      className="nav-button"
      onClick={() => setSelectedMission(null)}
    >
      ← BACK TO MISSION ARCHIVE
    </button>

  </section>
)}
      {/* Footer */}
      <footer id="about">
        <span>SPACE RELICS © 2026</span>

        <span>
          THE MISSIONS ENDED. THE DISCOVERIES LIVE ON.
        </span>
      </footer>

    </div>
  );
}

export default App;
