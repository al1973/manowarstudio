import React from 'react';

const Form = () => (
   
<form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
  <label for="inputName">Name</label>
  <input type="text"   
         name="name" 
         class="form-control" 
         id="inputName" 
         placeholder="Enter your name"
         required="required">
  </input>
  <label for="inputEmail" required="required">Email Address</label>
  <input type="email" 
         name="email" 
         class="form-control" 
         id="inputEmail" 
         aria-describedby="emailHelp" 
         placeholder="Enter your email address">
  </input>
  <label for="message">Your Message</label>            
  <textarea
            class="form-control" 
            rows="5" 
            name="message" 
            id="message" 
            placeholder="Add your message here" required="">
  </textarea>
  
  <button type="submit">Send</button>

</form>

);

export default Form;
