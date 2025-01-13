import {useState} from 'react'
import { SearchSvgIcon } from '../../icons/search'
import classes from './index.module.css'
import { handleSearchInput } from '../../../services/product/model/search'

const ContentFilter = ({search, setSearch}) => {
    const [curInputValue, setCurInputValue] = useState('');
    console.log(`ContentFilter(${search}):`);
    const handleSearch = (ev) => {
        handleSearchInput(ev.target.value.trim(), search, setCurInputValue, setSearch);
    }

    return (
        <div className={classes.container}>
            <SearchSvgIcon />
            <input type="text" value={curInputValue} placeholder='search' onChange={handleSearch} />
        </div>
    )
}

export default ContentFilter;