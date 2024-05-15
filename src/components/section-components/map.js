import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Map extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="google-map mb-120">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.535929300671!2d106.67604570947364!3d-6.05820959304883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a05a7fac9d5b3%3A0xbcab5197635b6b8a!2sRukan%20Osaka!5e0!3m2!1sid!2sid!4v1715641132090!5m2!1sid!2sid" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
		</div>
        }
}

export default Map