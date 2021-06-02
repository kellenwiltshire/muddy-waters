import React from 'react';

function Hero() {
	return (
		<div className='container col-xxl-8 px-4 py-5 h-25'>
			<div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
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
									class='d-block w-100'
									alt='Outside Restaurant'
								/>
							</div>
							<div className='carousel-item'>
								<img
									src='/outdoor.jpg'
									class='d-block w-100'
									alt='Outdoor Dining'
								/>
							</div>
							<div className='carousel-item'>
								<img src='/wraps.jpg' class='d-block w-100' alt='Wraps' />
							</div>
							<div className='carousel-item'>
								<img src='/salad.jpg' class='d-block w-100' alt='Salad' />
							</div>
						</div>
					</div>
				</div>
				<div className='col-lg-6'>
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
				</div>
			</div>
		</div>
	);
}

export default Hero;
