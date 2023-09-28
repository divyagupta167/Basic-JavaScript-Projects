const form=document.querySelector('form');

// this usecase will give you empty value
// const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if (height === " " || height<0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    }
   else if (weight === " " || weight<0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        if (bmi < 18.6) {
            results.innerHTML=`<span>Your BMI is ${bmi} <br/><br/>
             Your are  Under Weight <span/>`;
        } else if((bmi > 18.6) || (bmi < 24.9) ) {
            results.innerHTML=`<span>Your BMI is ${bmi} <br/><br/>
                                 You Weight is Normal<span/>`; 
        }else{
            results.innerHTML=`<span>Your BMI is ${bmi} <br/><br/>
                                 You are Over Weight<span/>`;
        }
        
        
    }
    
})