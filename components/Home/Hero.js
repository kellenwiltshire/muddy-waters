import React from 'react';

function Hero() {
	return (
		<div className='container col-xxl-8 px-4 py-5'>
			<div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
				<div className='col-10 col-sm-8 col-lg-6'>
					<img
						src='/main-picture.jpg'
						className='d-block mx-lg-auto img-fluid rounded'
						alt='Bootstrap Themes'
						width='700'
						height='500'
						loading='lazy'
					/>
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
