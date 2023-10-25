import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../card/Card";

import "../Works/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Aguardando</div>
							<div className="work-subtitle">
							Aguardando
							</div>
							<div className="work-duration">Aguardando</div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Aguardando</div>
							<div className="work-subtitle">
							Aguardando
							</div>
							<div className="work-duration">Aguardando</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
