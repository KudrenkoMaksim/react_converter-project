
import './ConverterStory.css'
import { useState } from 'react'


function ConverterStory (props) {
   console.log(props)

   const [isDataStory, setIsDataStory]=useState(true)
   
   
   function Delete () {  
      setIsDataStory(false)
      window.location.reload();
   }
   
   return (
      <div className="ConverterStory">
         <div className='ConverterStory-block'>
            <div className="story">
               <div className='ConverterStory-text'>
                  <p>Історія конвертації</p>
                  <div><button className="delete-story" onClick={Delete}>Очистити історію</button></div>
               </div>
               
               <div className='story-block'>
               {isDataStory && props.dataStory.map((item,index)=>(
                  <div key={index} className='show-story'>
                     {item.data} 
                     {'   '}
                     {item.valueLeft}
                     {' '}
                     {item.currencyLeft}
                     {' -> '}
                     {item.valueRight}
                     {' '}
                     {item.currencyRight}
                  </div>
               )).reverse()}
               </div>
               
               
            </div>
            
         </div>
         
      </div>
   )
}
export default ConverterStory