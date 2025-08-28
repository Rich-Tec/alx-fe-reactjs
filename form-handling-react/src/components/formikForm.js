import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const MOCK_API_URL = 'https://jsonplaceholder.typicode.com/users'; // replace with your API


const validationSchema = Yup.object({
username: Yup.string().required('Username is required'),
email: Yup.string().email('Invalid email address').required('Email is required'),
password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});


function FormikForm() {
return (
<Formik
initialValues={{ username: '', email: '', password: '' }}
validationSchema={validationSchema}
onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
setStatus(null);
try {
const res = await fetch(MOCK_API_URL, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(values),
});
const data = await res.json();
setStatus({ success: `Registered successfully — id: ${data.id ?? 'n/a'}` });
resetForm();
} catch (err) {
setStatus({ error: 'Server error — please try again.' });
} finally {
setSubmitting(false);
}
}}
>
{({ isSubmitting, status }) => (
<Form noValidate style={{ display: 'grid', gap: 12 }}>
<div>
<label htmlFor="f_username">Username</label>
<Field id="f_username" name="username" placeholder="Enter username" />
<ErrorMessage name="username" component="div" style={{ color: 'red' }} />
</div>


<div>
<label htmlFor="f_email">Email</label>
<Field id="f_email" name="email" placeholder="you@example.com" />
<ErrorMessage name="email" component="div" style={{ color: 'red' }} />
</div>


<div>
<label htmlFor="f_password">Password</label>
<Field id="f_password" name="password" type="password" placeholder="Minimum 6 characters" />
<ErrorMessage name="password" component="div" style={{ color: 'red' }} />
</div>


<div>
<button type="submit" disabled={isSubmitting}>
{isSubmitting ? 'Submitting...' : 'Register (Formik)'}
</button>
</div>


{status && status.error && <div style={{ color: 'red' }}>{status.error}</div>}
{status && status.success && <div style={{ color: 'green' }}>{status.success}</div>}
</Form>
)}
</Formik>
);
}


export default FormikForm;
