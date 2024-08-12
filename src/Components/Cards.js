export default function Cards(props){
    return <div style={{width : '400px'}}>
        <img src={props.img} style={{width : '400px'}} alt = 'city' />
        <div style={{
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'space-between'
        }}>
        <h1 style={{marginBottom : '0px'}}> {props.title}</h1>
        <h3>{props.rate}</h3>
        </div>
        <h3 style={{color : 'gray', marginTop : '0px'}}>{props.desc}</h3>
        <h3>{props.price} night</h3>
    </div>
}