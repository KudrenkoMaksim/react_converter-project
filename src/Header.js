import LogoImg from './img/logo.png'
import ImgHeader from './img/Vector.svg'
import './Header.css'


function Header () {
   return (

      <div className='Header'>
         <div className='Header-block'>
            <div className="left-header-size">
               <div className="left-size">
                  <div className='logo-group'>
                     <img className='logo' src={LogoImg} alt="logo"/>
                     <p className='logo-text'>Чіп Чендж</p>
                  </div>
                  <div className='link-group'>
                     <a href='#'>Послуги</a>
                     <a href='#'>Конвертер валют</a>
                     <a href='#'>Контакти</a>
                     <a href='#'>Задати питання</a>
                  </div>
               </div>
            </div>
            <div className="right-header-size">
               <img className="phone" src={ImgHeader}/>
               <a href="#" className="right-header-text">Особистий кабінет</a>
            </div>
         </div>
      </div>
   )
}
export default Header