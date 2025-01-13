import classesRow from './TableRow.module.css'

export function TableHeader() {
    // console.log(`Card():product`,product);

    return (
        <div className={classesRow.row}>
            <div className={classesRow.cell}>#</div>
            <div className={classesRow.cell}>Title</div>
            <div className={classesRow.cell}>Thumbnail</div>
            <div className={classesRow.cell}>Description</div>
        </div>
    )
}
export function TableRow({product}) {
    // console.log(`Card():product`,product);

    return (
        <div className={classesRow.row}>            
            <div className={classesRow.cell}>{product.id}</div>
            <div className={classesRow.cell}>{product.title}</div>
            <div className={classesRow.cell}>
                <img src={product.thumbnail} alt="" />
            </div>
            <div className={classesRow.cell}>{product.description}</div>
        </div>
    )
}