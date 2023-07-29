import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ReactBootstap() {
  return (

    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
                </Card.Text>
                <Button variant="success">Go somewhere</Button>
            </Card.Body>
        </Card>






{/* 
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">

                    <Card.Body>
                    <Card style={{width:"20rem"}} className='m-3'> 
                       <h1> Card title 1 </h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, provident molestiae placeat voluptatibus nesciunt possimus.
                        </p>

                        <Button variant="success">Success</Button>{''}
                    </Card>
                    </Card.Body>

              

                </div>
                {/* ////////// */}
                {/* <div className="col-lg-4 col-md-6">

                <Card style={{width:"20rem", margin:"10px"}} className=''> 
                     <h1> Card title 2 </h1>
                  <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, provident molestiae placeat voluptatibus nesciunt possimus.
                  </p>

                <Button variant="success">Success</Button>{''}

                 </Card>

                </div> */}

                {/* //////////// */}


                {/* <div className="col-lg-4 col-md-6">

                    <Card style={{width:"20rem", margin:"10px"}} className=''> 
                        <h1> Card title 3 </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, provident molestiae placeat voluptatibus nesciunt possimus.
                        </p>
                    <Button variant="success">primary</Button>{''}
                    </Card>
                </div> 
            </div>
        </div> */}


    
    </div>
   
  ) 
}
