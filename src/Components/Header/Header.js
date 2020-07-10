import React from 'react';

function Header() {
	return (
		<header id='Header'>
			<span className='name'>gage e<span className="i-fix">i</span>de</span>
			<div className='link-container'>
				<a href='#Header'>About</a>
				<a href='#Projects'>Projects</a>
				<a href='#Contact'>Contact</a>
			</div>
		</header>
	);
}

export default Header;
