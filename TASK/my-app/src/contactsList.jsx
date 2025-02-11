import React, { Component }  from 'react';
import { Container, Row, Col,Image } from 'react-bootstrap';
import Search from './components/Search'
import './index.css'
const dataAPI='http://demo9212539.mockable.io/contacts'
class Contacts extends Component {
    constructor(props){
        super(props);
        this.state={
            contacts:[],
            searchContacts:[],
            searchTxt:""       
        }
    }
    componentDidMount(){
        fetch(dataAPI)
        .then(data=> data.json())
        .then(data=>{
            let list=data.map(user=>{
                return(
                    <div className="list-group-item" key={user.id} fullname={user.name}>
                        <Container>
                                <Row>
                                    <Col className='box' md={6} >
                                    <Image  src={user.photo} roundedCircle />
                                    </Col>
                                    <Col md={6}>
                                        <Row className="list-group-item"><h6>Name: {user.name}</h6></Row>
                                        <Row className="list-group-item"><h6>Gender: {user.gender}</h6></Row>
                                        <Row className="list-group-item"><h6>E-Mail: {user.email}</h6></Row>
                                        <Row className="list-group-item"><h6>Phone No.: {user.phone}</h6></Row>
                                    </Col>
                                </Row>
                        </Container>
                        <br/>
                    </div>
                )
            })
            this.setState({
                contacts:list
            })

        })
    }
    handleSearchTxt=(e)=>{
        this.setState({searchTxt:e.target.value});
        let list = this.state.contacts.filter(user=>{
                return(user.props.fullname.toLowerCase().includes(e.target.value.toLowerCase()))
        })
        
        this.setState({searchContacts:list})
    }
    render(){
        return (
        <div >    
            <Search handleSearchTxt={this.handleSearchTxt}/>     
            <div className="secbox">

                <div className='scroll list-group-item' style={{width:'60vw'}}>
                    {this.state.searchTxt.length!==0?this.state.searchContacts:this.state.contacts}
                </div>
            </div>
        </div>
        );

    }
}

export default Contacts;
