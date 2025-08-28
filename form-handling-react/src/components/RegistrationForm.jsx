import React, { useState } from 'react';


function RegistrationForm() {
const [values, setValues] = useState({ username: '', email: '', password: '' });
const [errors, setErrors] = useState({});
const [success, setSuccess] = useState(null);
const MOCK_API_URL = 'https://jsonplaceholder.typicode.com/users'; // replace with your API


const handleChange = (e) => {
const { name, value } = e.target;
setValues((prev) => ({ ...prev, [name]: value }));
if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
};


const validate = () => {
const errs = {};
if (!values.username.trim()) errs.username = 'Username is required';
if (!values.email.trim()) errs.email = 'Email is required';
else if (!/^\S+@\S+\.\S+$/.test(values.email)) errs.email = 'Email is invalid';
if (!values.password.trim()) errs.password = 'Password is required';
else if (values.password.length < 6) errs.password = 'Password must be at least 6 characters';
return errs;
};


const handleSubmit = async (e) => {
e.preventDefault();
setSuccess(null);
const errs = validate();
if (Object.keys(errs).length) {
setErrors(errs);
return;
}


try {
const res = await fetch(MOCK_API_URL, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(values),
});
const data = await res.json();
setSuccess(`User registered successfully — id: ${data.id ?? 'n/a'}`);
setValues({ username: '', email: '', password: '' });
} catch (err) {
setErrors({ form: 'An error occurred while registering. Please try again.' });
}
};


return (
<form onSubmit={handleSubmit} noValidate style={{ display: 'grid', gap: 12 }}>
<div>
<label htmlFor="username">Username</label>
<input
id="username"
name="username"
value={values.username}
onChange={handleChange}
placeholder="Enter username"
/>
{errors.username && <div className="error" style={{ color: 'red' }}>{errors.username}</div>}
</div>


<div>
<label htmlFor="email">Email</label>
<input
id="email"
name="email"
value={values.email}
onChange={handleChange}
placeholder="you@example.com"
/>
{errors.email && <div className="error" style={{ color: 'red' }}>{errors.email}</div>}
</div>


<div>
<label htmlFor="password">Password</label>
<input
id="password"
name="password"
type="password"
value={values.password}
onChange={handleChange}
placeholder="Minimum 6 characters"
/>
{errors.password && <div className="error" style={{ color: 'red' }}>{errors.password}</div>}
</div>


{errors.form && <div style={{ color: 'red' }}>{errors.form}</div>}
{success && <div style={{ color: 'green' }}>{success}</div>}


<button type="submit">Register (Controlled)</button>
</form>
);
}


export default RegistrationForm;
