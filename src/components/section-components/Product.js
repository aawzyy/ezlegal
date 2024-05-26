import React,{useState} from 'react'
import "./Product.css"

const Product = () => {
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '2em', backgroundColor: '#EDF9FF' }}>
                <div style={{ display: 'flex' }}><h1 style={{ backgroundColor: '#66B28B', padding: '0.3em', paddingInline: '0.5em', borderRadius: '100vw', color: "white" }}>Our Product</h1></div>
                <div className='product-container'>
                    <div className='product-card'>
                        <img />
                        <h4 style={{ fontWeight: 'bold', color: '#66B28B' }}>PT Perorangan</h4>
                        <h4 style={{ textDecoration: 'line-through', color: 'red' }}>Rp 4.000.000</h4>
                        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                            <h4>Rp</h4>
                            <h2>2.5JT</h2>
                        </div>
                        <p>✓ Konsultasi Legal</p>
                        <p>✓ Pengecekan & Pemesanan Nama PT</p>
                        <p>✓ Akta Pendirian</p>
                        <p>✓ SKT Kemenkumham</p>
                        <p>✓ Akun OSS RBA</p>
                        <p>✓ NPWP</p>
                        <p>✓ NIB / Izin Usaha</p>
                        <p>✓ SKT KPP</p>
                        <p>✓ Pembukaan Rekening Giro BCA/BNI/BRI</p>
                        <button onClick={() => toggleIframe(1)} style={{ padding: '1em', borderRadius: '1em', backgroundColor: '#5092D8', color: 'white', fontWeight: 'bolder' }}>Konsultasi Sekarang</button>

                    </div>
                    <div className='product-card'>
                        <img />
                        <h4 style={{ fontWeight: 'bold', color: '#66B28B' }}>Pembuatan CV</h4>
                        <h4 style={{ textDecoration: 'line-through', color: 'red' }}>Rp 6.000.000</h4>
                        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                            <h4>Rp</h4>
                            <h2>3JT</h2>
                        </div>
                        <p>✓ Konsultasi Legal</p>
                        <p>✓ Pengecekan & Pemesanan Nama PT</p>
                        <p>✓ Akta Pendirian</p>
                        <p>✓ SKT Kemenkumham</p>
                        <p>✓ Akun OSS RBA</p>
                        <p>✓ NPWP</p>
                        <p>✓ NIB / Izin Usaha</p>
                        <p>✓ SKT KPP</p>
                        <p>✓ Pembukaan Rekening Giro BCA/BNI/BRI</p>
                        <button onClick={() => toggleIframe(3)} style={{ padding: '1em', borderRadius: '1em', backgroundColor: '#5092D8', color: 'white', fontWeight: 'bolder' }}>Konsultasi Sekarang</button>
                    </div>
                    <div className='product-card'>
                        <img />
                        <h4 style={{ fontWeight: 'bold', color: '#66B28B' }}>Pendirian PT</h4>
                        <h4 style={{ textDecoration: 'line-through', color: 'red' }}>Rp 14.000.000</h4>
                        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                            <h4>Rp</h4>
                            <h2>5JT</h2>
                        </div>
                        <p>✓ Konsultasi Legal</p>
                        <p>✓ Pengecekan & Pemesanan Nama PT</p>
                        <p>✓ Akta Pendirian</p>
                        <p>✓ SKT Kemenkumham</p>
                        <p>✓ Akun OSS RBA</p>
                        <p>✓ NPWP</p>
                        <p>✓ NIB / Izin Usaha</p>
                        <p>✓ SKT KPP</p>
                        <p>✓ Pembukaan Rekening Giro BCA/BNI/BRI</p>
                        <p>✓ Pengelolaan Keuangan & Perpajakan 1 Tahun</p>
                        <p>✓ Pembukaan Rekening Giro BCA/BNI/BRI</p>
                        <button onClick={() => toggleIframe(2)} style={{ padding: '1em', borderRadius: '1em', backgroundColor: '#5092D8', color: 'white', fontWeight: 'bolder' }}>Konsultasi Sekarang</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Product
