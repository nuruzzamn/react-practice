import React, {Component} from "react";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";

function Welcome(){
    return <div>
    <h2> from card 2 component</h2>
    </div>
}

class Card2 extends Component{
        
    render() {

        let {tiltleName, des, id}= this.props;
        return (
            <div>
           
            <br />
            <h1>{tiltleName +" / "+ des + " / " + id}</h1>
            <FaFacebook className="icon"/>
            <FaFacebookMessenger className="icon"/>

            </div>
            
        )
    }
}

export default Card2;