const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
   if(weight === "" || isNaN(weight)){
    return result.innerHTML = "กรอกนํ้าหนักไม่ถูกต้อง"
   }else if(height === "" || isNaN(height)){
    return result.innerHTML = "กรอกนํ้าหนักของคุณ"
   }else{
    height = height/100
    let bmi = (weight/Math.pow(height,2)).toFixed(2)
      if(bmi<18.5){
        return result.innerHTML = 'ผลลัพธ์ =  ผอมเกินไป'
      }else if(bmi>=18.5 && bmi<=24.9){
        return result.innerHTML = 'ผลลัพธ์ =  ปกติ'
      }else if(bmi>=25 && bmi<=29.9){
        return result.innerHTML = 'ผลลัพธ์ =  อ้วน'
      }else{
        return result.innerHTML = 'ผลลัพธ์ =  อ้วนเกินไป'
      }
   }
})