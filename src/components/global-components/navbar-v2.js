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
											<Link to="/"><img src={publicUrl + "assets/img/logo.png"} alt="Logo" style={{ height: '2em' }} /></Link>
										</div>
									</div>
								</div>
								<div className="col header-menu-column">
									<div className="header-menu d-none d-xl-block go-top">
										<nav>
											<div className="ltn__main-menu" >
												<ul style={{justifyContent:'center'}}>
													<li className=""><Link to="/">Home</Link></li>
													<li className=""><Link to="/">About Us</Link></li>
													<li className=""><Link to="/">Contact</Link></li>
													<li className=""><Link to="/">Product</Link></li>
													
													<li className="" style={{color:'white',backgroundColor:'#5291D6', fontWeight:'bold',borderRadius:'0.5em'}}><Link to="/" style={{color:'white',fontWeight:'bold'}}>Daftar Sekarang</Link></li>
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
						
						<div className="ltn__utilize-menu">
							<ul>
								<li><Link to="/">Home</Link></li>
								<li><Link to="/about">About</Link></li>
								<li><Link to="/shop">Contact</Link></li>
								<li><Link to="/blog-grid">Product</Link></li>
							</ul>
						</div>
						
						<div className="ltn__social-media-2">
							<ul>
								<li><a href="https://www.facebook.com/ezlegal.id" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
								<li><a href="https://www.twitter.com/ezlegal.id" title="Twitter"><i className="fab fa-twitter" /></a></li>
								<li><a href="https://www.linkedin.com/company/ezlegal-id/" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
								<li><a href="https://www.instagram.com/ezlegal.id" title="Instagram"><i className="fab fa-instagram" /></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default NavbarV2