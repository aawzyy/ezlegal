import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV2 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <div className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1">
			<div className="ltn__slider-11-inner">
				<div className="ltn__slider-11-active">
					{/* slide-item */}
					<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11" style={{ backgroundImage: `url("assets/img/banner/banner-background-d.jpg")`, backgroundSize: 'cover',backgroundPosition:'1m3' }}>
						<div style={{ position: 'absolute'}}>
							<img src={publicUrl + "assets/img/banner/b.png"} alt="#" style={{ width: '100%', animation: 'slideInRight 1s ease-in-out',objectFit:'cover'}} />

						</div>
						<div className="ltn__slide-item-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12 align-self-center">
										<div className="slide-item-info">
											<div className="slide-item-info-inner ltn__slide-animation">

											<h6 className="slide-sub-title white-color--- animated" style={{ color: 'white' }}><span><i className="fas fa-home" /></span> Real Estate Agency</h6>
												<h1 className="slide-title animated " style={{ color: 'white' }}>Asisten Personal Untuk Mewujudkan <br />Rumah Impian Anda.</h1>
												
												<div className="btn-wrapper animated">
													<Link to="/about" className="theme-btn-1 btn btn-effect-1">Konsultasi Sekarang</Link>
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	}
}

export default BannerV2