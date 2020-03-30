import React, { Component } from "react";
import ListItem from "./ListItem";
import "./ListItems.css";
import { addItem } from "../redux/actionCreater";
import { connect } from "react-redux";
class ListItems extends Component {
  state = {
    items: [
      { id: 0, name: "mahmoud", age: 35 },
      { id: 1, name: "ahmed", age: 26 },
      { id: 2, name: "mostafa", age: 34 }
    ]
  };
  handleDelete = Id => {
    let { items } = this.state;
      items = items.filter(c => c.id !== Id);
    this.setState({ items });
  };
 displayItems = () => {
    let { items } = this.state;
   
    return items.length? items.map(item => {
      return (
        <ListItem key={Math.random()} item={item} onDelete={this.handleDelete} />
      );
    }) :<p className='item-row info'>there no item to show</p>
    ;
  };
    handleSubmit = (event) => {
        event.preventDefault();
        let { items } = this.state;
        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;
        let id = items.length;
        items = [...items,{ id,name, age }];
        document.getElementById('name').value = '';
        document.getElementById('age').value = null;
        if(age>0 && age<60 && name.length>2)
       this.setState({items})
  }
  render() {
    return (
        <div className='container'>
        <h1>todo app {this.props.item}</h1>
        <button onClick={this.props.add}>chage</button>
                  <div className="table">
          <div className="item-row">
            <p className='name-cell head'>name</p>
            <p className='age-cell head'>age</p>
            <p className='action-cell head'>action</p>
          </div>
                {this.displayItems()}
                <form className='item-row' onSubmit={this.handleSubmit}>
                    <input type='text'
                        className='name-cell'
                        id='name' placeholder='Enter you name'
                    />
                    <input type='number'
                        className='age-cell'
                        id='age' placeholder='Enter you age'
                    />
                     <input type='submit' value='Add todo'
                        className='action-cell'
                    />
                </form>
        
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    item:state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    add: () => {
      dispatch(addItem())}
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (ListItems);
