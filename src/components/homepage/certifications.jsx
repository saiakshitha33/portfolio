import React from "react";
import "./styles/certifications.css";

const Certifications = () => {
	return (
		<div className="certifications">
			<h2 className="certifications-title">Certifications</h2>
			<div className="certifications-body">
				<div className="certification-card">
					<img
						src="https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png"
						alt="AWS Certification"
						className="certification-image"
					/>
					<div className="certification-info">
						<div className="certification-name">
							AWS Certified Developer Associate – AWS, 2025
						</div>
						<a
							href="https://www.credly.com/earner/earned/badge/966af438-7480-4c11-998f-9a3c3357b99a"
							target="_blank"
							rel="noopener noreferrer"
							className="certification-button"
						>
							View Achievement
						</a>
					</div>
				</div>

				<div className="certification-card">
					<img
						src="https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
						alt="AWS Certification"
						className="certification-image"
					/>
					<div className="certification-info">
						<div className="certification-name">
							AWS Certified Solutions Architect – AWS, 2024
						</div>
						<a
							href="https://www.credly.com/earner/earned/badge/4c6136c2-c96e-451a-9486-604d9cc6dbb2"
							target="_blank"
							rel="noopener noreferrer"
							className="certification-button"
						>
							View Achievement
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Certifications;
