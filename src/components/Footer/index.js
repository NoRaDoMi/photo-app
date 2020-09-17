import React from 'react';
import { Container, Row } from 'reactstrap';
import './Footer.scss';

Footer.propTypes = {};

function Footer(props) {
	return (
		<footer className="footer">
			<Container>
				<Row className="justify-content-between text-center">
					<div className="footer__title">Copyright @ Noradomi 2020</div>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
