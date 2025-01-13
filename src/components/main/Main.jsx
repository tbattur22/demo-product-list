import {useEffect, useRef} from 'react'
import classesList from './styles/List.module.css'
import classesTable from './styles/Table.module.css'
import ProductCard from '../ProductCard/Card'
import {TableHeader, TableRow} from '../ProductTable/Table'
import {isLayoutList} from '../../utils'

const styleMap = {
  'classesList': classesList,
  'classesTable': classesTable
}
const Main = ({layout, products, loadMore}) => {
    console.log(`Main: layout: ${layout}, products`,products);
    const curStyle = styleMap[`classes${layout}`];
    const myRef = useRef(null);

    const callbackFunction = (entries) => {
        console.log(`Main:callbackFunction():entries`,entries);
        const [entry] = entries;
        if (entry.isIntersecting) {
            console.log(`callbackFunction(): entry.isIntersecting true so calling loadMore`,entry);
            loadMore(entry);
        }
    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    }

    useEffect(() => {
        console.log(`Main():useEffect() called.`);
        const observer = new IntersectionObserver(callbackFunction, options);
        if (myRef.current) {
            console.log(`Main():useEffect():myRef.current is true, so start observing`);
            observer.observe(myRef.current);
        }

        return () => {
            if (myRef.current) observer.unobserve(myRef.current);
        }
    }, [myRef.current, options])

    // const showMyRef = <div className="after-last-product" ref={myRef}></div>
    let content = null, showMyRef = null;
    if (products.length > 0) {
        showMyRef = <div className="after-last-product" ref={myRef}></div>
    }
    if (isLayoutList(layout)) {
        content =
            products?.map((product, i) => {
                return <ProductCard key={product.id} product={product}></ProductCard>
            })
    } else {
        const tableRows = products?.map((product, i) => {
            return <TableRow key={product.id} product={product}></TableRow>
        })
        console.log(`Main:tableRows:`,tableRows);
        tableRows.unshift(<TableHeader key={0} />);
        console.log(`Main:tableRows: final`,tableRows);

        content = tableRows
            
    }
    return (
        <div className={curStyle.container}>
            {content}
            {showMyRef && showMyRef}
        </div>
    )
}

export default Main;