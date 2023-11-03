import './Footer.css'
import LogoImg from './img/logo.png'
import SupportIMG from './img/phone.png'
import CallsImg from './img/vector.png'
import LogoFacebook from './img/logo-facebook.png'
import LogoInstagram from './img/logo-instagram.png'
import LogoTwitter from './img/logo-twitter.png'
import LogoYouTube from './img/logo-youtube.png'

function Footer () {
   return (
      <div className='Footer'>
         <div className='Footer-block'>
            <div className="Info">
               <div className='Info-block'>
                  <img  className='Logo-img' src={LogoImg}/>
                  <p className='Info-block-text'>Чіп Чендж</p>
               </div>
               <div>
                  <p className='Info-text'>04128, м.Київ, вул. Хрещатик, 19<br/> Ліцензія НБУ №156<br/> Ⓒ ПАТ ЧіпЧендж, 2019-2023</p>
               </div>
            </div>
            <div className='Lists'>
               <div className='List'><a href="#">Послуги</a></div>
               <div className='List'><a href="#">Конвертер валют</a></div>
               <div className='List'><a href="#">Контакти</a></div>
               <div className='List'><a href="#">Задати питання</a></div>
            </div>
            <div className='Support' >
               <div>
                  <img src={SupportIMG}/>
               </div>
               <div className='Support-text'>
                  <div className='Support-text1'>3773</div>
                  <div className='Support-text2'>Цілодобова підтримка</div>
               </div>
            </div>
            <div className='Calls'>
               <div>
                  <img src={CallsImg}/>
               </div>
               <div className='Calls-text'>
                  <div className='Calls-text1'>8 800 111 22 33</div>
                  <div className='Calls-text2'>Безкожтовно для дзвінків в межах України</div>
               </div>
            </div>
            <div className='Logos'>
               <div><a href='#'><img src={LogoFacebook}/></a></div>
               <div><a href='#'><img src={LogoInstagram}/></a></div>
               <div><a href='#'><img src={LogoTwitter}/></a></div>
               <div><a href='#'><img src={LogoYouTube}/></a></div>
               
            </div>
         </div>
      </div>
      
   )
}
export default Footer