/*import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./Hexstream.jpeg"
								alt="Hexstream"
								className="work-image"
							/>
							<div className="work-title">Hexstream</div>
							<div className="work-subtitle">
								Software Engineer intern
							</div>
							<div className="work-duration">Jan 2025 - Present</div>
						</div>

						<div className="work">
							<img
								src="./uga.png"
								alt="University of georgia,athens"
								className="work-image"
							/>
							<div className="work-title">University of Georgia</div>
							<div className="work-subtitle">
								Research Assistant
							</div>
							<div className="work-duration">Aug 2023- Dec 2024</div>
						</div>



                        <div className="work">
							<img
								src="./uga.png"
								alt="Infosys"
								className="work-image"
							/>
							<div className="work-title">Infosys</div>
							<div className="work-subtitle">
								Software developer intern
							</div>
							<div className="work-duration">Jan 2023-July 2023</div>
						</div>                        




					</div>
				}
			/>
		</div>
	);
};

export default Works; */



import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./Hexstream.jpeg"
								alt="Hexstream"
								className="work-image"
							/>
							<div className="work-content">
								<div className="work-title">Hexstream</div>
								<div className="work-subtitle">
									Software Engineer Intern
								</div>
								<div className="work-duration">Jan 2025 - Present</div>
							</div>
						</div>

						<div className="work">
							<img
								src="./newuga.png"
								alt="University of Georgia, Athens"
								className="work-image"
							/>
							<div className="work-content">
								<div className="work-title">University of Georgia</div>
								<div className="work-subtitle">Research Assistant</div>
								<div className="work-duration">Aug 2023 - Dec 2024</div>
							</div>
						</div>

						<div className="work">
							<img
								src="./final-image.jpg"
								alt="Infosys"
								className="work-image"
							/>
							<div className="work-content">
								<div className="work-title">Infosys</div>
								<div className="work-subtitle">Software Developer Intern</div>
								<div className="work-duration">Jan 2023 - July 2023</div>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
