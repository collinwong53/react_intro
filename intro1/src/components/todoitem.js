import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class TodoItem extends Component {
    render() {
        let name = null;
        if(this.props.showAll){
            name = this.props.name;
        }else{
            name = <Link to={'/'+this.props.index}>{this.props.name}</Link>
        }
        return (
            <div className="App">
                <div className="todolabel">{name}</div>
                <input type="date" value={this.props.dueDate}/>
                {this.props.showAll ? <div className="todoDescription">{this.props.description}</div> : ''}     
            </div>
        )
    }
}

export default TodoItem