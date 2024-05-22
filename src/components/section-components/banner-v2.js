import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './banner-v2.css';

class BannerV2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showIframe: false,
        };
    }

    toggleIframe = () => {
        this.setState({ showIframe: !this.state.showIframe });
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';

        return (
            <div className="ltn__slider-area ltn__slider-11 ltn__slider-11-slide-item-count-show ltn__slider-11-pagination-count-show section-bg-1">
               
              
                <div
                    className="ltn__slider-11-inner"
                    style={{ backgroundColor: "#fff" }}
                >
                    <div className="ltn__slider-11-active">
                        <div
                            style={{
                                backgroundImage: `url("${publicUrl}assets/img/banner/Landing Page.jpg")`,
                                height: '45em',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPositionX:'right'
                            }}
                        >
                            <div className="ltn__slide-item-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 align-self-center">
                                            <div className="slide-item-info">
                                                <div className="slide-item-info-inner ltn__slide-animation" style={{ width: '50%' }}>
                                                    <h5
                                                        className="slide-title animated"
                                                        style={{ color: 'white', marginBottom: '0' }}
                                                    >
                                                        Legalitas Terjamin, Bisnis Mapan <br />
                                                        Solusi Mudah Pendirian Bisnis Anda!
                                                    </h5>
                                                    <p
                                                        className="slide-sub-title white-color animated"
                                                        style={{ color: 'white', fontSize: '20px', marginBottom: '1em' }}
                                                    >
                                                        Partner anda dalam mempermudah urusan legalitas pendirian bisnis anda.
                                                    </p>
                                                    <div className="btn-wrapper animated">
                                                        <Link to="/about" className="theme-btn-1 btn btn-effect-1">Urus Izin</Link>
                                                        <Link to="/about" className="theme-btn-3 btn btn-effect-1">Lihat Layanan</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '2em' }}>
                        <img
                            src="assets/img/banner/BANNER.JPG"
                            alt={imagealt}
                            style={{ objectFit: 'cover', width: '85%', height: '100%', borderRadius: '0.5em' }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerV2;
