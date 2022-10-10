import { Container, Row, Col, Media, Image, Card } from 'react-bootstrap';

function AuthorIntro() {
return (
    <Row>
        <Col md="8">
        {/* AUTHOR INTRO STARTS */}
        <Media className="mb-4 admin-intro">
            <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src='https://via.placeholder.com/150'
            alt="Generic placeholder"
            />
            <Media.Body>
            <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
            <p className="welcome-text">
           Hi
            </p>
            </Media.Body>
        </Media>
        {/* AUTHOR INTRO ENDS */}
        </Col>
    </Row>
  )
}

export default AuthorIntro