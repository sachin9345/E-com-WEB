import {Fragment, useEffect} from 'react';
import './Products.css';
import { useDispatch, useSelector } from "react-redux";
import tshirt from '../Assets/shirt.png';
import { Link } from 'react-router-dom'; 
import { getProducts } from '../../actions/productActions';
import Loader from '../Loader/Loader';
import {toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 function Products () {
  const dispatch = useDispatch();
  const {products,loading,error} = useSelector((state) => state.productsState)

  useEffect(()=>{
    if(error){
      return toast.error(error)
    }
    
    dispatch(getProducts) 
    }, [dispatch,error])
  return (
    <Fragment>
      {loading ? <Loader/>:
    <Fragment>
    <div className="ourprod">
      <h3>Latest Arrivals</h3>

      </div>
    <div className="product-listing">
    
    {products  && products.map(product => (   
      
      <div  className="product-card" >
     <Link to={`/product/${product._id}`} key={product.id} style={{ textDecoration: 'none' , color: 'inherit'}}>
      <div className="product-image-container">
        <img src={tshirt} alt='' className="product-image"/>
        <span className="like-icon">❤️</span>
        </div>
       <div className="text-container"> {/* Container for text */}
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">₹{product.price}</p>
        </div>
        </Link>
      </div>
    ))}
  </div>
    
    </Fragment>
       }

  </Fragment>
    
  )
}

export default Products;
