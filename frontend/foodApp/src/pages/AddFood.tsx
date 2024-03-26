import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AddFood() {
 
    const [quantity, setQuantity] = useState('');
    const [title, settitle] = useState('');
    const [price, setprice] = useState('');
    const [calories, setcalories] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState('');
    const redirect = useNavigate();

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        settitle(event.target.value);
    };

    const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setQuantity(event.target.value);
    };
    
    const handleCaloriesChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setcalories(event.target.value);
    };

    const handlePriceChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setprice(event.target.value);
    };
    const uploadFile = async(file: any)=>{
        const formData = new FormData();
      
        formData.append('image', file);
        formData.append('title', title);
        formData.append('quantity', quantity);
        formData.append('imageFile', file.name);
        formData.append('price', price);
        try {
             await axios.post('http://127.0.0.1:5000/uploadImage', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }).then((response: { data: any; }) => {
          
                Swal.fire({
                    title: "Success",
                    text: `Product added successfully`,
                    icon: "success"
                  });
               redirect('/dashboard')
                console.log('pro info:!', response.data);
              });
            
          } catch (error) {
            console.error('Error uploading file:', error);
            throw error; // Rethrow the error to handle it in the calling code
          }
      }
  
    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        const product_data = {
            title:title,
            quantity:quantity,
            imageFile:file?file.name:'',
            price:price,
          
            }
            console.log(product_data)
            uploadFile(file)
           
       // adddProduct(product_data)
    };

    return (
        <>
            <div className="FoodContainer">
                <h1>Add Food Product</h1>
                <form onSubmit={handleSubmit} className="foodForm">
                    <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
                    <input type="text" placeholder="Quantity" value={quantity} onChange={handleQuantityChange} />
                    <input type="text" placeholder="Price" value={price} onChange={handlePriceChange} />
                    <input type="text" placeholder="Calories" value={calories} onChange={handleCaloriesChange} />
                    <input type="file" onChange={handleFileChange} />
                    <button type="submit" className="addbtn">Add</button>
                </form>
                {message && <p className="error">{message}</p>}
            </div>
        </>
    );
}

export default AddFood;
