import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Product } from "../models/product";
import Swal from "sweetalert2";
import axios from "axios";

function Dashboard() {
  const [productList, setProductList] = useState<Product[]>([]);
  const handleDelete =async (id:any)=>{
    try {
     
      const response = await axios.delete(`http://localhost:3001/proroutes/delete/${id}`);
      Swal.fire({
        title: "Deleted",
        text: `${id} is deleted in Pro Builder`,
        icon: "success"
      });

      fetchData();
  } catch (error) {
      console.error('There was a problem fetching the data:', error);
  }
  }



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
  return (
    <>
    <div className="admin_dashboard">
      <div className="addContainer">
        <div><Link to="/addFood">Add Food</Link></div>
      </div>
      <div className="listFood">
      
          <div >
            <table>
              <thead>
              <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Created At</th>
          </tr>
              </thead>
              <tbody>
              {productList.map(item=>(
                <tr key={item._id}>
                <td>{item._id}</td>
                <td><img src={`http://127.0.0.1:5000/static/product/${item.img}`} alt="" height={50} width={50}/></td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.created_at}</td>
                </tr>
                 ))}
              </tbody>
            </table>
          </div>
       
      </div>
    </div>
    </>
  )
}

export default Dashboard