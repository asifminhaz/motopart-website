import React from 'react';

const Blogs = () => {
          return (
                    <div>
                       <h2 className='text-center font-bold text-4xl'>This is Blogs</h2>      
                       <div class="card w-96 bg-base-100 shadow-xl">
  
  <div class="card-body">
    <h2 class="card-title">
     
      <div class="text-center">How will you improve the performance of a React Application??</div>
    </h2>

    <p>Keeping component state local where necessary.
Memoizing React components to prevent unnecessary re-renders.
Code-splitting in React using dynamic import()
Windowing or list virtualization in React.
Lazy loading images in React.</p>
    
    </div>
  </div>
     <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">
     
      <div class="text-center">What are the different ways to manage a state in a React application??</div>
    </h2>

    <li>1.Local state..</li>
    <li>2.Global state.</li>
    <li>3. Server state.</li>
    <li>4.URL state</li>
    
    </div>
  </div>
     <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">
     
      <div class="text-center">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name??</div>
    </h2>
   <p> I can use filter or inclueds for find the find the products by name .its very simple function  </p>
    
    </div>
  </div>
     <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">
     
      <div class="text-center">How does prototypical inheritance work???</div>
    </h2>
    <p>Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype</p>
    
    </div>
  </div>
     <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">
     
      <div class="text-center">What is a unit test? Why should write unit tests???</div>
    </h2>
    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process</p>
    
    </div>
  </div>
</div> 
     
          );
};

export default Blogs;