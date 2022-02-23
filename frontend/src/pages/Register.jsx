import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';


function Register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData;

  const onChange = () => {

  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please Create an Account</p>
      </section>

      <section>
        <form>
          <div className="form-group">
            <input type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Please Enter Your Name"
              onChange={onChange} />
          </div>
        </form>
      </section>
    </>
  )
}

export default Register