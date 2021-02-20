import React from 'react';
import './Social.css'
import { socialMediaLinks } from "../../portfolio";


function Social() {
	console.log(process.env.PUBLIC_URL)
	return(
		<div className="social-media-links">
			{socialMediaLinks.github && <a href={socialMediaLinks.github} className="icon-button github" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-github"/>
			</a>}
			{socialMediaLinks.email && <a href={`mailto:${socialMediaLinks.email}`} className="icon-button email" target="_blank" rel="noopener noreferrer">
				<i className="fas fa-envelope"/>
			</a>}
			{socialMediaLinks.blogger && <a href={socialMediaLinks.blogger} className="icon-button blogger" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-blogger"/>
			</a>}
		</div>
	);
}
export default Social;