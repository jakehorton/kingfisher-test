import React from 'react';
import './home.styles.css'

const Home = () => (
    <div className='home'>
        <h1>
            Kingfisher technical test
        </h1>
        <p>
            A	small	web	application	is	to	be	built	and	delivered	to	us	in	order	to	strengthen	the	application	for	
            this	role.	Candidate	is	to	demonstrate	technical	ability by	showing	HTML,	CSS	and	JavaScript
            knowledge to	a	standard	they	deem	necessary	for	this	exercise.	Candidate	can	show	extra	ability	and	
            extend	the	brief as	long	as	they	can	account	for	how	much	time	this	has	taken. The	core	
            requirements must	be	met.
        </p>
        <p>
                A	small	web	application	to	demonstrate	the	following:
                <ul>
                    <li>
                        A	menu	system	containing	three	links	to	the	following:
                        <div className='listDiv'>
                            <ul className='list'>
                                <li>
                                    CV	/	LinkedIn	Profile
                                </li>
                                <li>
                                    a technical	resource	they	read	to	keep	up	to	date	with	industry	advances
                                </li>
                                <li>
                                    a	small	JS	application
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                The	application	is to	be a	non-scientific	calculator.	The	design	and	UX	is	entirely	up	to	the	candidate	
                and	it	should	present	a	professional	browser-based	interface	but	the	focus	should	be	on correct
                functionality.
        </p>

    </div>
)

export default Home;