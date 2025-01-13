import ContentLayout from './ContentLayout'
import ContentFilter from './ContentFilter'
import classes from './Header.module.css'

const Header = ({setLayout, search, setSearch}) => {
    return (
        <div className={classes.container}>
            <ContentFilter search={search} setSearch={setSearch} />
            <ContentLayout setLayout={setLayout} />
        </div>
    )
}

export default Header;