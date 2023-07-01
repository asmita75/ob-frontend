import React, { useEffect } from 'react'
import { useState } from "react";
import { addProductApi, deleteProductApi, getAllProductsApi, getCount } from '../../../apis/Api';

import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
const Admindashboard = () => {

    const [productImage, setproductImage] = useState(null);
    const [previewImage, setpreviewImage] = useState(null);
    const [productName, setproductName] = useState('');
    const [productPrice, setproductPrice] = useState('');
    const [productDescription, setproductDescription] = useState('');
    const [productCategory, setproductCategory] = useState('');


//for count
const [productCount, setProductCount]=useState(0)
const [pendingOrderCount, setPendingCount]=useState(0)
const [deliveredOrderCount, setDeliveredCount]=useState(0)
const [userCount, setUserCount]=useState(0)


    //for response data
    const [products, setproducts] = useState([]);
    const handleImageupload = (event) => {

        setproductImage(event.target.files[0])

        const reader = new FileReader()
        reader.onload = () => {

            setpreviewImage(reader.result)
        }
        reader.readAsDataURL(event.target.files[0])

    }


    //handle asubmit
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('productName', productName)
        formData.append('productPrice', productPrice)
        formData.append('productCategory', productCategory)
        formData.append('productDescription', productDescription)
        formData.append('productImage', productImage)

        addProductApi(formData).then(res => {
            toast.success("product added successfully")
        }).catch(err => {
            toast.error("product add failed!")
        })
        if(!validate()){
            return;
          }

    }

    //for deleting product
    const handleDelete = (id) => {
        const confirmDelete = window.confirm("are you sure you you want to delete?")
        if (confirmDelete) {
            deleteProductApi(id).then(res => {
                toast.success("product deleted successfully")
            }).catch(err=>{
                toast.error("product deleted failed")
            })
        }
    }

    useEffect(() => {
        getAllProductsApi().then(res => {
            setproducts(res.data)
        }).catch(err => {
            console.log(err)
        })

        getCount().then(res =>{
            setProductCount(res.data.productCount)
            setPendingCount(res.data.pendingOrders)
            setDeliveredCount(res.data.deliveredOrders)
            setUserCount(res.data.userCount)
        })

    }, [])

//error for form validation
    const [productNameError, setProductNameError] = useState("");
    const [productPriceError, setProductPriceError] = useState("");
    const [productCategoryError, setProductCategoryError] = useState("");
    const [productDescriptionError, setProductDescriptionError] = useState("");
    const [productImageError, setProductImageError] = useState("");

    const validate =()=>{
        let isvalid =true;
        if(productName === ""){
          setProductNameError("Product name is  is required");
          isvalid=false;
        }

        if(productName === ""){
            setProductNameError("Product name is  is required");
            isvalid=false;
          }

          if(productPrice === ""){
            setProductPriceError("Product price is  is required");
            isvalid=false;
          }

          if(productCategory === ""){
            setProductCategoryError("Product category is  is required");
            isvalid=false;
          }

          if(productDescription === ""){
            setProductDescriptionError("Product description is  is required");
            isvalid=false;
          }

    return (
        <>
          <div className='container mt-5 '>
                <div class="row row-cols-1 row-cols-md-4 g-4 mb-5">
                    <div className="col">
                        <div class="card text-white bg-danger mb-3" button>
                            <div class="card-header">Total Products</div>
                            <div class="card-body">
                                <h5 class="card-title">{productCount}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div class="card text-white bg-warning mb-3" button>
                            <div class="card-header">Total Pending Orders</div>
                            <div class="card-body">
                                <h5 class="card-title">{pendingOrderCount}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div class="card text-white bg-success mb-3" button>
                            <div class="card-header">Total Delivered Product</div>
                            <div class="card-body">
                                <h5 class="card-title">{deliveredOrderCount}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div class="card text-white bg-primary mb-3" button>
                            <div class="card-header">Total User</div>
                            <div class="card-body">
                                <h5 class="card-title">{userCount}</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between'>
                    <h3>Showing all Products</h3>
                    <button type="button" class="btn btn-danger" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                        Add Product
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add product</h5>
                                    <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="">
                                        <div class="mb-3">

                                            <label htmlFor="">Product Name</label>
                                            <input
                                                onChange={(e) => setproductName(e.target.value)}
                                                type="text" class="form-control" placeholder='Enter product name' />
                                                {
              productNameError && <div className="text-danger">{productNameError}</div>
            }


                                            <label className='mt-2' htmlFor="">Product Price</label>
                                            <input
                                                onChange={(e) => setproductPrice(e.target.value)}
                                                type="text" class="form-control" placeholder='Enter product price' />
                                                {
              productPriceError && <div className="text-danger">{productPriceError}</div>
            }

                                            <label className='mt-2' htmlFor="">Product Category</label>
                                            <input
                                                onChange={(e) => setproductCategory(e.target.value)}
                                                type="text" class="form-control" placeholder='Enter product category' />
                                                {
              productCategoryError && <div className="text-danger">{productCategoryError}</div>
            }

                                            <label className='mt-2' htmlFor="">Product Description</label>
                                            <textarea
                                                onChange={(e) => setproductDescription(e.target.value)}
                                                className='form-control' name="" id="" rows={4}></textarea>
                                                {
              productDescriptionError && <div className="text-danger">{productDescriptionError}</div>
            }

                                            <label className='mt-2' htmlFor="">Product Image</label>
                                            <input onChange={handleImageupload} type="file" class="form-control" placeholder='Enter product image' />

                                            {
                                                previewImage && <img src={previewImage} alt="" className='object-cover rounded-3 mt-2' height={'300px'} width={'100%'} />
                                            }

                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" onClick={handleSubmit}>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table mt-3">
                    <thead class="table-info">
                        <tr>
                            <th scope="col">Product Image</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            products.map(product => {
                                return (
                                    <tr>
                                        <td>
                                            <img src={product.image} alt="" height={40} />
                                        </td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.category}</td>
                                        <td>{product.description}</td>
                                        <td>

                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <Link to={`/admin/product/edit/${product._id}`} type="button" class="btn btn-success">Edit</Link>
                                                <button type="button" class="btn btn-danger" onClick={() => handleDelete(product._id)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

            </div>


        </>
    )
}
}
export default Admindashboard