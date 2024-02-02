import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import Product from "./Product";
import { CardGroup } from "react-bootstrap";

const Products = () => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product);
    // line above is the same as store.product.products
    // store is state, product is the reducer, products is inside the initial state in the reducer
    console.log(products);

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);

    return (
        <>
            <div>
                <h2>Products</h2>
            </div>
            <CardGroup style={{ display: "flex", justifyContent: "center" }}>
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </CardGroup >
        </>
    );
}

export default Products;