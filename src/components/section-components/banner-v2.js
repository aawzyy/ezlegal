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
                        <div className='banner-bg' style={{ backgroundImage: `url("${publicUrl}assets/img/banner/used/landing.jpg")`}}>
                            <div className="ltn__slide-item-inner">
                                <div className="container  banner-text">
                                    <div className="row">
                                        <div className="col-lg-12 align-self-center">
                                            <div className="slide-item-info">
                                                <div className="slide-item-info-inner ltn__slide-animation" style={{ width: '50%' }}>
                                                    <h5
                                                        className="slide-title animated"
                                                        style={{ color: 'white', marginBottom: '0',fontSize:'2vw' }}
                                                    >
                                                        Paket Legalitas <span style={{ backgroundColor: 'white', paddingInline: '0.1em', color: '#5092D8' }}>BISNIS MILENIAL</span>
                                                    </h5>
                                                    <div className="slide-sub-title white-color animated" style={{ display: 'flex', gap: '2em', alignContent: 'center' }}>
                                                        <p
                                                            
                                                            style={{ color: 'white', fontSize: '2vw', marginBottom: '1em', textDecoration: 'line-through', textDecorationColor: 'red' }}
                                                        >
                                                            Rp 4.000.000
                                                        </p>
                                                        <h1 style={{ fontSize: '3vw', fontWeight: 'bolder', color: '#FFC452', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Rp 2,5 JT</h1>
                                                    </div>

                                                    <div className="btn-wrapper animated" style={{display:'flex',flexDirection:'row',}}>
                                                        <Link to="/" className="theme-btn-1 btn btn-effect-1 button" style={{fontSize:'70%',fontWeight:'bolder'}}>Urus Izin</Link>
                                                        <Link to="/" className="theme-btn-3 btn btn-effect-1 button" style={{fontSize:'70%',fontWeight:'bolder'}}>Lihat Layanan</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center',flexDirection:'column' }}>
                        <img
                            src="./assets/img/banner/used/judul.png"
                            alt={imagealt}
                            style={{ objectFit: 'cover', width: '40%', height: '100%', borderRadius: '0.5em' }}
                        />
                        <img
                            src="./assets/img/banner/used/banner.png"
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
