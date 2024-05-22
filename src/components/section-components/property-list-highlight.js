import React, { useState } from 'react';
import './property-list-highlight.css';

const CardSlider = () => {
    const [showIframe, setShowIframe] = useState(false);
    const [link, setLink] = useState("");

    const toggleIframe = (product) => {
        if (product === 1) {
            setLink("https://dashboard.ezkalasi.id/form-lead/EZL/9/be036eaf-c6d9-4e04-8481-d480b03ed4dc");
        } else if (product === 2) {
            setLink("https://dashboard.ezkalasi.id/form-lead/EZL/11/38f5d16f-fc4f-4549-b8c7-c853a8d09666");
        } else if (product === 3) {
            setLink("https://dashboard.ezkalasi.id/form-lead/EZL/10/54279a3f-bade-4b04-8f22-c1f7aacbf3c1");
        }
        setShowIframe(true);
    };

    const closeIframe = () => {
        setShowIframe(false);
    };

    return (
        <>
            {showIframe && (
                <div className="iframe-popup">
                    <button onClick={closeIframe} className="close-button">Close</button>
                    <iframe
                        src={link}
                        style={{ border: '0px #ffffff none' }}
                        name="myiFrame"
                        scrolling="no"
                        frameBorder="1"
                        marginHeight="0px"
                        marginWidth="0px"
                        height="400px"
                        width="600px"
                        allowFullScreen
                        title="EZKalasi Lead Form"
                    ></iframe>
                </div>
            )}
           
            <div className="base">
                <div style={{ backgroundColor: '#EDF9FF', height: "30em" }}>
                    <div style={{ display: 'flex', paddingTop: '2em', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#66B28B', padding: '1em', borderRadius: '100em' }}>
                            <h2 style={{ paddingLeft: '0', color: 'white' }}>Our Product</h2>
                        </div>
                    </div>

                    <div style={{ flexDirection: "row", display: 'flex', paddingTop: '2em', gap: '1em', justifyContent: 'center' }}>
                        <div>
                            <div className="card-produk">
                                <div className="card-item">
                                    <div className="card-b">
                                        <h4 style={{ color: '#000', paddingLeft: '0px' }}>Legalitas PT Perorangan</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <h5 style={{ fontWeight: 'lighter', color: '#000' }}>Start from </h5>
                                            <h2 style={{ fontWeight: 'bold', color: '#000', paddingLeft: '0px' }}>2,5jt</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="cta-a" onClick={() => toggleIframe(1)}>Daftar Sekarang</button>
                        </div>

                        <div>
                            <div className="card-produk">
                                <div className="card-item">
                                    <div className="card-b">
                                        <h4 style={{ color: '#000', paddingLeft: '0px' }}>Legalitas PT</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <h5 style={{ fontWeight: 'lighter', color: '#000' }}>Start from </h5>
                                            <h2 style={{ fontWeight: 'bold', color: '#000', paddingLeft: '0px' }}>4jt</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="cta-a" onClick={() => toggleIframe(2)}>Daftar Sekarang</button>
                        </div>

                        <div>
                            <div className="card-produk">
                                <div className="card-item">
                                    <div className="card-b">
                                        <h4 style={{ color: '#000', paddingLeft: '0px' }}>Legalitas CV</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <h5 style={{ fontWeight: 'lighter', color: '#000' }}>Start from </h5>
                                            <h2 style={{ fontWeight: 'bold', color: '#000', paddingLeft: '0px' }}>3jt</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="cta-a" onClick={() => toggleIframe(3)}>Daftar Sekarang</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardSlider;
