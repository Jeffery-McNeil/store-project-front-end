import React, { useState } from "react";
import validator from 'validator'
import '../AllCss/CreditCardCheck.css'
  
const CreditCardCheck = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState ({
    firstName: "",
    lastName: "",
    address: "",
    creditCard: ""
  })

  function handleChange (event) {
    const name = event.target.name;
    let value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(formData)
  }
  
  function handleSubmit (event) {
    event.preventDefault();

    if (validator.isCreditCard(formData.creditCard)) {
      alert('Thank You for Shopping with us!')
      setErrorMessage("")
    } else {
      setErrorMessage('Enter valid CreditCard Number!')
    }
    
    setFormData({
      firstName: "",
      lastName: "",
      address: "",
      creditCard: ""
    })
  }

  return (
      <div>
        <h2>Enter Information</h2>
        <form onSubmit={handleSubmit} action="" method="get" className="credit-card-form">
            <div className="form-example">
              <input onChange={handleChange} type="text" 
              name="firstName" id="first-name" 
              value={formData.firstName} required
              placeholder="First Name"/>
            </div>
            <div className="form-example">
              <input onChange={handleChange} type="text" 
              name="lastName" id="last-name" 
              value={formData.lastName} required
              placeholder="Last Name"/>
            </div>
            <div className="form-example">
              <input onChange={handleChange} type="text" 
              name="creditCard" id="credit-card" 
              value={formData.creditCard} required
              placeholder="Credit Card"/>
            </div>
            <div className="form-example">
              <input type="submit" value="Submit"/>
            </div>
        </form>
        <span style={{ fontWeight: 'bold', color: 'red', }}>{errorMessage}</span>
      </div>
  );
}
  
export default CreditCardCheck;