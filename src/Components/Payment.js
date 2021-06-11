import React, { useState } from 'react'



function loadScript(src) {
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

function Payment() {
	const [name, setName] = useState([]);
	const [payment, setPayment] = useState(false);
	const [orderId, setOrderId] = useState('');
	const [paymentId, setPaymentId] = useState('');
	const [signature, setSignature] = useState('');

	// Other Course Function
	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('https://serverless-payment.herokuapp.com/razorpay', { method: 'POST' }).then((t) =>
			t.json()
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
				email: '',
				phone_number: ''
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	};
	// Medical Function
	async function Medical() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('https://serverless-payment.herokuapp.com/razorpay/medical', { method: 'POST' }).then((t) =>
			t.json()
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
				email: '',
				phone_number: ''
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	};

	// Eng Function
	async function Eng() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('https://serverless-payment.herokuapp.com/razorpay/engineering', { method: 'POST' }).then((t) =>
			t.json()
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
				email: '',
				phone_number: ''
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	};


	return (
		
		<div className="bg-primary" id="Banner">
			
           <div className="row" >
			   <h5></h5>
			   <div className="col-md-6" id="order">
			   <p>Order ID: <br/>{orderId}</p>
			   </div>
			   <div className="col-md-6" id="order">
			   <p>Payment ID:<br/> {paymentId}</p>
			   </div>
			   <div className="col-md-12" id="order">
			   <p>Signature: <br/>{signature}</p>
			   </div>
		   </div>
	      <div className="container">
		
		 <div className="" id="Cards">
        
        </div>
			<div className="row ">
			<div className="col-md-4">
					<div className="card border-success m-2">
					<div className="card-header">
					Other Course
					</div>
						<div className="card-body ">
						 
					

						 <button className="btn btn-primary mt-5" onClick={displayRazorpay}>Rs 2500</button>
						</div>
						
					</div>
				</div>
				<div className="col-md-4">
				<div className="card border-danger m-2">
					<div className="card-header">
					Engineering Course
					</div>
						<div className="card-body ">
                          
						<button className="btn btn-primary mt-5" onClick={Eng}>Rs 5500</button>
						</div>
						
					</div>
					
				</div>
				<div className="col-md-4 ">
				<div className="card border-info m-2">
				<div className="card-header">
					 Medical Course
					</div>
						<div className="card-body">

                       
						<button className="btn btn-primary mt-5" onClick={Medical}>Rs 7500</button>
						</div>
					</div>
				</div>
			</div>	 
			 
		 
		  </div>
		  <hr/>
		</div>
	)
}

export default Payment

//
//			
//			