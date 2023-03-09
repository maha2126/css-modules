import allStyles from './grid.module.css'

const Grid = ({users}) => {

    return <div>
        <div className={allStyles.items}>
            {
                users.map((elm,i) => {
                    return <div key={i}>
                        <img src={elm.picture.large}/>
                        <h3>{elm.name.first}{elm.name.last}</h3>
                    </div>
                })
            }
        </div>
    </div>
}

export default Grid