export default function Cards(props){
    return <div>
        <img src={props.img} alt = 'city' />
       <h1> {props.title}</h1>
        <h3>{props.desc}</h3>
        <h3>{props.rate}</h3>
        <h3>{props.price}</h3>
    </div>
}