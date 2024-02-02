import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import CartSingle from "./CartSingle";
import { CardGroup } from "react-bootstrap";

const Cart = () => {

    const { cart } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    console.log('cart', cart);

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);

    return (
        <>
            <div>
                <h2>Cart</h2>
            </div>
            <CardGroup style={{ display: "flex", justifyContent: "center" }}>
                {cart.map((product) => (
                    <CartSingle key={product.id} {...product} />
                ))}
            </CardGroup >
        </>
    )
}

export default Cart;