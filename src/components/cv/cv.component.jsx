import React from 'react';
import './cv.styles.css'

const Cv = () => (
    <div className='cv'>
        <h1>Jake Horton </h1>
        <h2>Junior front end developer</h2>

        <div>
            <hr></hr>
            <section className='recentWork'>
                <h3>Recent Work</h3>
                <ul>
                    <li>
                        <h4>CommuterClub | <span>Client Website</span></h4>
                        <p>
                            Working as a freelance front-end developer, I was required to implement front-end architechture and produce pixel-perfect web pages from designs given by the client. The stack used includes Vanilla Js, SCSS and Tailwind.js.
                        </p>
                    </li>
                    <li>
                        <h4>Calsy SSD | <span>Client Website</span></h4>
                        <p>
                        The client brief was to build a full-responsive site that focused on UX/ customer journey and that could be edited in-house as and when required. I decided to build the site using Gatsby alongside Netlify CMS in order for snappy page loading, quick hosting and an easy to use CMS for programmatically adding pages.
                        </p>
                    </li>
                    <li>
                        <h4>iSpy | <span>Full-Stack most-wanted list</span></h4>
                        <p>
                        An app using the FBI API and built with Java, Spring and Postgres for the back-end and React and Typescript for the front-end
                        </p>

                    </li>
                </ul>
            </section>
            <hr></hr>
            <section className='skills'>
                <div>
                    <h3>Skills</h3>
                    <ul>
                        <li>
                            Javascript
                        </li>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS/SCSS
                        </li>
                        <li>
                            React.js
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Courses</h3>
                    <ul>
                        <li>
                            <h4>Techswitch Software development bootcamp</h4>
                            <p>
                            An intensive 12-week bootcamp followed by a 10-week final project 
                            </p>
                        </li>
                        <li>
                            <h4>Web Developer Bootcamp</h4>
                            <p>
                            An intensive online course in full-stack web development 
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
            <hr></hr>
            <section className='education'>
                <div>
                    <h3>Education</h3>
                    <ul>
                        <li>
                            <h4 >2019-2020</h4>
                            <h4 className='educationTitle'>Techswitch/Softwire | <span>Software development bootcamp</span></h4>
                            <p>
                                Intensive 16-week full-stack bootcamp at London campus followed by 10-week project. Covered all aspects of software development lifecyle including wire framing and high-fidelity designs, to staging and version control. Stack includes <bold>Javascript, React</bold> and <bold> Java</bold>.
                            </p>
                        </li>
                        <li>
                            <h4>2017-2018</h4>
                            <h4 className='educationTitle'>Imperial College London | <span>MSc Taxonomy & Biodiversity</span></h4>
                            <p>
                            The masters course furthered my biological understanding and developed my scientific skills through world-class teaching. Modules of note include: <bold>Genomics and Bioinformatics, GIS, Molecular Systematics, Advanced Statistics, Biological Computing in R.</bold>
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>

    </div>
)

export default Cv;