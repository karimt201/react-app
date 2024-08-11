import Cards from "./Components/Cards"
import { data } from "./data"

export default function App(){
    const datashow = data.map((cs) => <Cards 
    img = {cs.img} 
    title = {cs.title}
    desc = {cs.desc}
    rate = {cs.rate}
    price = {cs.Price}
    
    />)
    return (
        <div>
            {datashow}
        </div>
    )
}