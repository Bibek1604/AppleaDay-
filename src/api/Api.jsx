import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function Api() {
  const dispatch = useDispatch();
  const products = useSelector((state)=> state.products.items);

  useEffect(()=>{
    const fetchProducts = async () =>{
      try{
        const response = await fetch('http://127.0.0.1:8000/products/');
        const data = await response.json();
        dispatch (setProducts(data.products));

      }catch (error){
        console.error('filed to fetch products:',error);
     }
    };
    fetchProducts();
  },[dispatch]);
  return (
    <div>
      <h1>API</h1>
    </div>
  );
}
export default Api;