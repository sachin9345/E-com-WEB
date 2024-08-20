import React, { Fragment, useEffect, useState } from 'react';
import './Proddetails.css';
import { useDispatch ,useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../actions/productActions';
import Loader from '../Loader/Loader'
import { addCartItem } from '../../actions/CartActions';
import Slider from 'react-slick';
import carts from "../Assets/carts.png";
import Footer from '../Footer/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample images for the gallery
const images = [
  { id: 'front', url: '/shirt.png', alt: 'Front View' },
  { id: 'side', url: '/allen.jpg', alt: 'Side View' },
  { id: 'back', url: '/shirt.png', alt: 'Back View' },
  { id: 'back', url: '/shirt.png', alt: 'Back View' },
];

function Proddetails() {
  
  const [selectedImage, setSelectedImage] = useState(images[0].url);
  const [selectedSize, setSelectedSize] = useState('S'); // Default size 'S'


  const {loading,product} = useSelector((state)=>state.productState);
  const dispatch = useDispatch();
   const { id } = useParams()
   const [quantity, setQuantity] = useState(1);

   const increaseQty = () => {
       const count = document.querySelector('.count')
       if(product.stock === 0 ||  count.valueAsNumber >= product.stock) return;
       const qty = count.valueAsNumber + 1;
       setQuantity(qty);
   }
   const decreaseQty = () => {
       const count = document.querySelector('.count')
       if(count.valueAsNumber === 1 ) return;
       const qty = count.valueAsNumber - 1;
       setQuantity(qty);
   }
  
  useEffect(()=>{
     dispatch(getProduct(id))
  },[dispatch,id])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
return (
    <Fragment>
      {loading ? <Loader /> :
        <Fragment>
          <div className="product-view">
            <div className="image-gallery">
              {images.map((image) => (
                <img
                  key={image.id}
                  src={image.url}
                  alt={image.alt}
                  onClick={() => setSelectedImage(image.url)}
                  className="thumbnail"
                />
              ))}
            </div>
            <div className="main-image">
              {window.innerWidth <= 768 ? ( // Using window.innerWidth to switch views
                <Slider {...settings}>
                  {images.map((image) => (
                    <div key={image.id}>
                      <img src={image.url} alt={image.alt} style={{ width: "100%", display: "block" }} />
                    </div>
                  ))}
                </Slider>
              ) : (
                <img src={selectedImage} alt="Selected" />
              )}
            </div>
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>₹{product.price}</p>
              <div className="item-quantity">
                <button className="quantity-btn decrement" onClick={decreaseQty}>-</button>
                <input type="number" className="count" value={quantity} readOnly />
                <button className="quantity-btn increment" onClick={increaseQty}>+</button>
              </div>
              <div className="size-options">
      {['S', 'M', 'L', 'XL'].map((size) => (
        <button
          key={size}
          className={`size-option ${selectedSize === size ? 'selected' : ''}`}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
              <div className="color-options">
                {/* Options for different colors */}
              </div>
              <div className="buttons">
                <div className="addtocart">
                <img src={carts} alt='' />
                <p onClick={() => dispatch(addCartItem(product._id, quantity, selectedSize))}>ADD TO CART</p>
                </div>
               
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </Fragment>
      }
      <Footer/>
    </Fragment>
   );
}

export default Proddetails;
