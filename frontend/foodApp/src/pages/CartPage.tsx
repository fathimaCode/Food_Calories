import React, { useEffect, useState } from 'react'
import { Carts } from '../models/carts';
import NavBar from '../components/NavBar';
import axios from 'axios';

function CartPage() {
    const [carts, setCartItem] = useState<Carts[]>([]);
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
      };
      const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(e.target.value);
      };
      const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(e.target.value);
      };
      const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value);
      };
    useEffect(() => {
        const cartData = localStorage.getItem("cart");
        if(cartData){
            const parsedCartData = JSON.parse(cartData) as Carts[]
            setCartItem(parsedCartData)
        }
       
        
    }, []);
    function predictCalories(): React.MouseEventHandler<HTMLButtonElement>  {
       return ()=>{
        const user_data ={
            "age":age,
             "weight":weight,
             "height":height
        }
        axios
          .post('http://127.0.0.1:5000/predictCalories', user_data)
          .then((response: { data: any; }) => {
            console.log(response)
          })
          .catch((error: any) => {
            // Handle error here
            console.error('There was a problem creating the user:', error);
            
          });
        console.log(name)
       }
    }

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
                    <input type="text" placeholder='username' 
                     value={name}
                   onChange={handleNameChange}/>
                    <input type="number" placeholder='age'  value={age}
                   onChange={handleAgeChange}/>
                    <input type="number" placeholder='weight'  value={weight}
                   onChange={handleWeightChange}/>
                    <input type="number" placeholder='height'  value={height}
                   onChange={handleHeightChange}/>
                    <button className='predictBtn' onClick={predictCalories()}>Predict Calories</button>
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