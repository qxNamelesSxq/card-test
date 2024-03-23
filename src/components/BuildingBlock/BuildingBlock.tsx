import { Col, Row, Image } from "react-bootstrap"

export const BuildingBlock = () => {

    return(
        <div>
            <Row>
                <Col className={`bigNumber d-flex justify-content-end align-items-center`}>03</Col> 
                <Col className={`d-flex flex-column justify-content-center align-items-start`}>
                    <h2 className={`header3`}>Girls Globe —</h2>
                    <p>Brand Strategy, Visual Identity</p>   
                </Col> 
            </Row>
            <Row className={`bodyBlock`}
                style={{backgroundImage: 'url(/images/building.png)'}}
            >
                <Col xs={12} sm={12} md={6} className="p-3 d-flex justify-content-center justify-content-md-end">
                    <Image src="/images/team.png" rounded className="w-75 my-auto" />
                </Col>
                <Col xs={12} sm={12} md={6} className='p-3 d-flex justify-content-center justify-content-md-start align-items-center'>
                    <div>
                        <h2 className={`header3`}>Empire State Building</h2>
                        <p>350 5th Ave, New York, NY 10118</p>
                        <p>1 212-736-3100</p> 
                        <p>contacts@esbnyc.com</p> 
                    </div>
                </Col>
            </Row>
        </div>
    )
}