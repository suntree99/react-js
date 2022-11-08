import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = () => {

    const url = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([]);

    const getDataProducts = async () => {
        const response = await fetch(url);
        const dataProduct = await response.json();
        setProducts(dataProduct);
    }

    useEffect(() => {
        getDataProducts();
    })

    return (
        <div className="container">
            <div className="row">
                <h1>My Products</h1>
                { products.map( (product) => 
                    <div className="col-3 mb-3">
                        <CardProduct 
                        key={product.id} 
                        title={product.title} 
                        price={product.price} 
                        category={product.category} 
                        description={product.description} 
                        image={product.image}/>
                    </div> 
                ) }
            </div>
        </div>
    )
}

function CardProduct(props) {
    return (
        <Card style={{ width: '18rem', height: '100%' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <p>Price : {props.price}</p>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default Products;