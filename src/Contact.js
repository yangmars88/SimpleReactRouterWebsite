import React, {Component} from 'react';

class Contact extends Component{
    render(){
        return(
            <div>
                <h2>My Contact info:</h2>
                <p><strong>Email Address:</strong> yangli.git@gmail.com</p>
                <p><strong>Phone Number:</strong> 860 680 1882</p>
                <p><strong>Address:</strong> Waltham MA</p>
                <p><strong>Github profile:</strong> <a href="https://github.com/yangmars88">GitHub</a></p>
                <p><strong>Linkedin profile:</strong><a href="https://www.linkedin.com/in/yangmars/">Linkedin</a></p>
            </div>
        );
    }
}

export default Contact;