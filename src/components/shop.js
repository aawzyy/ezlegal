import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import ShogGrid from './shop-components/shop-right-sidebar';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const Shop_V1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Property Listing" />
        <div style={{textAlign:'center',paddingBottom:'10vh'}}><h1>Cooming Soon!</h1></div>
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Shop_V1

