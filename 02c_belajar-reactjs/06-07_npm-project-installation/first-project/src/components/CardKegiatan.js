import Card from 'react-bootstrap/Card';

const CardKegiatan = (props) => {
    return (
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Text>
                    {props.desc}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardKegiatan;