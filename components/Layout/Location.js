import React from 'react';
import Button from 'react-bootstrap/Button';

function Location() {
	return (
		// <!--Section: Contact v.1-->
		<section className='section pb-5'>
			{/* <!--Section heading--> */}
			<h2 className='section-heading h1 pt-4'>Contact us</h2>
			{/* <!--Section description--> */}
			<p className='section-description pb-4'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
				amet numquam iure provident voluptate esse quasi, veritatis totam
				voluptas nostrum quisquam eum porro a pariatur accusamus veniam.
			</p>

			<div className='row'>
				{/* <!--Grid column--> */}
				<div className='col-lg-5 mb-4'>
					{/* <!--Form with header--> */}
					<div className='card'>
						<div className='card-body'>
							{/* <!--Header--> */}
							<div className='form-header blue accent-1'>
								<h3>
									<i className='fas fa-envelope'></i> Write to us:
								</h3>
							</div>

							<p>We'll write rarely, but with only the best content.</p>

							{/* <!--Body--> */}
							<div className='md-form'>
								<i className='fas fa-user prefix grey-text'></i>
								<input type='text' id='form-name' className='form-control' />
								<label htmlFor='form-name'>Your name</label>
							</div>

							<div className='md-form'>
								<i className='fas fa-envelope prefix grey-text'></i>
								<input type='text' id='form-email' className='form-control' />
								<label htmlFor='form-email'>Your email</label>
							</div>

							<div className='md-form'>
								<i className='fas fa-tag prefix grey-text'></i>
								<input type='text' id='form-Subject' className='form-control' />
								<label htmlFor='form-Subject'>Subject</label>
							</div>

							<div className='md-form'>
								<i className='fas fa-pencil-alt prefix grey-text'></i>
								<textarea
									id='form-text'
									className='form-control md-textarea'
									rows='3'
								></textarea>
								<label htmlFor='form-text'>Icon Prefix</label>
							</div>

							<div className='text-center mt-4'>
								<Button className='btn btn-light-blue'>Submit</Button>
							</div>
						</div>
					</div>
					{/* <!--Form with header--> */}
				</div>
				{/* <!--Grid column-->

  <!--Grid column--> */}
				<div className='col-lg-7'>
					<div></div>

					{/* <!--Buttons--> */}
					<div className='row text-center'>
						<div className='col-md-4'>
							<a className='btn-floating blue accent-1'>
								<i className='fas fa-map-marker-alt'></i>
							</a>
							<p>6557 Highway 38</p>
							<p>Verona, Ontario</p>
						</div>

						<div className='col-md-4'>
							<a className='btn-floating blue accent-1'>
								<i className='fas fa-phone'></i>
							</a>
							<p>(613) 374-5444</p>
							<p>Mon - Sun, 11AM - 7PM</p>
						</div>

						<div className='col-md-4'>
							<a className='btn-floating blue accent-1'>
								<i className='fas fa-envelope'></i>
							</a>
							<p>muddywatersverona@gmail.com</p>
						</div>
					</div>
				</div>
				{/* <!--Grid column--> */}
			</div>
		</section>
	);
}

export default Location;
