

export default function burgerBtn({isOnTouch,setisOnTouch}) {
   let handleClick=()=>{
      console.log("garrer");
      setisOnTouch(!isOnTouch)
   }
   return (
      
     <button className="burger_btn" onClick={handleClick}>
     
         <div className="burger_sq"></div>
         <div className="burger_sq"></div>
         <div className="burger_sq"></div>
  
      </button>
   );
}