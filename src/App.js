import React from 'react';
import './app.css';

class App extends React.Component{
  
  constructor(props) {
    super(props);

    this.state = {
      newItem:" ",
      list:[] 
    }
  }

  updateInput(key, value){
    //update the state
    this.setState({
        [key]: value 
    })
  }
  addItem () {
    //create item with unique Id
    const newItem={
      id: 1 + Math.random(),
      value:this.state.newItem.slice()
    }
    //copy of current list
    const list = [...this.state.list];
    //add item to list
      list.push(newItem)
  
    // update the state and set to reset
    this.setState({
      list,
      newItem: " "
    });
    
  }
  deleteItem(id){
    //delete item
    const list = [...this.state.list];

    //filter deleted item
    const updatedList = list.filter(item => item.id !== id);
    this.setState({list: updatedList});
  }

  render(){
    return (
      <div className="App">
        <div>
          <h1 className='title'>MyTodoList</h1>
            <br/>
            <input
              type='text'
              placeholder='Type here...'
              value={this.state.newItem}
              onChange={e => this.updateInput('newItem', e.target.value)}
              className='input'
            />
            <button
              onClick={() => this.addItem()}
              className='button'
            >
            Add here
          </button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                    {item.value}
                    
                    <button  onClick={() => this.deleteItem(item.id)}>
                      X
                    </button>
                </li>
              )
            })}
          </ul>
        </div>

      </div>
    );
  };
}

export default App;
