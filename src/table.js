import React from 'react';
import ReactDOM from 'react-dom';
// import SearchBar from './searchbar.js';
import ProductTable from './producttable.js';
import EditableCell from './editablecell.js'
import ProductRow from './productrow.js';


class Products extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.filterText = "";
    this.state.products = [
      {
        id: 1,
        category: 'Mobile',
        price: '150$',
        qty: 12,
        name: 'iPhone 6s'
      }, {
        id: 2,
        category: 'Mobile',
        price: '190$',
        qty: 12,
        name: 'iPhone 7s'
      }, {
        id: 3,
        category: 'Mobile',
        price: '550$',
        qty: 21,
        name: 'Samsung note 9'
      }, {
        id: 4,
        category: 'Mobile',
        price: '550$',
        qty: 12,
        name: 'Samsung 10 plus'
      }, {
        id: 5,
        category: 'Tablet',
        price: '399$',
        qty: 12,
        name: 'iPad air'
      }, {
        id: 6,
        category: 'Tablet',
        price: '199$',
        qty: 23,
        name: 'iPad pro'
      }
    ];

  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  handleRowDel(product) {
    var index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      name: "",
      price: "",
      category: "",
      qty: 0
    }
    this.state.products.push(product);
    this.setState(this.state.products);

  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
var products = this.state.products.slice();
  var newProducts = products.map(function(product) {

    for (var key in product) {
      if (key == item.name && product.id == item.id) {
        product[key] = item.value;

      }
    }
    return product;
  });
    this.setState({products:newProducts});
  //  console.log(this.state.products);
  };
  render() {

    return (
      <div className="container">
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
      </div>
    );

  }

}

class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div className="form-group search_part">
        <input type="text" className="form-control" placeholder="Search.." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
      </div>

    );
  }

}

export default Products;



