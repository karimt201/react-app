import Cards from "./Components/Cards"
import { data } from "./data"

export default function App(){
    const datashow = data.map((cs) => <Cards Title = {cs.title} desc = {cs.desc} />)
    return (
        <div>
            {datashow}
        </div>
    )
}