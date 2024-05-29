import React from 'react'
import "./Addon.css"

const Addon = () => {
    return (
        <div style={{ backgroundColor: '#EDF9FF', display: 'flex', justifyContent: 'center', paddingBottom: '3em', paddingTop: '3em' }} id='section5'>
            <div className='addon-width'>
                <h5 style={{ color: '#004391' }}>+ Service Tambahan</h5>
                <div className='addon-container'>
                    <div className='addon-card'>
                        <div>
                            <img src='assets/img/banner/used/addon-2.png' />
                        </div>
                        <div className='addon-textcontainer'>
                            <h4 style={{ marginBottom: 0 }}>EZPajak</h4>
                            <button className='button-cta-addon'><img src='assets/img/banner/used/icon-chat.png' style={{width:'3em'}}/></button>
                        </div>

                    </div>
                    <div className='addon-card'>
                        <div>
                            <img src='assets/img/banner/used/addon-1.png' />
                        </div>
                        <div className='addon-textcontainer'>
                            <h4 style={{ marginBottom: 0 }}>EZHaki</h4>
                            <button className='button-cta-addon'><img src='assets/img/banner/used/icon-chat.png' style={{width:'3em'}}/></button>
                        </div>

                    </div>
                    <div className='addon-card'>
                        <div>
                            <img src='assets/img/banner/used/addon-3.png' />
                        </div>
                        <div className='addon-textcontainer'>
                            <h4 style={{ marginBottom: 0 }}>EZAkuntan</h4>
                            <button className='button-cta-addon'><img src='assets/img/banner/used/icon-chat.png' style={{width:'3em'}}/></button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Addon
