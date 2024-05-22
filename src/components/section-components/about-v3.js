import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import './about-v3.css';

class AboutV3 extends Component {

	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image';
		return (
			<div>
				<div style={{ flexDirection: 'row', display: 'flex', gap: '3em', justifyContent: 'center', paddingTop: '5em', paddingBottom: '5em' }}>

					<img src={publicUrl + "assets/img/banner/employee-img.jpg"} alt="#" style={{ objectFit: 'cover', width: '20em', height: '100%', borderRadius: '0.5em' }} /> {/* Adjust image width if needed */}
					<div style={{ width: '50%' }}>
						<div style={{ display: 'flex' }}><h5 className="gradient-background">About Us</h5></div>
						<h1 style={{ color: '#5092D8' }}>Kenapa Harus Memilih<br />EzLegal?</h1>
						<h4 style={{ fontWeight: '300' }}>Kami memahami betapa pentingnya legalitas dalam menjalankan bisnis, dan kami berkomitmen untuk memberikan solusi yang cepat, akurat, dan sesuai dengan peraturan yang berlaku. Dengan pendekatan yang personal dan transparan, kami memastikan setiap proses berjalan lancar dan efisien, sehingga Anda dapat fokus mengembangkan bisnis Anda tanpa khawatir tentang aspek legal. Kepercayaan dan kepuasan klien adalah prioritas utama kami, dan kami siap menjadi mitra terpercaya Anda dalam membangun fondasi hukum yang kuat untuk perusahaan Anda.</h4>
					</div>


				</div>
				<div>
					<h1 style={{ textAlign: 'center' }}>BAGAIMANA EZLEGAL DAPAT<br />MEMBANTU BISNIS ANDA?</h1>

					<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '1em', paddingTop: '5em' }} >
						<div style={{width:'200px',display:'flex',alignItems:'center',flexDirection:'column'}}>
							<div style={{ backgroundColor: '#5092D8', width: '100px', height: '100px', borderRadius: '10em', alignContent: 'center', display: 'flex', justifyContent: 'center' }}>
								<img
									src={publicUrl + "assets/img/banner/icon-help-1.svg"}
									alt={imagealt}
									style={{ width: '50px' }}
								/>
							</div>
							<h3 style={{textAlign:'center',fontWeight:'500'}}>Pendirian Perusashaan</h3>
						</div>

						<div style={{width:'200px',display:'flex',alignItems:'center',flexDirection:'column'}}>
							<div style={{ backgroundColor: '#5092D8', width: '100px', height: '100px', borderRadius: '10em', alignContent: 'center', display: 'flex', justifyContent: 'center' }}>
								<img
									src={publicUrl + "assets/img/banner/icon-help-2.svg"}
									alt={imagealt}
									style={{ width: '50px' }}
								/>
							</div>
							<h3 style={{textAlign:'center',fontWeight:'500'}}>Pembuatan / Perubahan Dokumen</h3>
						</div>
						<div style={{width:'200px',display:'flex',alignItems:'center',flexDirection:'column'}}>
							<div style={{ backgroundColor: '#5092D8', width: '100px', height: '100px', borderRadius: '10em', alignContent: 'center', display: 'flex', justifyContent: 'center' }}>
								<img
									src={publicUrl + "assets/img/banner/icon-help-3.svg"}
									alt={imagealt}
									style={{ width: '50px' }}
								/>
							</div>
							<h3 style={{textAlign:'center',fontWeight:'500'}}>Penutupan Perusahaan</h3>
						</div>
						<div style={{width:'200px',display:'flex',alignItems:'center',flexDirection:'column'}}>
							<div style={{ backgroundColor: '#5092D8', width: '100px', height: '100px', borderRadius: '10em', alignContent: 'center', display: 'flex', justifyContent: 'center' }}>
								<img
									src={publicUrl + "assets/img/banner/icon-help-4.svg"}
									alt={imagealt}
									style={{ width: '50px' }}
								/>
							</div>
							<h3 style={{textAlign:'center',fontWeight:'500'}}>Penutupan Perusahaan</h3>
						</div>
						<div style={{width:'200px',display:'flex',alignItems:'center',flexDirection:'column'}}>
							<div style={{ backgroundColor: '#5092D8', width: '100px', height: '100px', borderRadius: '10em', alignContent: 'center', display: 'flex', justifyContent: 'center' }}>
								<img
									src={publicUrl + "assets/img/banner/icon-help-5.svg"}
									alt={imagealt}
									style={{ width: '50px' }}
								/>
							</div>
							<h3 style={{textAlign:'center',fontWeight:'500'}}>Perizinan Khusus</h3>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default AboutV3