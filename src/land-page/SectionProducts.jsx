import { useState , useEffect } from "react"
import Cart from "../cart/Cart";
import axios from 'axios'
import { Grid } from "@mui/material";
const SectionProducts = () => {
    const [limitProduct , setLimitProduct] = useState([]);
    function funcLimitProducts() {
      axios.get(`https://dummyjson.com/products?limit=1000`)
      .then((res)=> setLimitProduct(res.data))
      .catch((error)=> console.log(error))
    }
    useEffect(()=>{
      funcLimitProducts();
    },[]);
    const resultAll = limitProduct?.products?.map((products)=>(
        <Grid item xs={12} spacing={4} md={4} key={products.id} >
    <Cart img={products?.images[0]} 
    products={products} title={products.title} 
    iconCondition='cart' learnMore='cart'
    price={products.price} id={products.id} />
    </Grid>
  ))
  return (
    <div className="product-landing">
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
            {resultAll}
        </Grid>
    </div>
  )
}

export default SectionProducts