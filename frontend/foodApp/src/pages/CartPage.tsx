import React, { useEffect, useState } from 'react'
import { Carts } from '../models/carts';
import NavBar from '../components/NavBar';

function CartPage() {
    const [carts, setCartItem] = useState<Carts[]>([]);
    useEffect(() => {
        const cartData = localStorage.getItem("cart");
        if(cartData){
            const parsedCartData = JSON.parse(cartData) as Carts[]
            setCartItem(parsedCartData)
        }
       
        
    }, []);
  return (
    <>
    <NavBar/>
   
        <div className='cartViewContainer'>
            <div className='row_details'>
         <div className='cartdetails'>
         <table>
                <thead className='thead'>
                   <tr>
                    <th className='heading'>S.No</th>
                    <th className='heading'></th>
                    <th className='heading'>Product</th>
                    <th className='heading'>Price</th>
                    <th className='heading'>Quantity</th>
                    <th className='heading'>Total</th>
                   </tr>
                </thead>
                <tbody>
                {carts.map((item,index)=>(
                   
                    <tr  key={index} className='tbl_row'>
                        <td className='cartItems'>{index+1}</td>
                        <td className='cartItems'> <img src={`http://127.0.0.1:5000/static/product/${item.product.img}`}  alt="" height={80}width={80} /></td>
                        <td className='cartItems'>
                            <div className='col'>
                            <p>{item.product.title}</p>
                            </div>
                        </td>
                       <td className='cartItems'>{item.product.price}</td>
                       <td className='cartItems'>{item.quantity}</td>
                       <td className='cartItems'>{item.subtotal}</td>
                       <td className='cartItems'><i className="ri-close-large-line"></i></td>
                        
                    </tr>    ))}
                </tbody>
            </table>
         </div>
            <div className='userDetails'>
                <p>User Information</p>
                <div className='userInfo'>
                    <input type="text" placeholder='username'/>
                    <input type="number" placeholder='age'/>
                    <input type="number" placeholder='weight'/>
                    <input type="number" placeholder='height'/>
                    <button className='predictBtn'>Predict Calories</button>
                </div>
            </div>
            </div>
           <div className='totalContainer'>
           <p>Total Amount: SSS</p>
           <p>Total Calories: SSS</p>
           </div>
         
        </div>

    </>
  )
}

export default CartPage