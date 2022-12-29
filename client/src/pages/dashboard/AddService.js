import React from 'react';
import {useForm} from "react-hook-form";

const AddService = () => {
const {register,handleSubmit,reset}=useForm()
const onSubmit=(data)=>{
   console.log(data);
   reset()

}
   return (
      <div className="hero min-h-screen bg-accent">
    
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className='text-center text-2xl'>Ad Service</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service</span>
            </label>
            <input type="text" placeholder="service" className="input input-bordered" 
            {...register("serviceName")} />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Charge</span>
            </label>
            <input type="text" placeholder="Service Charge" className="input input-bordered" 
            {...register("serviceCharge")}/>
         
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Ad Service</button>
          </div>
          </form>
        </div>
      </div>
    
  </div>
   );
};

export default AddService;