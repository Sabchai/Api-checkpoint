document.getElementById('fetchProduits')
.addEventListener('click',function(){

 
const URLAPI="https://jsonplaceholder.typicode.com/users"


axios.get(URLAPI)
.then( function(response){
    
const users = response.data  
console.log('users => ',response)

const userList = document.getElementById('product_list')
userList.innerHTML=''

users.forEach(function(el){
    const list = document.createElement('li')
    list.textContent = `${el.name} || ${el.email}`
    userList.appendChild(list)
})

}  )
.catch(err=>{
    console.log(err)
})


})