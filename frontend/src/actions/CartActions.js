import {addCartItemRequest, addCartItemSuccess} from '../Slices/CartSlice';
import axios from 'axios'

export const addCartItem = (id, quantity, selectedSize) => async(dispatch) => {
    try {
        dispatch(addCartItemRequest())
        const {data } = await axios.get(`/api/v1/product/${id}`)
        dispatch(addCartItemSuccess({
            product: data.product._id,
            name: data.product.name,
            description: data.product.description,
            price: data.product.price,
            image: data.product.images[0].image,
            stock: data.product.stock,
            quantity,
            selectedSize

            
        }))
    } catch (error) {
        
    }
}