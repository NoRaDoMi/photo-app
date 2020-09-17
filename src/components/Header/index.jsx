import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss';

Header.propTypes = {};

function Header(props) {
	return (
		<header className="header">
			<Container>
				<Row className="justify-content-between">
					<Col xs="auto">
						<a
							href="http://google.com.vn"
							className="header__link header__title"
							target="_blank"
							rel="noopener noreferrer"
						>
							Noradomi
						</a>
					</Col>

					<Col xs="auto">
						<NavLink exact className="header__link" to="/photos" activeClassName="header__link--active">
							React - Redux Project
						</NavLink>
					</Col>
				</Row>
			</Container>
		</header>
	);
}

export default Header;
