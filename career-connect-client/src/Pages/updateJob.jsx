import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable'
import { useState } from 'react'


const updateJob = () => {
    const {id}= useParams();
    // console.log(id);
    const {_id, jobTitle, companyName, minPrice, maxPrice, salaryType, jobLocation, postingDate, experienceLevel, companyLogo, employmentType, description, postedBy, skills} = useLoaderData();
    const [selectedOption, setSelectedOption] = useState(null);
    const {
      register,
      handleSubmit, reset,
      
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      data.skills = selectedOption;
      // console.log(data);
      fetch(`http://localhost:5000/update-job/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json"},
      body: JSON.stringify(data) ,
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if(result.acknowledged === true ){
              alert("Job Updated Successfully!")
          }
          reset()
        });
    };
    const options = [
      { value: "Javascript", label: "Javascript" },
      { value: "C++", label: "C++" },
      { value: "HTML", label: "HTML" },
      { value: "CSS", label: "CSS" },
      { value: "React", label: "React" },
      { value: "Node", label: "Node" },
      { value: "MongoDB", label: "MongoDB" },
      { value: "Redux", label: "Redux" },
      { value: "TypeScript", label: "TypeScript" },
    ];
  
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
    {/* form */}
    <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16 ">
      <form className="space-y-5 " onSubmit={handleSubmit(onSubmit)}>
        {/* 1st row */}
        <div className="create-job-flex">
          <div className="lg:1/2 w-full">
            <label className=" block mb-2 text-lg">Job Title</label>
            <input
              type="text"
              defaultValue={jobTitle}
              {...register("jobTitle")}
              className="create-job-input"
            />
          </div>
          <div className="lg:1/2 w-full">
            <label className=" block mb-2 text-lg">Company Name</label>
            <input
              type="text"
              defaultValue={companyName}
              placeholder="Ex:Microsoft"
              {...register("companyName")}
              className="create-job-input"
            />
          </div>
        </div>
        {/* 2nd Row */}
        <div className="create-job-flex">
          <div className="lg:1/2 w-full">
            <label className=" block mb-2 text-lg">Minimum Salary</label>
            <input
              type="text"
              defaultValue={minPrice}
              placeholder="$20k"
              {...register("minPrice")}
              className="create-job-input"
            />
          </div>
          <div className="lg:1/2 w-full">
            <label className=" block mb-2 text-lg">Maximum Salary</label>
            <input
              type="text"
                defaultValue={maxPrice}
              placeholder="$100k"
              {...register("maxPrice")}
              className="create-job-input"
            />
          </div>
        </div>
        {/* 3rd row */}
        <div className="create-job-flex">
          <div className="lg:1/2 w-full">
            <label className=" block mb-2 text-lg">Salary Type</label>
            <select {...register("salaryType")} className="create-job-input" >
              <option value={salaryType}>salaryType</option>
              <option value="Hourly">Hourly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <div className="lg:1/2 w-full">
            <label className=" block mb-2 text-lg">Job Location</label>
            <input
              type="text"
                defaultValue={jobLocation}
              placeholder="Ex: New York"
              {...register("jobLocation")}
              className="create-job-input"
            />
          </div>
        </div>
        {/* 4th row */}
        <div className="create-job-flex">
          <div className=" lg:1/2 w-full">
            <label className=" block mb-2 text-lg">Job Posting Date</label>
            <input
              type="date"
                defaultValue={postingDate}
              placeholder="2024-01-23"
              {...register("postingDate")}
              className="create-job-input"
            />
          </div>

          <div className="lg:1/2 w-full">
            <label className=" block mb-2 text-lg">Experience Level</label>
            <select
              {...register("experienceLevel")}
              className="create-job-input"
            >
              <option value={experienceLevel}>{experienceLevel}</option>
              <option value="Any Experience">No Experience</option>
              <option value="Hourly">Internship</option>
              <option value="Work remotely">Work remotely</option>
            </select>
          </div>
        </div>

        {/* 5th row */}
        <div>
          <label className=" block mb-2 text-lg">Required Skill Sets:</label>
          <CreatableSelect
            defaultValue={skills}
            onChange={setSelectedOption}
            options={options}
            isMulti
            className="create-job-input py-4"
          />
        </div>

        {/* 6th row */}
        <div className="create-job-flex">
          <div className=" lg:1/2 w-full">
            <label className=" block mb-2 text-lg">Company Logo</label>
            <input
              type="url"
                defaultValue={companyLogo}
              placeholder="Paste your company logo URL: "
              {...register("companyLogo")}
              className="create-job-input"
            />
          </div>

          <div className="lg:1/2 w-full">
            <label className=" block mb-2 text-lg">Employment Type</label>
            <select
              {...register("experienceLevel")}
              className="create-job-input"
            >
              <option value={employmentType}>{employmentType}</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>
        </div>
        {/* 7th row */}
        <div className="w-full">
          <label className=" block mb-2 text-lg">Job Description</label>
          <textarea
            className="w-full pl-3 py-1.5 focus:outline-none"
            rows={6}
            defaultValue={description}
            placeholder="Job Description"
            {...register("description")}
          />
        </div>
        {/* 8th row last */}
        <div className="w-full">
          <label className="block mb-2 text-lg">Job Posted By:</label>
          <input
            type="email"
                defaultValue={postedBy}
            placeholder="Your Email "
                
            {...register("postedBy")}
            className="create-job-input"
          />
        </div>

        <input
          type="submit"
          className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
        />
      </form>
    </div>
  </div>
  )
}

export default updateJob