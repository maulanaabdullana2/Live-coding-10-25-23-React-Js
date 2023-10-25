import { useState } from 'react';
import './Menu.css';

function Menu(props){
  const [kelas,setKelas] = useState(true)
  console.log(props);
    console.log(props.props1);
    console.log(props.props2);

    const clickHeandler = ()=>{
      setKelas(!kelas)
    }
    return(
        <ul>
          <h1>{kelas?"Fsw luar biasa":"Fsw Introvert"}</h1>
          <button onClick={clickHeandler}>klik</button>
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">News</a></li>
        <li><a href="contact.asp">Contact</a></li>
        <li><a href="about.asp">About</a></li>
      </ul>
    )
}


export default Menu;