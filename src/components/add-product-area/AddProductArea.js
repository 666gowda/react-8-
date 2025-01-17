import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addEmployee } from '../../services/services'; 
import './AddProductArea.css';

function BasicExample() {
    const [formData, setFormData] = useState({
        product_id: '',
        product_name: '',
        price: '',
        description: '',
        product_code: '',
        release_date: '',
        image_url: '',
        star_rating: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addEmployee(formData); // Call addEmployee function with form data
            // Reset form after successful submission if needed
            setFormData({
                product_id: '',
                product_name: '',
                price: '',
                description: '',
                product_code: '',
                release_date: '',
                image_url: '',
                star_rating: ''
            });
            alert("Added Successfully!")
            console.log("Added Successfully!")
        } catch (error) {
            console.error('Error adding employee:', error);
            alert("Error Adding!")
            console.log("Error!")
        }
    };

    return (
        <div className='row'>
            <h2 className='font-monospace'>Add New Product</h2>
            <hr style={{ width: '90%', margin: 'auto' }} className='my-4' />
            <Form onSubmit={handleSubmit}>
                <div className='row d-flex justify-content-center'>
                    <Form.Group className="mb-3 col-5 " controlId="formBasicEmail">
                        <Form.Label>Product ID: </Form.Label>
                        <Form.Control className='shadow-sm' type="number" placeholder="Enter Product ID" name="product_id" value={formData.product_id} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3 col-5" controlId="formBasicEmail">
                        <Form.Label>Product Name: </Form.Label>
                        <Form.Control className='shadow-sm' type="text" placeholder="Enter Product Name" name="product_name" value={formData.product_name} onChange={handleChange} />
                    </Form.Group>
                </div>

                <div className='row d-flex justify-content-center'>
                    <Form.Group className="mb-3 col-5" controlId="formBasicEmail">
                        <Form.Label>Price: </Form.Label>
                        <Form.Control className='shadow-sm' type="number" placeholder="Enter Price" name="price" value={formData.price} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3 col-5" controlId="formBasicEmail">
                        <Form.Label>Description: </Form.Label>
                        <Form.Control className='shadow-sm' type="text" placeholder="Enter Description" name="description" value={formData.description} onChange={handleChange} />
                    </Form.Group>
                </div>

                <div className='row d-flex justify-content-center'>
                    <Form.Group className="mb-3 col-5" controlId="formBasicEmail">
                        <Form.Label>Product Code: </Form.Label>
                        <Form.Control className='shadow-sm' type="text" placeholder="Enter Product Code" name="product_code" value={formData.product_code} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3 col-5" controlId="formBasicEmail">
                        <Form.Label>Release Date(yyyy-mm-dd): </Form.Label>
                        <Form.Control className='shadow-sm' type="text" placeholder="Enter Release Date" name="release_date" value={formData.release_date} onChange={handleChange} />
                    </Form.Group>
                </div>

                <div className='row d-flex justify-content-center'>
                    <Form.Group className="mb-3 col-5" controlId="formBasicEmail">
                        <Form.Label>Image URL: </Form.Label>
                        <Form.Control className='shadow-sm' type="text" placeholder="Enter Image URL Address" name="image_url" value={formData.image_url} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3 col-5" controlId="formBasicEmail">
                        <Form.Label>Start Rating(0-5): </Form.Label>
                        <Form.Control className='shadow-sm' type="text" placeholder="Enter Rating" name="star_rating" value={formData.star_rating} onChange={handleChange} />
                    </Form.Group>
                </div>
                <div className='row d-flex justify-content-center mt-4'>
                <Button className='col-3 shadow btn btn-outline-success' variant="" type="submit">
                        Submit
                    </Button>
                </div>
                
            </Form>
        </div>
    );
}

export default BasicExample;