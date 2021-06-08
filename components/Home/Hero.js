import React from 'react';
import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram';
import Titles from '../Layout/Titles';

function Hero() {
	return (
		<div className='container-fluid'>
			<div className='row flex-lg-row-reverse align-items-center d-flex justify-content-center g-5 py-2 sm-py-5'>
				<div className='col-12 col-sm-12 col-lg-6 d-none d-lg-flex'>
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

				<div className='d-lg-none d-flex col-12 justify-content-center'>
					<img
						src='/main-picture.jpg'
						width='300px'
						height='auto'
						alt='Outside Restaurant'
					/>
				</div>
				<div className='col-lg-6 d-flex flex-column justify-content-start align-items-center pt-2 sm-pt-5 sm-mt-2'>
					<Titles title='Muddy Waters Restaurant' />
					<p className='lead'>
						Relaxed new restaurant in Verona! Locally run, warm service, great
						home-cooked food. Stop in today!
					</p>
					<div className='d-grid gap-2 d-md-flex justify-content-md-start'>
						<a
							href='#menu'
							type='button'
							className='btn btn-secondary btn-lg px-4 m-2'
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
			<div className='row align-items-center d-flex justify-content-center py-2 sm-py-5'>
				<div
					className='fb-page col-12 d-flex justify-content-center'
					data-href='https://www.facebook.com/muddywatersverona'
					data-tabs='timeline'
					data-width=''
					data-height=''
					data-small-header='true'
					data-adapt-container-width='true'
					data-hide-cover='true'
					data-show-facepile='true'
				>
					<blockquote
						cite='https://www.facebook.com/muddywatersverona'
						className='fb-xfbml-parse-ignore'
					>
						<a href='https://www.facebook.com/muddywatersverona'>
							Muddy Waters Restaurant
						</a>
					</blockquote>
				</div>
			</div>
		</div>
	);
}

export default Hero;
