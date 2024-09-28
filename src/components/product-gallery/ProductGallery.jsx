import {  useState } from 'react'
import ProductCard from '../product-card/ProductCard'
import './ProductGallery.css'
// import { get } from 'react-hook-form'
import { useEffect } from 'react'
import axios from 'axios'
const URL= import.meta.env.VITE_SERVER_URL


export default function ProductGallery(){

    const [products, setProducts]= useState([])

    getProducts()
    useEffect(()=>{}
,[])

async function getProducts() {
    try {
        const response= await axios.get(`${URL}/products`)
        setProducts(response.data)
    } catch (error) {
        
        console.log(error)
        
    }
}


    return(

<section className="product-section"> 
<div className="container-card">


{
    products.map(producto=>( <ProductCard key={producto.id} prod={producto}/>))
}



</div>

</section>




    )
}
