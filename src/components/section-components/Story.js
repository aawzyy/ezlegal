import React from 'react'
import "./Story.css"

const Story = () => {
    return (
        < >
            <div className='story-container' id='section3'>
                <div className='story-card'>
                    <div className='story-text'>
                        <h1>Dari <span style={{ backgroundColor: 'white', paddingInline: '1%', color: 'black' }}>PRO-PLAYER</span><br />menjadi pebisnis</h1>
                        <p style={{ fontSize: '1em', fontWeight: 'bold' }}>EZlegal hadir untuk memberikan solusi bagi para pengusaha muda seperti saya, yang ingin fokus pada pengembangan bisnis tanpa terhambat oleh birokrasi yang berbelit.<br />Dengan EZlegal, saya berharap dapat membantu lebih banyak inovator dan pengusaha milenial untuk mewujudkan mimpi mereka dengan lebih mudah dan cepat.</p>
                        <button className='button-cta-story'>Ikuti Jejak Saya</button>
                    </div>
                    <div className='story-img-c'>
                        <img src='assets/img/banner/used/proplayer.png' className='story-img'/>
                    </div>

                </div>

            </div>
            <div className='segitiga' >
                <div style={{
                    width: 0,
                    height: 0,
                    borderLeft: '100px solid transparent',
                    borderRight: '100px solid transparent',
                    borderTop: '80px solid #414141',
                }}></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '2em', paddingBottom: '5em' }}>
                <h3 style={{ fontWeight: 'normal' }}>Tunggu Apalagi?</h3>
                <h2>Konsultasi Sekarang!</h2>
                <button className='button-cta-story'>Tanya Aja Dulu!</button>
            </div>
        </>

    )
}

export default Story
