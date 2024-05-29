import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './banner-v2.css';
import { isMobile } from 'react-device-detect';

class BannerV2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showIframe: false,
            bannerSrc: './assets/img/banner/used/banner.png'
        };
    }

    toggleIframe = () => {
        this.setState({ showIframe: !this.state.showIframe });
    }

    updateBannerSrc = () => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const bannerSrc = isMobile ? './assets/img/banner/used/banner-m.png' : './assets/img/banner/used/banner.png';
        this.setState({ bannerSrc });
    }

    componentDidMount() {
        this.updateBannerSrc();
        window.addEventListener('resize', this.updateBannerSrc);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateBannerSrc);
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';
        return (
            <div className="ltn__slider-area ltn__slider-11 ltn__slider-11-slide-item-count-show ltn__slider-11-pagination-count-show section-bg-1" id='section1'>
                <div className="ltn__slider-11-inner" style={{ backgroundColor: "#fff" }}>
                    <div className="ltn__slider-11-active">
                        <div className='banner-bg' style={{ backgroundImage: `url("${publicUrl}assets/img/banner/used/landing.jpg")` }}>
                            <div className="ltn__slide-item-inner">
                                <div className="container banner-text">
                                    <div className="row">
                                        <div className="col-lg-12 align-self-center">
                                            <div className="slide-item-info">
                                                <div className="slide-item-info-inner ltn__slide-animation" style={{ width: '50%', paddingTop: '1em' }}>
                                                    <div className='banner-textgroup slide-item-info-inner' >
                                                        <div style={{ display: 'flex' }}>
                                                            <h5 className='text-legal' style={{ backgroundColor: 'white', paddingInline: '0.1em', color: '#004391', fontWeight: 'bolder', }}>Jadi Legal, Lebih Keren!</h5>
                                                        </div>
                                                        <h4 style={{ color: 'white' }}>Konsultasikan pembuatan usaha<br />resmi yang terlindungi hukum</h4>
                                                    </div>
                                                    <div className="slide-sub-title white-color animated banner-textgroup" >
                                                        <p className='text-legal' style={{ color: 'white', marginBottom: '0', textDecoration: 'line-through', textDecorationColor: 'red', textDecorationThickness: '0.1em' }}>
                                                            Rp 4.000.000
                                                        </p>
                                                        <h1 className='text-legal' style={{ fontWeight: 'bolder', color: '#FFC452', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                                                            Rp 2.5 JT
                                                        </h1>
                                                    </div>
                                                    <div className="btn-wrapper animated" style={{ display: 'flex', flexDirection: 'row' }}>
                                                        <Link
                                                            activeClass="active"
                                                            to="section4"
                                                            spy={true}
                                                            smooth={true}
                                                            offset={-70}
                                                            duration={500}
                                                            className="theme-btn-1 btn btn-effect-1 tombol"
                                                            style={{ fontWeight: 'bolder' }}>Urus Izin</Link>
                                                        <Link
                                                            activeClass="active"
                                                            to="section4"
                                                            spy={true}
                                                            smooth={true}
                                                            offset={-70}
                                                            duration={500}
                                                            className="theme-btn-3 btn btn-effect-1 tombol"
                                                            style={{ fontWeight: 'bolder' }}>Lihat Layanan</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mobile-banner-a'>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img className='mobile-banner-a' src='assets/img/banner/used/landing-m.png' />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <div style={{ background: 'radial-gradient(circle at bottom right, #5092D8, #004391)', width: '90%', padding: '2em', paddingTop: 0, marginTop: 0, borderRadius: '0em 0em 1em 1em' }}>
                                <div className='banner-textgroup' >

                                    <div style={{ display: 'flex', paddingTop: '1em' }}>
                                        <h5 className='text-legal' style={{ backgroundColor: 'white', paddingInline: '0.1em', color: '#5092D8', fontWeight: 'bolder', }}>Jadi Legal, Lebih Keren!</h5>
                                    </div>
                                    <h6 className="slide-title animated text-legal" style={{ color: 'white', marginBottom: '0', }}>
                                        Konsultasikan pembuatan usaha<br />resmi yang terlindungi hukum
                                    </h6>
                                </div>
                                <div className="slide-sub-title white-color animated banner-textgroup" >
                                    <p className='text-legal' style={{ color: 'white', marginBottom: '0', textDecoration: 'line-through', textDecorationColor: 'red' }}>
                                        Rp 4.000.000
                                    </p>
                                    <h1 className='text-legal' style={{ fontWeight: 'bolder', color: '#FFC452', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                                        Rp 2,5 JT
                                    </h1>
                                </div>
                                <div className="btn-wrapper animated" style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Link to="/" className="theme-btn-1 btn btn-effect-1 button tombol" style={{ fontWeight: 'bolder' }}>Urus Izin</Link>
                                    <Link to="/" className="theme-btn-3 btn btn-effect-1 tombol" style={{ fontWeight: 'bolder' }}>Lihat Layanan</Link>
                                </div>
                            </div>
                            <div className='segitiga-banner' >
                                <div style={{
                                    width: 0,
                                    height: 0,
                                    borderLeft: '50px solid transparent',
                                    borderRight: '50px solid transparent',
                                    borderTop: '30px solid #2D6FB9',
                                }}></div>
                            </div>
                        </div>

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingBottom: '5em' }}>
                        <img
                            src="./assets/img/banner/used/judul.png"
                            alt={imagealt}
                            className='judul-satset'

                        />
                        <img
                            src={this.state.bannerSrc}
                            alt={imagealt}
                            className='isi-sateset'

                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerV2;
