import React from 'react'
import "./Story.css"

const Story = () => {
    return (
        <>
            <div className='story-container'>

                <div className='story-text'>
                    <h1>Dari <span style={{ backgroundColor: 'white', paddingInline: '1%', color: 'black' }}>PRO-PLAYER</span><br />menjadi pebisnis</h1>
                    <p>EzLegal hadir untuk memberikan solusi bagi para pengusaha muda seperti saya, yang ingin fokus pada pengembangan bisnis tanpa terhambat oleh birokrasi yang berbelit.<br />Dengan EzLegal, saya berharap dapat membantu lebih banyak inovator dan pengusaha milenial untuk mewujudkan mimpi mereka dengan lebih mudah dan cepat.</p>
                </div>
                <img src='assets/img/banner/used/proplayer.png' className='story-img' />
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'2em',paddingBottom:'5em'}}>
                <h3 style={{fontWeight:'normal'}}>Tunggu Apalagi?</h3>
                <h2>Konsultasi Sekarang!</h2>
                <button style={{backgroundColor:'#5092D8', color:'white'}}>Tanya Aja Dulu!</button>
            </div>
        </>

    )
}

export default Story
