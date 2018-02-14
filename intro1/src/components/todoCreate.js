import React, {Component} from 'react';
// import TodoItems from './todoitem';

class TodoCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            dueDate: '',
            description: ''
        }
        this.updateInput = this.updateInput.bind(this);
        this.saveNewItem = this.saveNewItem.bind(this);
    }
    componentDidUpdate(){
        console.log(this.state);
    }
    updateInput (event) {
        const elementName = event.target.getAttribute('name');
        const elementValue = event.target.value;
        const newState = {};
        newState[elementName] = elementValue;
        this.setState(newState);
        console.log(newState);
    }
    saveNewItem(){
        const newItem = {};
        for(let key in this.state){
            newItem[key] = this.state[key];
        }
        this.props.list.push(newItem);
        this.props.history.push('/',{});
    }
    render(){
        return(
            <div className="todoItem">
                <input onChange={this.updateInput} type="text" name="name" placeholder="enter the name" defaultValue={this.state.name}/>
                <label htmlFor="createDate">Due when?</label><input onChange={this.updateInput} type="date" name="dueDate" id="createDate" defaultValue={this.state.dueDate}/>
                <textarea name="description" onChange={this.updateInput} defaultValue={this.state.description}></textarea>
                <button onClick={this.saveNewItem}>Save</button>
            </div>
        );
    }
}

export default TodoCreate;