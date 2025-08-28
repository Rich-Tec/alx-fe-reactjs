import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';


export default function App() {
const [useFormik, setUseFormik] = useState(false);


return (
<div style={{ maxWidth: 760, margin: '40px auto', fontFamily: 'system-ui, sans-serif' }}>
<h1>Registration demo — Controlled components vs Formik</h1>


<label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
<input type="checkbox" checked={useFormik} onChange={() => setUseFormik((p) => !p)} />
<span>Use Formik</span>
</label>


<div style={{ padding: 16, border: '1px solid #eee', borderRadius: 8 }}>
{useFormik ? <FormikForm /> : <RegistrationForm />}
</div>


<p style={{ marginTop: 18, color: '#666' }}>
Notes: Replace MOCK_API_URL in each component with your real registration endpoint. Formik uses Yup for
schema-based validation (we installed it earlier).
</p>
</div>
);
}
