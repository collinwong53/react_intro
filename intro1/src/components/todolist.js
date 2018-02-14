import React, {Component} from 'react';
import TodoItem from './todoitem'
import {Link} from 'react-router-dom'

class TodoList extends Component {
    render() {
        if(this.props.match.params.index!==undefined){
            const index = parseInt(this.props.match.params.index);
            const item = this.props.list[index];
            return (
            <div>
                <TodoItem index={index} key={index} showAll={true} {...item}/>
                <Link to="/">Back</Link>
            </div>)
        }else{
            return (
                this.props.list.map((item,index) => <TodoItem index={index} key={index} {...item}/>)
            )
        }
    }
}

export default TodoList