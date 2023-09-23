import React, { Component } from 'react';

class Form extends React.Component {
    initialState = {
        dia: '',
        disciplina:'',
        horarios: '',
    }
    state = this.initialState


    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){
        const{dia, disciplina, horarios} = this.state;
        return(
            <form>
                <label htmlFor="dia">Dias da Semana</label>
                <input type="text" 
                       name="dia" 
                       id="dia" 
                       value={dia} 
                       onChange={this.handleChange}></input>
                <label htmlFor="disciplina">Disciplina</label>
                <input type="text" 
                       name="disciplina" 
                       id="disciplina" 
                       value={disciplina} 
                       onChange={this.handleChange}></input>
                <label htmlFor="horarios">Horários</label>
                <input type="text" 
                       name="horarios" 
                       id="horarios" 
                       value={horarios} 
                       onChange={this.handleChange}></input>
                <input type="button" value="Enviar" onClick={this.submitForm}/>
            </form>
        )
    }
}
export default Form;