export default function Cards(props){
    return <div style={{ }}>
        <div style={{
            backgroundImage : `url(${props.img})`,
            width : '300px',
            height : '300px',
            backgroundRepeat : 'no-repeat',
            backgroundSize : 'cover',
            backgroundPosition : 'center',
            borderRadius : '12px',
        }}></div>
        <div style={{
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'space-between',
            marginBottom : '0px',
        }}>
        <h1 style={{}}> {props.title}</h1>
        <h3 style={{ fontWeight : 'normal'}}>{props.rate}</h3>
        </div>
        <h3 style={{color : 'gray', marginTop : '0px'}}>{props.desc}</h3>
        <h3>{props.price} <span style={{fontWeight : 'normal'}}>night</span></h3>
    </div>
}