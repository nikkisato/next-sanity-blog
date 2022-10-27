/* eslint-disable @next/next/no-img-element */
import { Card } from 'react-bootstrap';
import Link from "next/link"
import { urlFor } from "lib/api"

function CardItem({ title, subtitle, image, date, author, slug, link, mode = "normal" }) {
return (
    <Card className={`ns-card ${mode}`}>
        <div className={`card-body-wrapper ${!image ? "no-image" : ""} `}>
        <Card.Header
            className="d-flex flex-row">
            <img
            src={author?.avatar || 'https://via.placeholder.com/150'}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"/>
            <div>
                { 
                    mode === "placeholder" ? 
                    <>
                        <Card.Title className="font-weight-bold mb-1">Placeholder Title</Card.Title>
                        <Card.Text className="card-date">placeholder Date</Card.Text>
                    </>
                    :
                    <>
                        <Card.Title className="font-weight-bold mb-1">{author?.name}</Card.Title>
                        <Card.Text className="card-date">{date}</Card.Text>
                    </>               
                }
            </div>
        </Card.Header>
        <div className="view overlay">
            { mode === "placeholder" ? 
                <div className="image-placeholder" /> 
                :
              image ?
                <Card.Img
                src={
                urlFor(image)
                    .height(300)
                    .url()
                }
                alt="Card image cap"
            />
            : 
                <div>
                    
                </div>
            }
        </div>
        <Card.Body>
        { 
            mode === "placeholder" ? 
            <>
                <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                <Card.Text>Placeholder Subtitle</Card.Text>
            </>
            :
            <>
                <Card.Title className="card-main-title">{
                  title.length > 40 ?
                    subtitle.substr(0, 40) + '...' : title}</Card.Title>
                <Card.Text>{
                  subtitle?.length > 40 ?
                    subtitle.substr(0, 40) + '...' : subtitle}</Card.Text>
            </>               
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

export default CardItem