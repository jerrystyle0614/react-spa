
import React from "react";
import { List, ListItem } from "@material-ui/core";
import Favorite from "@material-ui/icons/Favorite";

const Footer = (props) => {
	return (
		<footer>
		<div>
			<div>
				<List>
				<ListItem>
					<a href="https://www.creative-tim.com/?ref=mkr-footer"
						target="_blank"
					>
						Creative Tim
					</a>
				</ListItem>
				<ListItem>
				<a
					href="https://www.creative-tim.com/presentation?ref=mkr-footer"
					target="_blank"
				>
					About us
				</a>
				</ListItem>
				<ListItem>
				<a
					href="http://blog.creative-tim.com/?ref=mkr-footer"
					target="_blank"
				>
					Blog
				</a>
				</ListItem>
			</List>
			</div>
			<div>
				&copy; {1900 + new Date().getYear()} , made with{" "}
				<Favorite/> by{" "}
				<a>
					Jerry Tang
				</a>{" "}
				for a web.
			</div>
		</div>
		</footer>
	);
};

export default Footer;
