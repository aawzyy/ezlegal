import React from 'react'
import "./Addon.css"

const Addon = () => {
    return (
        <div style={{ backgroundColor: '#eee',padding:'3em'}}>
            <h5 style={{color:'#004391'}}>+ Service Tambahan</h5>
            <div className='addon-container'>
                <div className='addon-card'>
                    <h4>EZPajak</h4>
                    <p>Urus perpajakan usaha anda dengan mudah dan tepat! Dapatkan layanan profesional dan solusi cepet untuk semua kebutuhan pajak anda.</p>
                    <button>Konsultasikan Sekarang</button>
                </div>
                <div className='addon-card'>
                    <h4>EZHaki</h4>
                    <p>Amankankarya anda dengan mudah! Percayakan pengurusan hak cipta kepada kami, dan lindungi kreativitas anda dari sekarang!</p>
                    <button>Konsultasikan Sekarang</button>
                </div>
                <div className='addon-card'>
                    <h4>EZAkuntan</h4>
                    <p>Optimalkan keuangan bisnis anda dengan jasa akuntan profesional kami! Dapatkan laporan akurat dan solulsi tepat waktu untuk pertumbuhan perusahaan anda.</p>
                    <button>Konsultasikan Sekarang</button>
                </div>
            </div>
        </div>
    )
}

export default Addon
