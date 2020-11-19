  const submitform = (e) =>
  {
     e.preventDefault()
  
      email = getinputval('registerEmail')
      username = getinputval('usernamesignup')
      spass = getinputval('registerPassword')
      cspass = getinputval('registerConfirmPassword')
     
     console.log(username)
     console.log(spass)
     // savemessage(name,pwd)
  
  }
  
 
  
  document.getElementById('reg').addEventListener('submit',submitform)
 
  
  getinputval = (id) => document.getElementById(id).value;