
  
import 'bootstrap/dist/css/bootstrap.min.css'

import { Navbar, Container, Card, Row, Col , Button } from 'react-bootstrap';


  const App  = () => {
    

    return (

        <>

        <div className="App">

        {/* Barre de navigation */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Mon Application</Navbar.Brand>
          </Container>
        </Navbar>

        {/* En-tête */}
        <Container className="mt-4">
          <h1>Bienvenue sur mon site React-Bootstrap</h1>
        </Container>

        {/* 3 Cartes */}
        <Container className="mt-4">
          <Row>
            <Col md={4}>
              <Card  className='d-flex align-items-center bg-secondary '  >
                <Card.Img variant="top" src="images (1).jpg" style={{width : '300px' , height : '300px'}}/>
                <Card.Body>
                  <Card.Title>SAMSUNG S-25 ULTRA</Card.Title>
                  <Card.Text>
                  Le Samsung Galaxy S25 Ultra, lancé en février 2025, est le nouveau 
                  fleuron de la gamme Galaxy, intégrant des innovations majeures en 
                  matière de design, de performances, de photographie et d'intelligence
                   artificielle.                 
                    </Card.Text>
                    <Row className='d-flex align-items-center flex-wrap-initial flex-nowrap mb-3'>
                    < Card.Text style={{width:'235px' , marginBlockEnd: 'initial'}}>
                      Prix : 1299 $ pour  256 Giga
                   </Card.Text>
                   <Button style={{width:'100px'}} > Acheter </Button>
                    </Row>
                 
                    <Row className='d-flex align-items-center flex-wrap-initial flex-nowrap mb-3'>
                    < Card.Text style={{width:'235px' , marginBlockEnd: 'initial'}}>
                      Prix : 1399 $ pour  512 Giga
                   </Card.Text>
                   <Button style={{width:'100px'}} > Acheter </Button>
                    </Row>
                    <Row className='d-flex align-items-center flex-wrap-initial flex-nowrap mb-3'>
                    < Card.Text style={{width:'235px' , marginBlockEnd: 'initial'}}>
                      Prix : 1599 $ pour  1 Tera
                   </Card.Text>
                   <Button style={{width:'100px'}} > Acheter </Button>
                    </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card  className='d-flex align-items-center bg-secondary ' >
                <Card.Img variant="top" src="images.jpg"  style={{width:'300px',height: '300px'}} />
                <Card.Body>
                  <Card.Title>SAMSUNG S24 FE</Card.Title>
                  <Card.Text>
                  ​Le Samsung Galaxy S24 FE, lancé en octobre 2024, est 
                  une version plus abordable de la série Galaxy S24, 
                  offrant des fonctionnalités haut de gamme à un prix 
                  compétitif. Il intègre l'intelligence
                   artificielle.                  </Card.Text>
                   <Row className='d-flex align-items-center flex-wrap-initial flex-nowrap mb-3'>
                    < Card.Text style={{width:'248px' , marginBlockEnd: 'initial'}}>
                      Prix : 649,99 $ pour  128 Giga
                   </Card.Text>
                   <Button style={{width:'100px'}} > Acheter </Button>
                    </Row>
                    <Row className='d-flex align-items-center flex-wrap-initial flex-nowrap mb-3'>
                    < Card.Text style={{width:'248px' , marginBlockEnd: 'initial'}}>
                      Prix : 709,99 $   256 Tera
                   </Card.Text>
                   <Button style={{width:'100px'}} > Acheter </Button>
                    </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card  className='d-flex align-items-center bg-secondary ' >
                <Card.Img variant="top" style={{height:'300px',width:'300px'}}  src="/1.jpg" />
                <Card.Body>
                  <Card.Title>REDMI 14C</Card.Title>
                  <Card.Text>
                  Le Redmi 14C, lancé par Xiaomi en octobre 2024, s'inscrit
                   dans la continuité de la série Redmi C, réputée pour offrir
                    des performances solides à prix très abordable. Il vise
                     principalement les utilisateurs.  </Card.Text>               
                
                  <Row className='d-flex align-items-center flex-wrap-initial flex-nowrap mb-3'>
                 
                    < Card.Text style={{width:'235px' , marginBlockEnd: 'initial'}}>
                      Prix : 112,70 $ pour  128 Giga
                   </Card.Text>
                   <Button style={{width:'100px'}} > Acheter </Button>
                    </Row>
                    <Row className='d-flex align-items-center flex-wrap-initial flex-nowrap mb-3'>
                    < Card.Text style={{width:'235px' , marginBlockEnd: 'initial'}}>
                      Prix : 129,99 $   256 Tera
                   </Card.Text>
                   <Button style={{width:'100px'}} > Acheter </Button>
                    </Row> 
                    <Row className='d-flex align-items-center flex-wrap-initial flex-nowrap mb-3'>
                    < Card.Text style={{width:'235px' , marginBlockEnd: 'initial'}}>
                      Prix : 139,50 $   256 Tera
                   </Card.Text>
                   <Button style={{width:'100px'}} > Acheter </Button>
                    </Row> 
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

         

      </div>
    </>

    )
    
    }


    export default App