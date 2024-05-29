import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import './about-v3.css';

class AboutV3 extends Component {

	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image';
		return (
			<div style={{ display: 'flex', alignItems: 'center',flexDirection:'column', background: 'radial-gradient(circle,#A5C7AC, #61AA7D' }} id='section2'>
				<div className='segitiga-about' >
					<div style={{
						width: 0,
						height: 0,
						borderLeft: '100px solid transparent',
						borderRight: '100px solid transparent',
						borderTop: '80px solid #fff',
					}}></div>
				</div>
				<div className='about-width' style={{ marginTop: '5em', marginBottom: '10em', border: '0.3em dashed  #fff ', borderRadius: '2em' }}>
					<div className='about-margin' style={{ backgroundColor: 'white', borderRadius: '2em' }}>

						<div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', paddingTop: '5em', paddingBottom: '5em' }}>
							<div style={{ display: 'flex' }}><h5 className="gradient-background">About Us</h5></div>
							<h1 style={{ color: '#5092D8' }} className='kenapa-memilih-ezlegal'>Kenapa Harus Memilih EZlegal?</h1>
							<div className="grid-container">
								<div className="grid-item" >
									<img src='assets/img/banner/used/1.png' style={{ objectFit: 'contain', height: '30vh' }} />
								</div>
								<div className="grid-item">
									<div>
										<h3>Konsultasi mendalam tentang kebutuhan milenial</h3>
										<p style={{ margin: 0 }}>Kami memahami bahwa milenial memiliki gaya kerja yang dinamis dan fleksibel. kami menawarkansolusi legal yang disesuaikan dengan kebutuhan dan gaya milenial.</p>
									</div>
								</div>
								<div className="grid-item" >
									<img src='assets/img/banner/used/2.png' style={{ objectFit: 'contain', height: '30vh' }} />
								</div>
								<div className="grid-item">
									<div>
										<h3>Layanan digital dan mudah diakses</h3>
										<p style={{ margin: 0 }}>Layanan kami tersedia secara online, memudahkan anda mengakses bantuan dan informasi terbaru kapan dan dimana saja.</p>
									</div>
								</div>
								<div className="grid-item" >
									<img src='assets/img/banner/used/3.png' style={{ objectFit: 'contain', height: '30vh' }} />
								</div>
								<div className="grid-item">
									<div>
										<h3>Proses cepat dan efisien</h3>
										<p style={{ margin: 0 }}>Mengutamakan efisiensi dengan proses pembuatan perusahaan yang cepat dan tidak berbelit-belit.</p>
									</div>
								</div>
								<div className="grid-item" >
									<img src='assets/img/banner/used/4.png' style={{ objectFit: 'contain', height: '30vh' }} />
								</div>
								<div className="grid-item">
									<div>
										<h3>Dukungan berkelanjutan</h3>
										<p style={{ margin: 0 }}>Tidak hanya membantu dalam tahap awal, kami juga menyediakan dukungan berkelanjutan untuk emmastikan bisnis anda berjalan semaksimal mungkin.</p>
									</div>
								</div>
								<div className="grid-item" >
									<img src='assets/img/banner/used/5.png' style={{ objectFit: 'contain', height: '30vh' }} />
								</div>
								<div className="grid-item">
									<div>
										<h3>Jaringan dan kolaborasi</h3>
										<p style={{ margin: 0 }}>Melalui jaringan luas kami, anda bisa mendapatkan akses ke berbagai peluang kolaborasi dan kemitraan yang dapat mendukung pertumbuhan bisnis anda.</p>
									</div>
								</div>
							</div>
						</div>
					</div>


				</div>
			</div>


		)
	}
}

export default AboutV3