import css from './addContact.module.css';
import PropTypes from 'prop-types';

import { Component } from 'react';

class AddContact extends Component {
    state = {
        name: '',
        number: ''
    };

    handleFormChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        
        this.props.onFormSubmit({ ...this.state
            // name: this.state.name,
            // number: this.state.number
        });
        this.resetForm();
    };

    resetForm = () => {
        this.setState({name: ' ', number: ' '});
    };

    render() {  
        return (
            <div className={css.main}>
                {/* <h1 className={css.main_title}>Name</h1> */}
                <form className={css.form} onSubmit={this.handleFormSubmit}>
                    <label htmlFor=''>
                    <h1 className={css.main_title}>Name</h1>
                        <input
                        className={css.name_input}
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleFormChange}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. 
                            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                    <label htmlFor=''>
                    <h1 className={css.main_title}>Number</h1>
                        <input 
                            className={css.name_input}
                            type="tel"
                            name="number"
                            value={this.state.number}
                            onChange={this.handleFormChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>
                        <button type='submit' className={css.add_btn}>Add contact</button>
                </form>
            </div>
        )
    }
}

AddContact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    onFormSubmit: PropTypes.func.isRequired
}

export default AddContact;