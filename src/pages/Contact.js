import React from 'react'
import BreadCrumps from '../components/BreadCrumps'

function Contact() {
  return (
    <>
       <BreadCrumps page="Contact us" title="Contact"/>


  <section class="nus-contact-11">
		<div class="form-41-mian py-5">
			<div class="container py-lg-4">
			  <div class="row align-form-map">
				<div class="col-lg-6 contact-left pr-lg-4">
					<div class="partners">
					  <div class="cont-details">
						<div class="title-content text-left">
							<h6 class="sub-title">Contact Us</h6>
							<h3 class="hny-title">Get In Touch</h3>
						</div>
						<p class="mt-3 mb-4 pr-lg-5">Hi there, We are available 24/7 by fax, e-mail or by phone. Drop us line so we can talk
						  futher about that.</p>
						<h6 class="mb-4"> For more info or inquiry about our products project, and pricing please feel free to get in touch with us.</h6>
					  </div>
					  <div class="hours">
						<h6 class="mt-4">Email:</h6>
						<p> <a href="mailto:info@automotive.com">
            info@automotive.com</a></p>
						<h6 class="mt-4">Address:</h6>
						<p>  12B Elm Street
                      Springfield, IL 62704
                      USA.</p>
						<h6 class="mt-4">Contact:</h6>
						<p class="margin-top"><a href="tel:+24 2546-33-111">++24 2546-33-111</a></p>
					  </div>
					</div>
				  </div>
				<div class="col-lg-6 form-inner-cont">
					<div class="title-content text-left">
						<h3 class="hny-title mb-lg-5 mb-4">Send Us A Message</h3>
					</div>
				  <form action="https://sendmail.nusayouts.com/submitForm" method="post" class="signin-form">
					<div class="form-input">
					  <input type="text" name="nusName" id="nusName" placeholder="Name" />
					</div>
					<div class="row con-two">
					<div class="col-lg-6 form-input">
					  <input type="email" name="nusSender" id="nusSender" placeholder="Email" required="" />
					</div>
					<div class="col-lg-6 form-input">
						<input type="text" name="nusSubect" placeholder="Subject" class="contact-input" />
					</div>
					</div>
					<div class="form-input">
					  <textarea placeholder="Message" name="nusMessage" id="nusMessage" required=""></textarea>
					</div>
					<div class="submit-button text-lg-right">
					   <button type="submit" class="btn btn-style">Submit</button>
				    </div>
				  </form>
				</div>
			  </div>
			</div>
		  </div>
		  <div class="map">
			<iframe
			  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001161.424489281!2d-78.01909140705047!3d42.72866436845163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1570786994395!5m2!1sen!2sin"
			  frameborder="0" allowfullscreen=""></iframe>
		  </div>
	  </section>
    </>
  )
}

export default Contact