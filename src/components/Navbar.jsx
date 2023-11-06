import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/useAuth'; 


const Navbar = () => {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">PaleVoice</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            {/* Other navigation links here */}
            {currentUser && (
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
            )}
          </ul>
          {currentUser ? (
            <button className="btn btn-outline-success" type="button" onClick={logout}>Logout</button>
          ) : (
            <Link className="btn btn-outline-success" to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from './context/authContext'; // Adjust the import path as necessary

// const Navbar = () => {
//   const { currentUser, logout } = useAuth();

//   return (
//     <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">PaleVoice</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarCollapse">
//           <ul className="navbar-nav me-auto mb-2 mb-md-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//             </li>
//             {/* Other navigation links here */}
//             {currentUser && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/profile">Profile</Link>
//               </li>
//             )}
//           </ul>
//           {currentUser ? (
//             <button className="btn btn-outline-success" onClick={logout}>Logout</button>
//           ) : (
//             <Link className="btn btn-outline-success" to="/login">Login</Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
