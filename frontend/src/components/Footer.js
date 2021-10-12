import React from "react";

function Footer() {
	return (
		<div className=" d-flex text-black  my-4 w-100">
			<div className="container ">
				<a href="http://www.instagram.com/pratikartik" target="_blank">
					<i
						style={{
							color: "black",
							fontSize: "3rem",
							marginLeft: "1rem",
						}}
						className="fab fa-instagram"
					></i>
				</a>
				<a
					href="https://www.linkedin.com/in/kartik-shikhare-7145b11b4/"
					target="_blank"
				>
					<i
						style={{
							color: "black",
							fontSize: "3rem",
							marginLeft: "1rem",
						}}
						className="fab fa-linkedin-in"
					></i>
				</a>
				<a href="https://www.facebook.com/pratikshikhare26/" target="_blank">
					<i
						style={{
							color: "black",
							fontSize: "2.5rem",
							marginLeft: "1rem",
						}}
						className="fab fa-facebook-f"
					></i>
				</a>
				<a href="https://www.github.com/kartiks26/" target="_blank">
					<i
						style={{
							color: "black",
							fontSize: "2.5rem",
							marginLeft: "1rem",
						}}
						className="fab fa-github"
					></i>
				</a>
			</div>
			<div>
				<p
					style={{
						fontSize: "1.0rem",
						fontWeight: "600",
					}}
				>
					Kartik Shikhare
				</p>
			</div>
		</div>
	);
}

export default Footer;
