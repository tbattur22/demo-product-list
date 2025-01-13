import classes from './Layout.module.css'
import {Layouts} from '../../../utils'

const ContentLayout = ({setLayout}) => {
    return (
        <div className={classes.container}>
            <label htmlFor="layoutStyle">Content Layout</label>
            <select name="style" id="layoutStyle" onChange={(e) => setLayout(e.target.value)}>
                {
                    Layouts.map((layout,i) => {
                        return <option key={i} value={layout}>{layout}</option>
                    })
                }
            </select>
        </div>
    )
}

export default ContentLayout;