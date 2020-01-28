import React from 'react'
import avatar from "../sprites/avatar.png"
import { Container, Image, Card, Row, Col } from 'react-bootstrap'

const About = () => {
    const blurb = "With a background in nutrition and biomedical research, exposure to powerful data analysis software sparked an interest in programming that stuck with me indefinitely. As the first tech of a novel research lab and ultimately the expert workhorse of a rapidly growing group, I was promoted to lab manager after six months. This experience equipped me to problem solve, develop solutions, and lead and teach others, even in an unfamiliar context. I’m excited to see where my background coupled with experience in Ruby on Rails and JavaScript based programming will take me."
    return (
        <Container>
            <h1 style={{marginTop: '20px', marginBottom: '20px'}}>About Me</h1> 
            <Container as={Row}>
                <Col xs={4}>
                    <Image src={avatar} rounded style={{width: '100%'}} />  
                </Col>
                <Col xs={8}>
                    <Card border="info" style={{ width: '30rem', padding: '2em' }}>
                        <Card.Body>
                            <h5 className="font-weight-light">{blurb}</h5>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </Container>
    )
}

export default About