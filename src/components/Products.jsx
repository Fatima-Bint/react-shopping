import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const apiUrl = import.meta.env.VITE_REMOTE_API_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${apiUrl}/products`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [apiUrl]);

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div className=" d-flex justify-content-between align-items-center">
                  <p className="text-muted">${product.price}</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;


//---------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import '../styles/products.css'; 

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

  
//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`${import.meta.env.VITE_REMOTE_API_URL}/products`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log(data.map(product => typeof product.price));
//         setProducts(data);
//       } catch (error) {
//         setError('Failed to load products: ' + error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <div className="loader">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">{error}</div>;
//   }

//   return (
//     <div className="product-grid">
//       {products.map((product) => (
//         <div className="product-card" key={product.id}>
//           <img src={product.image} alt={product.name} className="product-image" />
//           <div className="product-info">
//             <h3 className="product-name">{product.name}</h3>
//             <p className="product-price">${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}</p>
//             <button className="product-add-btn">Add to Cart</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;

//--------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// // Make sure to import your CSS file if you have one

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const apiUrl = import.meta.env.VITE_REMOTE_API_URL;
//         const response = await fetch(`${apiUrl}/products`);
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const data = await response.json();
        
//         // Log the entire API response data to the console
//         console.log('API Response Data:', data);

//         // Now we can inspect the structure of the data in the browser console
//         setProducts(data);
//       } catch (e) {
//         console.error('Fetching products failed:', e);
//         setError('Failed to load products.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <div>Loading products...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       {products.map((product, index) => (
//         <div key={index}>
//           {/* Render your product details here */}
//           <div>Name: {product.name}</div>
//           <div>Price: {product.price}</div>
//           {/* Add more details based on the API structure */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;
