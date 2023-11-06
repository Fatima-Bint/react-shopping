import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth'; // Adjust the import path as necessary
import './LoginForm.css'; // Make sure the path to your CSS file is correct

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, requestOptions);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to log in');
      }

      login(data); 
      navigate('/dashboard'); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="text-center mb-4">Welcome to My App</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder="Enter your email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  placeholder="Enter your password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">Log In</button>
              </div>
              {error && <div className="alert alert-danger" role="alert">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;







// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/authContext.jsx'; 
// import './LoginForm.css' 

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     if (!email || !password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     };

//     try {
//       const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, requestOptions);
//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Failed to log in');
//       }

//       login(data); // Save the login token and user's info
//       navigate('/dashboard'); // Redirect to the dashboard or home page after login
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     // <div className="login-form">
//     //   <form onSubmit={handleLogin}>
//     //     <div>
//     //       <label htmlFor="email">Email</label>
//     //       <input
//     //         type="email"
//     //         id="email"
//     //         value={email}
//     //         onChange={(e) => setEmail(e.target.value)}
//     //         required
//     //       />
//     //     </div>
//     //     <div>
//     //       <label htmlFor="password">Password</label>
//     //       <input
//     //         type="password"
//     //         id="password"
//     //         value={password}
//     //         onChange={(e) => setPassword(e.target.value)}
//     //         required
//     //       />
//     //     </div>
//     //     <button type="submit">Log In</button>
//     //     {error && <div className="error">{error}</div>}
//     //   </form>
//     // </div>

//     <div className="container my-5">
//   <div className="row justify-content-center">
//     <div className="col-md-6">
//       <div className="card p-4">
//         <h2 className="text-center mb-4">Welcome to My App</h2>
//         <form>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input type="email" className="form-control" id="email" placeholder="Enter your email" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input type="password" className="form-control" id="password" placeholder="Enter your password" />
//           </div>
//           <div className="text-center">
//             <button type="submit" className="btn btn-primary">Log In</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>

//   );
// };

// export default LoginForm;
