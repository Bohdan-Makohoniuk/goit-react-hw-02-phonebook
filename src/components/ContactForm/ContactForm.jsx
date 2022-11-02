import React, { Component } from 'module'

class ContactForm extends Component{
    // state = {
    //     contacts: [],
    //     name: ''
    // }

    // handleChange = e => {
    //     const { name, contacts } = e.currentTarget;
    //     this.setState({[name]:contacts});
    // };

    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.props.formSubmit
    // };
    // reset = () => {
    //     this.setState({name:'', contacts:''})
    // }

    // render() {
    //     return (
    //         <form onSubmit={this.handleSubmit}>
    //             <label>Name
    //         <input
    //             type="text"
    //             name="name"
    //             value={this.state.name}
    //             onChange={this.handleChange}
    //                 />
    //                 </label>
    //             <label>Contact
    //         <input
    //             type="text"
    //             name="contacts"
    //             value={this.state.contacts}
    //             onChange={this.handleChange}
    //                 />
    //             </label>
    //             <button type='submit'>add contact</button>
    //             </form>
    //     );
    // }  
}
   
export default ContactForm;