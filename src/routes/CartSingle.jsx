import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const CartSingle = (props) => {
    const { title, price, description, image, rating } = props;
    const product = props;
    const dispatch = useDispatch();

    return (
        <Card
            style={{
                width: "10rem",
                padding: "1rem",
                margin: "1rem",
                textOverflow: "ellipsis",
                height: "auto",
                overflow: "hidden",
            }}
        >
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card.Img
                    variant="top"
                    src={image}
                    style={{
                        width: "30%",
                        height: "auto",
                        objectFit: "cover",
                    }}
                />
            </div>
            <Card.Body
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Price: ${price}
                    <br />
                    Rating: {rating?.rate}
                    <br />
                    {description}
                    <br />
                    Quantity in cart: {(product && product?.quantity) ?? 0}
                </Card.Text>
                <Button
                    variant="primary"
                    onClick={() => dispatch(removeFromCart(product))}
                >
                    Remove Product
                </Button>
                <Button
                    variant="primary"
                    onClick={() => dispatch(removeFromCart(product))} // TODO: Refactor this to match the slice action
                >
                    Decrease Quantity by 1
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CartSingle;