import { Col, Row } from "react-bootstrap"
import styles from "./BusinessBlock.module.scss"
import 'global.scss'

export const BusinessBlock = () => {


    
    return(
        <Col>
            <Row>
                <Col className={`bigNumber d-flex justify-content-end align-items-center`}>01</Col> 
                <Col className={`d-flex flex-column justify-content-center align-items-start w-50`}>
                    <h2 className={`header3`}>Reykjavik Fashion Festival —</h2>
                    <p>Branding, Interactive</p>   
                </Col> 
            </Row>
            <Row className={`bodyBlock`}
                style={{backgroundImage: 'url(/images/business.png)'}}
            >
                <Col xs={12} sm={12} md={6} className="p-3 p-md-5 d-flex justify-content-center justify-content-md-end position-relative">
                    <div className={`${styles.businnesBlockHeader}`}>
                        <h1 className={`header1 fw-bold`}>Why Serious Business?</h1>
                        <p style={{overflowWrap: 'break-word'}}>Donec efficitur tristique nunc, vel volutpat lectus placerat eget. Aliquam id tincidunt nunc. Morbi commodo maximus commodo. Integer non massa cursus tortor euismod pretium vitae eu ante. Pellentesque non urna pellentesque, aliquet velit in.</p> 
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} className='p-3 px-md-5 d-flex justify-content-center justify-content-md-start align-items-center'>
                    <p className={`${styles.businnesBlockHeader}`}>
                        Donec efficitur tristique nunc, vel volutpat lectus placerat eget. Aliquam id tincidunt nunc. Morbi commodo maximus commodo. Integer non massa cursus tortor euismod pretium vitae eu ante. Pellentesque non urna pellentesque, aliquet velit in, auctor massa. Nunc non fringilla justo. Etiam consequat auctor est ac dignissim. Integer accumsan aliquam vestibulum. Vestibulum ornare, metus eget scelerisque pulvinar, lectus tellus vestibulum est, et suscipit velit nunc quis turpis. Integer lacus libero, consectetur id pharetra sit amet, maximus eu tellus. Suspendisse potenti. In eget nibh iaculis, sagittis ante et, fringilla augue. Vestibulum dolor ligula, gravida at ante ac, sagittis viverra nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis sagittis viverra nibh egestas.
                    </p>
                </Col> 
            </Row>
        </Col>
    )
}