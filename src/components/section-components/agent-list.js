// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import './agent-list.css';

// class FeaturesV1 extends Component {

// 	render() {

// 		let publicUrl = process.env.PUBLIC_URL + '/'

// 		return <div style={{ height: '500px' }}>
// 			<h1>MEET OUR AGENT</h1>
// 			<div style={{ backgroundImage: `url("assets/img/banner/agent-background.jpg")`, backgroundSize: 'cover', height: "300px", flexDirection: "row", display: 'flex' }}>


// 				<img src={publicUrl + "assets/img/banner/4.jpg"} alt="#" style={{ width: '10%', height: '400px', objectFit: 'cover' }} />
// 				<div>
// 					<h1 style={{ color: '#FEE9C7', fontFamily: 'custom' }}>Marissa Leiah</h1>



// 					<div style={{display:'flex'}}>
// 						<h3 style={{ display: 'flex', textAlign: 'center', padding: '0.5em', color: '#303E47', backgroundColor: '#FEE9C7' }}>Sekarang!</h3>
// 					</div>




// 				</div>

// 			</div>
// 		</div>
// 	}
// }

// export default FeaturesV1

import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import './agent-list.css';


const cards = [
	{
		title: 'Marissa Leiah',
		subtitle: 'Tangerang Selatan 1',
		image: 'https://via.placeholder.com/300',
		cta: 'Learn More'
	},
	{
		title: 'Marissa Leiah 2',
		subtitle: 'Tangerang Selatan 2',
		image: 'https://via.placeholder.com/300',
		cta: 'Learn More'
	},
	{
		title: 'Marissa Leiah 3',
		subtitle: 'Tangerang Selatan 3',
		image: 'https://via.placeholder.com/300',
		cta: 'Learn More'
	}, {
		title: 'Marissa Leiah 4',
		subtitle: 'Tangerang Selatan 2',
		image: 'https://via.placeholder.com/300',
		cta: 'Learn More'
	},
];

const CardSlider = () => {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState('next');

	const transitions = useTransition(index, {
		from: {
			opacity: 0,
			transform: direction === 'next' ? 'translate3d(100%,0,0)' : 'translate3d(-100%,0,0)'
		},
		enter: {
			opacity: 1,
			transform: 'translate3d(0%,0,0)'
		},
		leave: {
			opacity: 0,
			transform: direction === 'next' ? 'translate3d(-50%,0,0)' : 'translate3d(50%,0,0)'
		},
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setDirection('next');
			setIndex((prevIndex) => (prevIndex + 1) % cards.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const handlePrev = () => {
		setDirection('prev');
		setIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
	};

	const handleNext = () => {
		setDirection('next');
		setIndex((prevIndex) => (prevIndex + 1) % cards.length);
	};

	return (
		<div className="base">
			<h1>Meet Our Agent</h1>
			<div style={{ backgroundImage: `url("assets/img/banner/agent-background.jpg")`, backgroundSize: 'cover', height: "300px", flexDirection: "row", display: 'flex' }}>
				<div className="card-slider">
					<button onClick={handlePrev} className="nav-button prev">‹</button>
					<div className="card-container">
						{transitions((style, i) => (
							<animated.div className="card" style={style}>
								<div className="card-item">
									<div className="card-a">
										<img src={cards[i].image} alt={cards[i].title} />
									</div>
									<div className="card-b">
										<h2>{cards[i].title}</h2>
										
										<div style={{ display: 'flex', flexDirection: 'row', gap: '1em' }}>
											<FontAwesomeIcon icon={faLocationDot} style={{  fontSize: '24px' }} />
											<h5 style={{ fontWeight: 'lighter' }}>{cards[i].subtitle}</h5>
										</div>

										<button className="cta-button">{cards[i].cta}</button>
									</div>
								</div>


							</animated.div>
						))}
					</div>
					<button onClick={handleNext} className="nav-button next">›</button>
				</div>
			</div>
			
		</div>


	);
};

export default CardSlider;
