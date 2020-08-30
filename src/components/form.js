import React from 'react';


const Form = () => (
   
<form accept-charset="UTF-8" 
      name= "contact"
      method="POST" 
      data-netlify="true"
      target="_blank">
      
  <label for="inputName">Name
  <input type="text"   
         name="name" 
         class="form-control" 
         id="inputName" 
         placeholder="Enter your name"
         required="required">
  </input>
  </label>
  <label for="inputEmail" required="required">Email address
  <input type="email" 
         name="email" 
         class="form-control" 
         id="inputEmail" 
         aria-describedby="emailHelp" 
         placeholder="Enter your email address">
  </input>
  </label>
  <label for="message">Your Message
  <textarea class="form-control" 
            rows="5" 
            name="message" 
            id="message" 
            placeholder="Add your message here." required="">
  </textarea>
  </label>
  <button type="submit">Send</button>

</form>

);

export default Form;
