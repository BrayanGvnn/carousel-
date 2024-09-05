const Nav = () => {
	return (
		<nav className="nav">
			<img src="/src/assets/logo.png" className="logo" alt="" />
			<ul className="nav-links">
				<li>
					<a href="#" className="nav-link">
						Comida fav
					</a>
				</li>
				<li>
					<a href="#" className="nav-link">
						Gustos musicales
					</a>
				</li>
				<li>
					<a href="#" className="nav-link">
						Hobbies
					</a>
				</li>
				<li>
					<a href="#" className="nav-link">
						Habilidades
					</a>
				</li>
			</ul>
			<div className="search-container">
				<input type="search" className="search-input" placeholder="Buscar..." />
				<CiSearch className="search-icon" />
			</div>
			<VscAccount className="account-icon" />
		</nav>
	);
};

export default Nav;