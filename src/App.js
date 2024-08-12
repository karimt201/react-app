import Cards from "./Components/Cards"
import { data } from "./data"

export default function App(){
    const datashow = data.map((cs , index) =>
    <Cards 
        img = {cs.img}
        title = {cs.title}
        desc = {cs.desc}
        rate = {cs.rate}
        price = {cs.Price}
    
    />)
    return (
        <div style={{
            display : "flex",
            alignItems : "center",
            justifyContent : "center",
            gap : '20px',
            flexWrap : 'wrap',
            }}>
            {datashow}
        </div>
    )
}