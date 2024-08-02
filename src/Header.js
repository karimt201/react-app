function Header() {
    return(
        <div>  
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contect</li>
                <li>Career</li>
                <img src={require('./cov.jpg')} alt="logo"/>
            </ul>
        </div>
    );
}
export default Header ;