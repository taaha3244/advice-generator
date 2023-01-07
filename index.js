
const dice=document.querySelector('.dice-container');
dice.addEventListener('click', async function (e){
   
   
   
        const randomAdvice=document.querySelector('.advice');
    const adviceNumber=document.querySelector('.ad-Num');
        const res=await axios.get('https://api.adviceslip.com/advice')
        const newAdvice=res.data.slip.advice
        const newAdviceNumber=res.data.slip.id
        randomAdvice.innerHTML=newAdvice
        adviceNumber.innerHTML=newAdviceNumber
       
    
    }

);