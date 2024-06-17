import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = ({title, description}) =>
{
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/cart");
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/media')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, []);

    const isCartNotEmpty = data.some(item => item.addedToCart === true);

    return(
        <div>
            <div className="mainpage">
                <header className="welcome">
                {title}
                </header>
                <button className={isCartNotEmpty ? "cartFull" : "cartEmpty"} onClick={() => handleButtonClick()}/>
            </div>
            <h2 className="find">{description}</h2>
        </div>

    )
    
}


export default Header