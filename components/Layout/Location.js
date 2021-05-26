import React from 'react';
import Email from '../Icons/Email';
import Phone from '../Icons/Phone';
import Address from '../Icons/Address';

function Location() {
	return (
		<div className='card container col-xxl-8 px-4 py-5'>
			<div className='row'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.9818648460728!2d-76.69791308447542!3d44.47454447910178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2bf721d865781%3A0xade866c19d81079b!2sMuddy%20Waters%20Restaurant!5e0!3m2!1sen!2sca!4v1622037720448!5m2!1sen!2sca'
					height='450'
					style={{ border: '0' }}
					allowfullscreen=''
					loading='lazy'
					className='col'
				></iframe>
			</div>

			<div className='card-body'>
				<h1 className='card-title'>Contact Us</h1>
				<div className='col'>
					<p className='card-text'>
						<Phone /> (613) 374-5444
					</p>
					<p className='card-text'>
						<Email /> muddywatersverona@gmail.com
					</p>
					<p className='card-text'>
						<Address /> 6557 38 Hwy, Verona ON K0H 2W0
					</p>
				</div>
			</div>
		</div>
	);
}

export default Location;
