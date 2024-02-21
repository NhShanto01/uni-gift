import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {id,name,img,price,description} = product;
    const navigate = useNavigate();
    const navigateToSingleProduct = id =>{
        navigate(`/product/${id}`);
    }
    return (
        <div>
            <Card className='h-100 text-center'>
                <Card.Img variant="top" height={400} src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={() => navigateToSingleProduct(id)} variant="primary">{price} Tk</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;