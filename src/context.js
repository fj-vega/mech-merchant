import React, { Component } from 'react';
// State management using Context API
import { storeProducts, detailProduct } from './data';


const ProductContext = React.createContext();

// Provider
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
    productsFilter: {
      sortBy: 'date',
      form: 'all',
      switches: 'all',
    },
    searchQuery: '',
    alertPurchase: false
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];

    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [ ...products, singleItem ];
    });

    // Filtering rules (SearchBar)
    const { sortBy, form, switches } = this.state.productsFilter;

    if (sortBy !== 'date') {
      sortBy === 'asc'
        ? products.sort((a, b) => a.price - b.price)
        : products.sort((a, b) => b.price - a.price);
    }

    if (form !== 'all') {
      products = products.filter(item => item.form === form);
    }

    if (switches !== 'all') {
      products = products.filter(item => item.switches === switches);
    }

    // Search function, if searchQuery is empty, all products are shown
    if (this.state.searchQuery) {
      products = products.filter(
        item => item.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
      );
    }

    this.setState({ products });
  }

  getItem = id => {
    return this.state.products.find(item => item.id === id);
  }

  handleDetail = id => {
    this.setState({
      detailProduct: this.getItem(id)
    });
  }

  addToCart = id => {
    const product = this.state.products.find(product => product.id === id);
    product.inCart = true;
    product.count = 1;
    product.total = product.price;

    this.setState({
      cart: [...this.state.cart, product]
    }, this.addTotals);
  }

  openModal = id => {
    this.setState({
      modalOpen: true,
      modalProduct: this.getItem(id)
    });
  }

  closeModal = () => {
    this.setState({
      modalOpen: false
    });
  }

  changeQuantity = (mode, id) => {
    const cart = [ ...this.state.cart ];

    const product = cart.find(item => item.id === id);

    mode === 'decrement' ? product.count-- : product.count++;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.price * product.count;
      this.setState({ cart }, this.addTotals);
    }
  }

  removeItem = id => {
    const cart = this.state.cart.filter(item => item.id !== id);
    const products = [ ...this.state.products ];
    
    const removedProduct = products.find(item => item.id === id);
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState({ cart, products }, this.addTotals);
  }

  clearCart = () => {
    this.setState({
      cart: []
    }, () => {
      this.setProducts();
      this.addTotals();
    });
  }

  addTotals = () => {
    let cartSubtotal = 0;

    this.state.cart.map(item => cartSubtotal += item.total);

    const tempTax = cartSubtotal * 0.21;
    const cartTax = parseFloat(tempTax.toFixed(2));

    const cartTotal = parseFloat((cartSubtotal + cartTax).toFixed(2));

    this.setState({ cartSubtotal, cartTax, cartTotal });
  }

  // Products filter (SearchBar)
  handleFilter = e => {
    const productsFilter = { ...this.state.productsFilter };
    
    productsFilter[e.target.name] = e.target.value;

    this.setState({ 
      productsFilter 
    }, this.setProducts);
  }

  searchProduct = e => {
    this.setState({
      searchQuery: e.target.value
    }, this.setProducts);
  }

  flashAlertPurchase = () => {
    this.setState({
      alertPurchase: true
    }, () => {
      setTimeout(() => this.setState({
        alertPurchase: false
      }), 2000);
    });
  }

  render() {
    return (
      <ProductContext.Provider 
        value={{ 
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          changeQuantity: this.changeQuantity,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          handleFilter: this.handleFilter,
          searchProduct: this.searchProduct,
          flashAlertPurchase: this.flashAlertPurchase
        }}>
        { this.props.children }
      </ProductContext.Provider>
    )
  }
}

// Consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
