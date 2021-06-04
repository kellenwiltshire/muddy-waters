import React from 'react';
import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram';

function Hero() {
	return (
		<div className='container col-xxl-8'>
			<div className='row flex-lg-row-reverse align-items-start g-5 py-5'>
				<div className='col-10 col-sm-8 col-lg-6'>
					<div
						id='carouselExampleSlidesOnly'
						className='carousel slide'
						data-ride='carousel'
					>
						<div className='carousel-inner'>
							<div className='carousel-item active'>
								<img
									src='/main-picture.jpg'
									className='d-block'
									width='auto'
									height='500px'
									alt='Outside Restaurant'
								/>
							</div>
							<div className='carousel-item'>
								<img
									src='/outdoor.jpg'
									width='auto'
									height='500px'
									className='d-block'
									alt='Outdoor Dining'
								/>
							</div>
							<div className='carousel-item'>
								<img
									src='/wraps.jpg'
									width='auto'
									height='500px'
									className='d-block'
									alt='Wraps'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='col-lg-6 d-flex flex-column justify-content-start align-items-center pt-5 mt-5'>
					<h1 className='display-5 fw-bold lh-1 mb-3'>
						Muddy Waters Restaurant
					</h1>
					<p className='lead'>
						Relaxed new restaurant in Verona! Locally run, warm service, great
						home-cooked food. Stop in today!
					</p>
					<div className='d-grid gap-2 d-md-flex justify-content-md-start'>
						<a
							href='#menu'
							type='button'
							className='btn btn-primary btn-lg px-4 m-2'
						>
							Menu
						</a>
						<a
							href='#location'
							type='button'
							className='btn btn-outline-secondary btn-lg px-4 m-2'
						>
							Contact
						</a>
					</div>
					<p className='lead'>
						Check us out on Social Media for our Daily Specials!
					</p>
					<div className='d-grid gap-2 d-md-flex justify-content-md-start'>
						<a
							href='https://www.facebook.com/muddywatersverona/'
							type='button'
							className='btn px-4 m-2'
						>
							<Facebook />
						</a>
						<a
							href='https://www.instagram.com/muddywaters_verona/'
							type='button'
							className='btn px-4 m-2'
						>
							<Instagram />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
