/* eslint-disable @next/next/no-img-element */
import { Card } from 'react-bootstrap';

function CardItem({ title, subtitle, image, date, author }) {
    console.log(author)
return (
    <Card className={`ns-card`}>
        <div className="card-body-wrapper">
        <Card.Header
            className="d-flex flex-row">
            <img
            src={author?.avatar || 'https://via.placeholder.com/150'}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"/>
            <div>
            <Card.Title className="font-weight-bold mb-1">{author?.name}</Card.Title>
            <Card.Text className="card-date">{date}</Card.Text>
            </div>
        </Card.Header>
        <div className="view overlay">
            <Card.Img
            src={image}
            alt="Card image cap"
            />
        </div>
        <Card.Body>
            <Card.Title className="card-main-title">{title}</Card.Title>
            <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
        </div>
        <a className="card-button">
        Read More
        </a>
    </Card>
  )
}

export default CardItem