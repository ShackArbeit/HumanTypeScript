import { Link } from 'react-router-dom';
import {useState} from 'react'
import style from '../CssModules/Header.module.css'


const Header = () => {
  const[isOpen,setIsOpen]=useState(false)
  return (
   <header className={style.navbar}>
   <a href='https://www.google.com.tw/?gws_rd=ssl'>
    <img src='https://funstudynestcamp.com/images/logo_text.png?v=3'
         className={style.brand}/>
   </a>
  <ul className={isOpen?style.NavMenu:style.Nav}>
    <li className={style.Navitem}>
      <Link className={style.Navlink} to=''>首頁</Link>
    </li>
    <li className={style.Navitem}>
      <Link className={style.Navlink} to=''>什麼是人類圖</Link>
    </li>
    <li className={style.Navitem}>
      <Link className={style.Navlink} to=''>認識Jerome</Link>
    </li>
    <li className={style.Navitem}>
      <Link className={style.Navlink} to=''>體驗回饋</Link>
    </li>
    <li className={style.Navitem}>
      <Link className={style.Navlink} to=''>立即預約</Link>
    </li>
  </ul>
  <a className={style.menuToggle}
  onClick={()=>setIsOpen(!isOpen)}
  >
						<span></span>
						<span></span>
						<span></span>
					</a>
   </header>
  );
};

export default Header;