import React from 'react';
import BucketGirl from '../../assets/images/bucketgirl.png'

const Landing = () => {
   return (
      <>
       <div class="hero h-screen lg:h-[60vh] bg-accent mt-16 ">
      <div class="hero-content flex-col lg:flex-row ">   
        <div>
         <p className='text-xl'>Best quality</p>
          <h1 class="text-5xl font-bold">Professional Cleaning Service!</h1>
          <p class="py-6 max-w-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
       <div className='h-[60vh] shrink-0'>
       <img src={BucketGirl} class="h-full" alt='' />
       </div>
      </div>
    </div>
    <div className='rounded-xl mx-auto mt-[-50px] z-50 shadow-lg p-10 w-5/6 bg-neutral'>
      <h1 >Get Free Estimate</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      <input type="text" placeholder="Type here" class="input input-bordered  w-full" />
      <input type="text" placeholdear="Type here" class="input input-bordered w-full" />
      <input type="text" placeholder="Type here" class="input input-bordered  w-full" />
      <input type="text" placeholder="Type here" class="input input-bordered  w-full" />
      <input type="text" placeholder="Type here" class="input input-bordered  w-full" />
      <input type="text" placeholdear="Type here" class="input input-bordered w-full" />
      <input type="text" placeholder="Type here" class="input input-bordered  w-full" />
      <input type="text" placeholder="Type here" class="input input-bordered  w-full" />
      </div>

    </div>
      </>
     
   );
};

export default Landing;