import React, { useState } from 'react'
import './Course.css'
import engineering_logo from './engineering.png'
import {Link} from 'react-router-dom';
import Footer from './Footer';
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

const Engineering = () => {
	const [name, setName] = useState([]);
	const [email, setEmail] = useState([]);
	const [number, setNumber] = useState([]);
	const [payment, setPayment] = useState(false);
	const [orderId, setOrderId] = useState('');
	const [paymentId, setPaymentId] = useState('');
	const [signature, setSignature] = useState('');
	const [isEng, setEng] = useState(false);
	

	// Engineering Function
    const Eng  =  async ()=> {
		setEng(true)
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('https://serverless-payment.herokuapp.com/razorpay/engineering', { method: 'POST' }).then((t) =>
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
				email: '',
				phone_number: ''
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open();
        setEng(false)
	};

	return (
		
	   <div className="container mt-2">
       <div className="row">
           <div className="col-md-12">
           
               <Link to="/" className="heading"><h4 className=" mt-4" style={{color:'#F9A826'}}>EDUPROV PAYMENT GATEWAY</h4></Link>
               <label className="text-dark mb-5">Engineering Course Registration Fee</label>
           </div>
           <div className="col-md-6 mt-5" id="heading">
               <h3 className="text-primary"> About Engineering Course</h3>
               <p className="text-justify mt-2" id="p-tag">
               We avail Career Counseling before choosing the Best Engineering Course and Admission guidance in Top Colleges and universities.
               </p>
                <h4 className=" mt-3" style={{color:'#F9A826'}}>Registration Fee : 5500 INR</h4>
                 <br/>
                <div>
                {isEng  ? <label style={{color:'#F9A826'}}>Please wait processing</label> : <label></label>}
                {payment  ? <label className="text-success">Payment is successfull </label> : <label></label>}

               
                </div>
                 <br/>
                <button className="btn btn-warning text-white mt-3" onClick={Eng }>Pay Now</button> 
           </div>
           <div className="col-md-6">
           <img  src={engineering_logo}  className="img-fluid" alt="Engineering course payment screen"/>
           </div>
       </div>
	   <Footer/>
       </div>
			 
			 
		 
		  
	)
}

export default Engineering

			
