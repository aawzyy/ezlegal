import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

class Footer_v1 extends Component {

	componentDidMount() {

		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);

		$('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

			$(window).scrollTop(0);

			setTimeout(function () {
				$(".quarter-overlay").fadeOut(300);
			}, 800);

		});


		$(document).on('click', '.theme-btn-1 ', function () {
			$('div').removeClass('modal-backdrop');
			$('div').removeClass('show');
			$('div').removeClass('fade');
			$('body').attr("style", "");
		});
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<footer className="ltn__footer-area " >
				<div className="footer-top-area  section-bg-2 plr--5" style={{backgroundColor:'white'}}>
					<div className="container-fluid">
						<div className="row" style={{display:'flex',justifyContent:'center'}}>
							<div className="col-xl-3 col-md-6 col-sm-6 col-12">
								<div className="footer-widget footer-about-widget">
									<div className="footer-logo">
										<div className="site-logo">
											<img src={publicUrl + "assets/img/logo-ezlegal.png"} alt="Logo" style={{height:'5em'}} />
										</div>
										<p style={{color:'#004391'}}>Dipercaya Perusahaan Maupun Individu</p>
									</div>
								</div>
							</div>
							
							<div className='col-xl-3 col-md-6 col-sm-6 col-12'>
								<div className='footer-widget footer-menu-widget clearfix'>
								
								<div className="footer-address">
									<ul>
										<li>
											<div className="footer-address-icon">
												<i className="icon-placeholder" style={{color:'#004391'}}/>
											</div>
											<div className="footer-address-info">
												<p style={{color:'#004391'}}>Jl. Peta Selatan Blok, Kalideres, Ruko City Square Business Park Blok F12, DKI Jakarta, DKI Jakarta 11840, ID</p>
											</div>
										</li>
										<li>
											<div className="footer-address-icon">
												<i className="icon-call" style={{color:'#004391'}}/>
											</div>
											<div className="footer-address-info">
												<p style={{color:'#004391'}}><a href="tel:+0123-456789">+62812-2334-6899</a></p>
											</div>
										</li>
										{/* <li>
											<div className="footer-address-icon">
												<i className="icon-mail" style={{color:'black'}}/>
											</div>
											<div className="footer-address-info">
												<p style={{color:'black'}}><a href="mailto:example@example.com">example@example.com</a></p>
											</div>
										</li> */}
									</ul>
								</div>
								</div>
								
							</div>
							


							<div className="col-xl-3 col-md-6 col-sm-12 col-12">
								<div className="footer-widget footer-newsletter-widget">
									<h4 className="footer-title" style={{color:'#004391'}}>Social Media</h4>
									<div >
										<Social />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
			</footer>
		)
	}
}


export default Footer_v1