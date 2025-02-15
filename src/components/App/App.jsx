import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'
import classes from './App.module.css'
import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'
import {LayoutEnum, isLayoutList, isLayoutTable} from '../../utils'
import Product from '../../services/product/product'

function App() {
  const [products, setProducts] = useState([]);
  // const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(30);
  const [total, setTotal] = useState(0);
  const [layout, setLayout] = useState(LayoutEnum.LIST);
  const [search, setSearch] = useState('');
  const isFirstTimeRef = useRef(true);
  // console.log(`App: render started after setting initial states. isFirstTimeRef`, isFirstTimeRef);


  const loadMore = (entry) => {
    // console.log(`loadMore() called. existing products:entry`,products,entry);
    //check if it called first time to workaround IntersectionObserver issue reporting isIntersecting true first time
    if (isFirstTimeRef.current) {
      isFirstTimeRef.current = false;
      // console.log(`loadMore() called first time so setting it to false and returning.`);
      return;
    }
    if (products.length < total && !isFirstTimeRef.current && search.length === 0) {
      Product.getProducts(products, limit).then((loadedProducts) => {
        // console.log(`loadMore():getProducts():loaded products`,loadedProducts);
        if (loadedProducts.data) {
          if (loadedProducts?.data?.products[0]?.title) {
            setProducts([...products, ...loadedProducts.data.products]);
            setTotal(loadedProducts.data.total);
          }
        } else {
          alert(`Could not get products. `+loadedProducts.msg);
        }
      });
    }
  };

  const productSearch = (products, searchText) => {
    if (isLayoutList(layout)) {
      // console.log(`productSearch(): style is layout.list. products:searchText`,products,searchText);
      const filtered = products.filter((product,i) => product.title.includes(searchText));
      return filtered;
    } else if (isLayoutTable(layout)) {
      const filtered = products.filter((product,i) => product.title.includes(searchText) || product.description.includes(searchText));
      return filtered;
    } else {
      throw new Error(`Unexpected layout type ${layout}`);
    }
  }
  useEffect(() => {
    // console.log(`App:useEffect() called. current products length ${products.length}`);
    Product.getProducts(products, limit).then((loadedProducts) => {
      // console.log(`App:useEffect():getProducts():initial:loaded products`,loadedProducts);
      if (loadedProducts.data) {
        setProducts(loadedProducts.data.products);
        setTotal(loadedProducts.data.total);
      } else {
        alert(`Could not get products. `+loadedProducts.msg);
      }
    });

    return () => {
      // console.log(`App:unmounting useEffect: current products length ${products.length}`);
      if (products.length > 0) {
        // console.log(`App:unmounting useEffect: current products not empty`,products);
        setProducts([]);
      }
    }
  }, []);

  let productsToDisplay = null;
  if (search.length > Product.startStopSearchTextLength) {
    productsToDisplay = productSearch(products, search);
    // console.log(`App:productSearch() returned`,productsToDisplay);
  }

  // console.log(`App:before render. layout: ${layout} search:current products`,search,structuredClone(products));
  return (
    <div className={classes.container}>
      <label className={classes.title}>Product List</label>
      <Header setLayout={setLayout} search={search} setSearch={setSearch} />
      <Main layout={layout} products={productsToDisplay ?? products} loadMore={loadMore} />
      <Footer />
    </div>
  )
}

export default App
