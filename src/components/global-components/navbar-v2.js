import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';

class NavbarV2 extends Component {

	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		let CustomClass = this.props.CustomClass ? this.props.CustomClass : ''
		return (
			<div>
				<header className={"ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent--- gradient-color-4--- " + CustomClass}>
					{/* ltn__header-top-area start */}

					{/* ltn__header-top-area end */}
					{/* ltn__header-middle-area start */}
					<div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
						<div style={{display:'flex', justifyContent:'center'}} >
							<div className='row' style={{width:'90vw'}}>
								<div className="col">
									<div className="site-logo-wrap">
										<div className="site-logo go-top">
											<Link to="/"><img src={publicUrl + "assets/img/trillion logo black.png"} alt="Logo" style={{ height: '70px' }} /></Link>
										</div>
									</div>
								</div>
								<div className="col header-menu-column">
									<div className="header-menu d-none d-xl-block go-top">
										<nav>
											<div className="ltn__main-menu" >
												<ul style={{justifyContent:'end'}}>
													<li className=""><Link to="/">Home</Link></li>
													<li className=""><Link to="/about">About</Link></li>
													<li className=""><Link to="/shop">Property</Link></li>
													
												</ul>
											</div>
										</nav>

									</div>
								</div>
								<div className="col header-menu-column">
									<div className="header-menu d-none d-xl-block go-top">
										<nav>
											<div className="ltn__main-menu" >
												<ul style={{justifyContent:'end'}}>
													
													<li className="" style={{color:'white',backgroundColor:'#075e54', fontWeight:'bold'}}><Link to="/add-listing" style={{color:'white',fontWeight:'bold'}}>Contact Us</Link></li>
												</ul>
											</div>
										</nav>
										
									</div>
								</div>
								<div className="col--- ltn__header-options ltn__header-options-2 ">
									{/* Mobile Menu Button */}
									<div className="mobile-menu-toggle d-xl-none">
										<a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
											<svg viewBox="0 0 800 600">
												<path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
												<path d="M300,320 L540,320" id="middle" />
												<path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* ltn__header-middle-area end */}
				</header>
				<div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
					<div className="ltn__utilize-menu-inner ltn__scrollbar">
						<div className="ltn__utilize-menu-head">
							<div className="site-logo">
								<Link to="/"><img src={publicUrl + "assets/img/logo.png"} alt="Logo" /></Link>
							</div>
							<button className="ltn__utilize-close">×</button>
						</div>
						<div className="ltn__utilize-menu-search-form">
							<form action={"#"}>
								<input type="text" placeholder="Search..." />
								<button><i className="fas fa-search" /></button>
							</form>
						</div>
						<div className="ltn__utilize-menu">
							<ul>
								<li><a href="#">Home</a>
									<ul className="sub-menu">
										<li><Link to="/">Home Style 01</Link></li>
										<li><Link to="/home-v2">Home Style 02</Link></li>
										<li><Link to="/home-v3">Home Style 03</Link></li>
										<li><Link to="/home-v4">Home Style 04</Link></li>
										<li><Link to="/home-v5">Home Style 05 <span className="menu-item-badge">video</span></Link></li>
										<li><Link to="/home-v6">Home Style 06</Link></li>
										<li><Link to="/home-v7">Home Style 07</Link></li>
										<li><Link to="/home-v8">Home Style 08</Link></li>
										<li><Link to="/home-v9">Home Style 09</Link></li>
										<li><Link to="/home-v10">Home Style 10</Link></li>
									</ul>
								</li>
								<li><Link to="/about">About</Link>
									<ul className="sub-menu">
										<li><Link to="/about">About</Link></li>
										<li><Link to="/service">Services</Link></li>
										<li><Link to="/service-details">Service Details</Link></li>
										<li><Link to="/portfolio">Portfolio</Link></li>
										<li><Link to="/portfolio-v2">Portfolio - 02</Link></li>
										<li><Link to="/portfolio-details">Portfolio Details</Link></li>
										<li><Link to="/team">Team</Link></li>
										<li><Link to="/team-details">Team Details</Link></li>
										<li><Link to="/faq">FAQ</Link></li>
										<li><Link to="/location">Google Map Locations</Link></li>
									</ul>
								</li>
								<li><Link to="/shop">Shop</Link>
									<ul className="sub-menu">
										<li><Link to="/shop">Shop</Link></li>
										<li><Link to="/shop-grid">Shop Grid</Link></li>
										<li><Link to="/shop-left-sidebar">Shop Left sidebar</Link></li>
										<li><Link to="/shop-right-sidebar">Shop Right sidebar</Link></li>
										<li><Link to="/product-details">Shop Details</Link></li>
										<li><Link to="/cart">Cart</Link></li>
										<li><Link to="/checkout">Checkout</Link></li>
										<li><Link to="/my-account">My Account</Link></li>
										<li><Link to="/login">Sign in</Link></li>
										<li><Link to="/register">Register</Link></li>
									</ul>
								</li>
								<li><Link to="/blog-grid">News</Link>
									<ul className="sub-menu">
										<li><Link to="/blog">News</Link></li>
										<li><Link to="/blog-grid">News Grid</Link></li>
										<li><Link to="/blog-left-sidebar">News Left sidebar</Link></li>
										<li><Link to="/blog-right-sidebar">News Right sidebar</Link></li>
										<li><Link to="/blog-details">News details</Link></li>
									</ul>
								</li>
								<li><Link to="#">Pages</Link>
									<ul className="sub-menu">
										<li><Link to="/about">About</Link></li>
										<li><Link to="/service">Services</Link></li>
										<li><Link to="/service-details">Service Details</Link></li>
										<li><Link to="/portfolio">Portfolio</Link></li>
										<li><Link to="/portfolio-2">Portfolio - 02</Link></li>
										<li><Link to="/portfolio-details">Portfolio Details</Link></li>
										<li><Link to="/team">Team</Link></li>
										<li><Link to="/team-details">Team Details</Link></li>
										<li><Link to="/faq">FAQ</Link></li>
										<li><Link to="/history">History</Link></li>
										<li><Link to="/add-listing">Add Listing</Link></li>
										<li><Link to="/locations">Google Map Locations</Link></li>
										<li><Link to="/404">404</Link></li>
										<li><Link to="/contact">Contact</Link></li>
										<li><Link to="/coming-soon">Coming Soon</Link></li>
									</ul>
								</li>
								<li><Link to="/contact">Contact</Link></li>
							</ul>
						</div>
						<div className="ltn__utilize-buttons ltn__utilize-buttons-2">
							<ul>
								<li>
									<Link to="/my-account" title="My Account">
										<span className="utilize-btn-icon">
											<i className="far fa-user" />
										</span>
										My Account
									</Link>
								</li>
								<li>
									<Link to="/wishlist" title="Wishlist">
										<span className="utilize-btn-icon">
											<i className="far fa-heart" />
											<sup>3</sup>
										</span>
										Wishlist
									</Link>
								</li>
								<li>
									<Link to="/cart" title="Shoping Cart">
										<span className="utilize-btn-icon">
											<i className="fas fa-shopping-cart" />
											<sup>5</sup>
										</span>
										Shoping Cart
									</Link>
								</li>
							</ul>
						</div>
						<div className="ltn__social-media-2">
							<ul>
								<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
								<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
								<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
								<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default NavbarV2