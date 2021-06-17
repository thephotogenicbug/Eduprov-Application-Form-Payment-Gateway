import React, { useState } from 'react'
import './Course.css'
import undergraduate_logo from './undergraduate.png'


const loadScript = (src) => {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

const Undergraduate = () => {
	const [name, setName] = useState([]);
	const [email, setEmail] = useState([]);
	const [number, setNumber] = useState([]);
	const [payment, setPayment] = useState(false);
	const [orderId, setOrderId] = useState('');
	const [paymentId, setPaymentId] = useState('');
	const [signature, setSignature] = useState('');
	const [isOthers, setOthers] = useState(false);
	

	// Medical Function
	 const  Medical = async () => {
		setOthers(true)
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('https://serverless-payment.herokuapp.com/razorpay', { method: 'POST' }).then((t) =>
			t.json(),
			
		)


		const options = {
			key: __DEV__ ? process.env_REACT_APP_RAZOR_API : process.env_REACT_APP_RAZOR_API,
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Educational Institute',
			description: 'Thank You for visiting eduprov.com',
			image: 'https://serverless-payment.herokuapp.com/logo.svg',
			handler: function (response) {
				//alert(response.razorpay_payment_id)
				//alert(response.razorpay_order_id)
				//alert(response.razorpay_signature)
				setOrderId(response.razorpay_order_id)
				setPaymentId(response.razorpay_payment_id)
				setSignature(response.razorpay_signature)
				setPayment(true)

			},
			prefill: {
				name,
				email,
				phone_number: ''
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open();
        setOthers(false)
	};

	return (
		
	   <div className="container mt-2">
       <div className="row">
           <div className="col-md-12">
               <h4 className="mt-4" style={{color:'#45AF49'}}>EDUPROV PAYMENT GATEWAY</h4>
               <label className="text-dark mb-5">Undergraduate Course Registration Fee</label>
           </div>
           <div className="col-md-6 mt-5" id="heading">
               <h3 className="text-primary"> About Undergraduate Course</h3>
               <p className="text-justify mt-2" id="p-tag">
               We help you in getting Admission Guidance in Top Colleges for all undergraduate and Postgraduate Courses.
               </p>
                <h4 className=" mt-3" style={{color:'#45AF49'}}>Registration Fee : 2500 INR</h4>
                 <br/>
                <div>
                {isOthers  ? <label style={{color:'#45AF49'}}>Please wait processing</label> : <label></label>}
                {payment  ? <label className="text-success">Payment is successfull </label> : <label></label>}

              
                </div>
                 <br/>
                <button className="btn btn-success mt-3" onClick={Medical }>Pay Now</button> 
           </div>
           <div className="col-md-6">
           <img  src={undergraduate_logo}  className="img-fluid" alt="Undergraduate course payment screen"/>
           </div>
       </div>
       </div>
			 
			 
		 
		  
	)
}

export default Undergraduate

			
