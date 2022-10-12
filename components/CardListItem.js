/* eslint-disable @next/next/no-img-element */
import { Card } from 'react-bootstrap';
import Link from "next/link"

const CardListItem = ({title, subtitle, author, link, date, mode = "normal"}) => {
return (
    <Card className={`ns-card ns-card-list ${mode}`}>
        <div className="card-body-wrapper">
        <Card.Header
            className="d-flex flex-row">
            <img
              src={author?.avatar || 'https://via.placeholder.com/150'}
              className="rounded-circle mr-3"
              height="50px"
              width="50px"
              alt="avatar"/>

            { mode === "placeholder" ?
                <div>
                    <Card.Title className="font-weight-bold mb-1">Placeholder Author</Card.Title>
                    <Card.Text className="card-date">Placeholder Date</Card.Text>
                </div>
                :
                <div>
                    <Card.Title className="font-weight-bold mb-1">{author?.name}</Card.Title>
                    <Card.Text className="card-date">{date}</Card.Text>
                </div>
            }
        </Card.Header>
        <Card.Body>
            { mode === "placeholder" ?
                <div>
                    <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                    <Card.Text>Placeholder Subtitle</Card.Text>
                </div>
                :
                <div>
                    <Card.Title className="card-main-title">{title}</Card.Title>
                    <Card.Text>{subtitle}</Card.Text>
                </div>
            }

        </Card.Body>
        </div>
        { link &&
            <Link {...link}>
                <a className="card-button">
                    Read More
                </a>
            </Link>
        }
    </Card>
  )
}

export default CardListItem