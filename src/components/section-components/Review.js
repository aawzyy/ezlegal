import React from 'react'
import "./Review.css"
const Review = () => {
    return (
        <div className='review-container'>
            <div className='review-textcontainer' >
                <div style={{ display: 'flex' }}><h5 className="gradient-background-review">About Us</h5></div>
                <h1>Kata Mereka Tentang Kami</h1>
            </div>
            <div className='review-cardcontainer' >
                <div className='review-card'>
                    <img src='assets/img/banner/used/profile-1.jpg' style={{ height: '5em', width: '5em', objectFit: 'cover', borderRadius: '100vw',marginBottom:'1em'}} />
                    <h4 style={{marginBottom:0}}>Andang K</h4>
                    <p style={{marginBottom:0}}>Urusan PT, Pajak, dlsb gampang banget diurus sampe jadi</p>
                </div>
                <div className='review-card'>
                    <img src='assets/img/banner/used/profile-3.jpg' style={{ height: '5em', width: '5em', objectFit: 'cover', borderRadius: '100vw',marginBottom:'1em' }} />
                    <h4 style={{marginBottom:0}}>Regina alsyid</h4>
                    <p style={{marginBottom:0}}>Paket lengkap deh disini, asistennya juga ramah dijelasin dan dibantu sampai proses selesai.</p>
                </div>
                <div className='review-card'>
                    <img src='assets/img/banner/used/profile-2.jpg' style={{ height: '5em', width: '5em', objectFit: 'cover', borderRadius: '100vw',marginBottom:'1em' }} />
                    <h4 style={{marginBottom:0}}>Michael</h4>
                    <p style={{marginBottom:0}}>Semua urusan jadi gampang, prosesnya profesional dan cepat.</p>
                </div>
            </div>
        </div>
    )
}

export default Review
