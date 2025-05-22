// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const RegisterPage = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async () => {
//     try {
//       const res = await axios.post('Users/createUser', form);
//       alert("User registered! Now login.");
//       navigate('/');
//     } catch (err) {
//       console.error('Registration error:', err);
//       alert('Registration failed');
//     }
//   };

//   return (
//     <div className="p-4 max-w-sm mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Register</h2>
//       <input name="name" placeholder="Name" onChange={handleChange} className="border w-full p-2 mb-2" />
//       <input name="email" placeholder="Email" onChange={handleChange} className="border w-full p-2 mb-2" />
//       <input name="password" placeholder="Password" type="password" onChange={handleChange} className="border w-full p-2 mb-4" />
//       <button onClick={handleRegister} className="bg-blue-600 text-white w-full py-2 rounded">Register</button>
//     </div>
//   );
// };

// export default RegisterPage;
