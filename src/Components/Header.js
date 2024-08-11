function Header() {
    return(
        <div>
            <ul>
                <div>
                <li className='li'>Home</li>
                <li>About</li>
                <li>Contect</li>
                <li>Career</li>
                </div>
                <img src={require('../cov.jpg')}
                alt="logo"
                style={{width : '300px' , marginRight : '500px' , marginLeft : '400px'}}
                
                />
            </ul>
        </div>
    );
}
export default Header ;