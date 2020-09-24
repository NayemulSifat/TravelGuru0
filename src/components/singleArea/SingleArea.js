
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleArea = (props) => {
    const { id, title, details, image } = props.spots;

    console.log(id)

    return (
        <div style={{ width: '40%', height: 'auto', marginRight: '10px', borderRadius: '10px' }}>
            <Card style={{ borderRadius: '25px' }}>
                <Card.Img variant="top" style={{ height: '50%', width: '100%' }} src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <Link to={`/booking/${id}`} className='btn'>Booking Now</Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default SingleArea;