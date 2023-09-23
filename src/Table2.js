import React, {Component} from 'react'
const TableHeader = () =>{
    return(
        <thead>
                <tr>
                    <th>Dias da Semana</th>
                    <th>Disciplina</th>
                    <th>Horários</th>
                </tr>
            </thead>
    )
}
const TableBody = (props) =>{
    const rows = props.agenda.map( (row,index) => {
        return (
            <tr key={index}>
                <td>{row.dia}</td>
                <td>{row.disciplina}</td>
                <td>{row.horario}</td>
                <td>
                    <button onClick={()=> props.removerAluno(index)}>
                        Apagar
                        </button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>
            {rows}       
        </tbody>
    )
}
class Table extends Component{
    render(){ 
        const {agenda, removerAluno} = this.props
        return(
            <table>
                <TableHeader />
                <TableBody agenda={agenda} 
                removerAluno={removerAluno}/>            
            </table>)
    } 
} 
export default Table

