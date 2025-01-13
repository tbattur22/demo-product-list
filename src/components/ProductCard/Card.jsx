import classes from './Card.module.css'

const Card = ({product}) => {
    // console.log(`Card():product`,product);

    return (
        <div className={classes.container}>
            <label>{product.title} ({product.id})</label>
            <img src={product.thumbnail} alt="" />
        </div>
    )
}

export default Card;