import logo from '../images/app-logo.png'

const Navbar = () => {
	return (
		<nav className='navbar'>
			<img src={logo} className="nav--logo" alt="logo" />
		</nav>
	)
}

export default Navbar;