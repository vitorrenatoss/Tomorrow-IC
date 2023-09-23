import logo from './logo.svg';
import './index.css';
import React, { Component } from 'react';
import Table from './Table2';
import Form from './Form';

class App extends Component {
  state = {
    agenda: [
      
    ]
  }
  removerAluno = (index) => {
    const {agenda} = this.state
    this.setState(
      {
        agenda: agenda.filter((aluno, i) => {
          return i != index
          }
        )
      }
    )
  }
  handleSubmit = (agendaDisc) => {
    this.setState({
      agenda: [...this.state.agenda, agendaDisc]
    })
}
  render() {
    const {agenda} = this.state
    return (
      <div className="container">
        <h1 className='text-center'>Agenda Semanal</h1>
        <h2>"Monte sua grade horária"</h2>
        <Table agenda={agenda}
          removerAluno={this.removerAluno} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
} 
export default App;
