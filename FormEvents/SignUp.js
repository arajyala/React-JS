import React, { useState, useEffect } from 'react';
import './Forms.css';
const Signup = ({setisAuth}) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phno: '',
    dob: '',
    email: '',
    password: '',
    gender: '',
    city: 'select city',
    check: false
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      formData.firstname !== '' &&
      formData.lastname !== '' &&
      formData.phno.match(/^\d{10}$/) &&
      formData.dob !== '' &&
      formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
      formData.password.match(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,16}$/) &&
      formData.gender !== '' &&
      formData.city !== 'select city' &&
      formData.check
    );
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let message = '';
    

    // Construct the message
    message += 'First Name: ' + formData.firstname + '\n';
    message += 'Last Name: ' + formData.lastname + '\n';
    message += 'Phone Number: ' + formData.phno + '\n';
    message += 'Date of Birth: ' + formData.dob + '\n';
    message += 'Email: ' + formData.email + '\n';
    message += 'Password: ' + formData.password + '\n';
    message += 'Gender: ' + formData.gender + '\n';
    message += 'City: ' + formData.city + '\n';

    // Display the alert with the constructed message
    alert(message);
    setFormData({
              firstname: '',
              lastname: '',
              phno: '',
              dob: '',
              email: '',
              password: '',
              gender: '',
              city: 'select city',
              check: false
            });
            setisAuth(true)


  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  return (
    <div>
      <h1>SignUp Form</h1>
    <div className='container' id='container'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="firstname" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="lastname" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="phno" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phno" name="phno" value={formData.phno} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={formData.email} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className='form-group1'>
          <label>Gender:</label>
          <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
          <label className="form-check-label" htmlFor="male">Male</label>
          <input className="form-check-input" type="radio" name="gender" id="female" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
          <label className="form-check-label" htmlFor="female">Female</label>
          <input className="form-check-input" type="radio" name="gender" id="transgender" value="transgender" checked={formData.gender === 'transgender'} onChange={handleChange} />
          <label className="form-check-label" htmlFor="transgender">Transgender</label>
        </div>
        <div className='form-group'>
          <label>Select Your City</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="select city" disabled>Select City</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Nizamabad">Nizamabad</option>
            <option value="kamareddy">kamareddy</option>
            <option value="karimnagar">karimnagar</option>
            <option value="warangal">warangal</option>
            <option value="secendrabad">secendrabad</option>
          </select>
        </div>
        <div className='form-group1'>
          <input type="checkbox" className="form-check-input" id="check" name='check' checked={formData.check} onChange={handleChange} />
          <label className="form-check-label" htmlFor="check">Please Accept terms & conditions</label>
        </div>
        <button type="Submit" className="btn btn-primary">
          Signup
        </button>
        {/* {errormsg && <h1>{errormsg}</h1>} */}
      </form>
    </div>
    </div>
  );
}

export default Signup;

