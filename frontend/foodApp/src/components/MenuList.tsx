import React, { useEffect, useState } from 'react'
import { Product } from '../models/product';
import axios from 'axios';
import { Carts } from '../models/carts';

function MenuList() {
    const [productList, setProductList] = useState<Product[]>([]);
    const [cart, setCartItem] = useState<Carts[]>([]);
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
    const fetchData = async () => {
        try {
           
            const response = await axios.get('http://127.0.0.1:5000/foodList');
           
            const products:Product[] =  response.data.map((item:any)=>({
              _id:item[0],
              title:item[1],
              quantity:item[2],
              price:item[3],
              img:item[4],
              created_at:item[5],
              calories:item[6]
            }));
            setProductList(products);
           console.log(products)
        } catch (error) {
            console.error('There was a problem fetching the data:', error);
        }
    };
    useEffect(() => {
       
  
        fetchData();
    }, []);

    useEffect(()=>{
      localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])
  function productClick(_id: number): void {
    console.log(_id)
    setQuantities(prevQt=>({
      ...prevQt,[_id]:(prevQt[_id]||0)+1
    }))
  }

  function addToCart(_id: number): React.MouseEventHandler<HTMLButtonElement>  {
   return ()=>{
      const selectedProduct = productList.find(p=>p._id==_id)
      const quantityValue =  quantities[_id] || 1;
   
      const createdAt = new Date().toISOString();
      const price = selectedProduct?.price
      const updateCart:Carts[] = [{
        quantity:quantityValue,
        product:selectedProduct!,
        created_at:createdAt,
        subtotal:quantityValue*price!
      }]
      
      setCartItem(prev=>([
        ...prev,...updateCart
      ]))
      console.log(updateCart)
   }
  }

  return (
    <>
 
    <div className='menuContainer'> 
    
    {productList.map(item=>(
       <div className='menu' key={item._id}>
            <div className='foodCard'>
                <div className='foodimg'>
                <img  onClick={()=>productClick(item._id)}
                src={`http://127.0.0.1:5000/static/product/${item.img}`} />
                
                </div>
                <div className='fooddetails'>
                    <div className='title'>{item.title}</div>
                    <hr />
                   <div className='row'>
                   <div className='left_view'>
                   <div className='price'> Price: Rs.{item.price}</div>
                   <p className='quantiyText'>Selected qt:{quantities[item._id] || 0}</p>
                   </div>
                   <div className='calo'>
                   <div className='qty'> Qty: {item.quantity}</div>
                   <span>Calories:{item.calories}</span>
                   </div>
                   </div>
                   <button className='cartBtn' onClick={addToCart(item._id)}>Add To Cart</button>
                </div>
            </div>
       </div>
         ))}
    </div>
    </>
  )
}

export default MenuList