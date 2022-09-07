const forma = document.querySelector('form')
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const btn = document.querySelector('#btn')

forma.addEventListener('submit',function(e){
    e.preventDefault()
    // let alert = []
    if(input1.value === '' || input1.value == null ){
        return alert('Please write your e-mail address')
    }
   
       if(input2.value === '' || input2.value == null){
        return alert('Invalid password')
       }else if(input2.value.length < 8){
        return alert('Invalid password')
       }else{
        return this.submit()
       }
        
       

})