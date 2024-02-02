import { Button, Card, CardGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const Product = (props) => {

    const { title, price, description, image, rating } = props;
    const product = props;

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }

    return (
        <CardGroup>
            <Card style={{
                maxWidth: '18rem', maxHeight: '50rem', padding: "1rem", margin: "0.5rem", display: "inline-block"
            }}>
                <Card.Img style={{ maxHeight: '200px', maxWidth: '200px' }} variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text style={{ fontSize: 10, }}>Price: ${price}
                        <br />
                        Rating: {rating.rate}
                        <br />
                        Description: {description}
                    </Card.Text>
                    <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
                </Card.Body>
            </Card>
        </CardGroup>);
}

export default Product; 