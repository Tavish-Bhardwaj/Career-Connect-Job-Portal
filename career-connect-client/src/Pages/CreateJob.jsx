import React from 'react'
import { useForm } from "react-hook-form"
const CreateJob = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    
    }
    

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        {/* form */}
        <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16 '>
        <form className='space-y-5 ' onSubmit={handleSubmit(onSubmit)}>
            {/* 1st row */}
     <div className="create-job-flex">
        <div className="lg:1/2 w-full">
            <label className=' block mb-2 text-lg' >Job Title</label>
            <input type="text" defaultValue={"Web Developer"} 
            {...register("jobTitle")}  className='create-job-input' />
        </div>
        <div className="lg:1/2 w-full">
            <label className=' block mb-2 text-lg' >Company Name</label>
            <input type="text" placeholder="Ex:Microsoft" 
            {...register("companyName")}  className='create-job-input' />
        </div>
     </div>
     {/* 2nd Row */}
    <div className="create-job-flex">
        <div className="lg:1/2 w-full">
            <label className=' block mb-2 text-lg' >Minimum Salary</label>
            <input type="text" placeholder="$20k"
            {...register("minPrice")}  className='create-job-input' />
        </div>
        <div className="lg:1/2 w-full">
            <label className=' block mb-2 text-lg' >Maximum Salary</label>
            <input type="text" placeholder="$100k"
            {...register("maxPrice")}  className='create-job-input' />
        </div>
     </div> 
            {/* 3rd row */}
    <div className="create-job-flex">
        <div className="lg:1/2 w-full">
            <label className=' block mb-2 text-lg' >Salary Type</label>
            <select {...register("salaryType")} className='create-job-input'>
        <option value="">Choose your Salary</option>
        <option value="Hourly">Hourly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
        </div>
        <div className="lg:1/2 w-full">
            <label className=' block mb-2 text-lg' >Job Location</label>
            <input type="text" placeholder="Ex: New York"
            {...register("jobLocation")}  className='create-job-input' />
        </div>
     </div> 
        
      <input type="submit" className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />
    </form>

        </div>
      
    </div>
  )
}

export default CreateJob
