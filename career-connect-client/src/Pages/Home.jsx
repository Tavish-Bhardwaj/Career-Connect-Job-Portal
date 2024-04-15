import React, { useEffect } from 'react'
import Banner from '../components/Banner/Banner'
import { useState } from 'react';
import Card from '../components/Card';
import Jobs from './Jobs';
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs]=useState([]);

  useEffect(() => {
    fetch("jobs.json").then(res=>res.json()).then(data=>{
      // console.log(data);
      setJobs(data);
    })
  },[])
  console.log(jobs);
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
      setQuery(e.target.value);
  }
  // filter jobs by title
  const filteredItems = jobs.filter((job) =>  job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !==-1);

  

  // Radio based button filtering
  const handleChange =(event)=>{
    setSelectedCategory(event.target.value)
  }

  // button based filtering functions
  const handleClick=(event)=>{
    setSelectedCategory(event.target.value);
  }

  // main function
  const filterData=(jobs, selected, query)=>{
    let filteredJobs=jobs;
    if(query){
      filteredJobs=filteredItems;
    }
    // category filtering
    if(selected){
      filteredJobs =filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate})=>{
           jobLocation.toLowerCase()===selected.toLowerCase() ||
          parseInt(maxPrice)=== parseInt(selected) ||
          salaryType.toLowercase()===selected.toLowerCase() ||
          employmentType.toLowercase()=== selected.toLowercase()
      })
      
    }
    return filteredJobs.map((data,i)=><Card key={i} data={data} />)
  }
  const result = filterData(jobs, selectedCategory, query);
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange}/>

{/* main content */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'> 
        <div className='bg-white p-4 rounded'>Left</div>
        <div className='col-span-2 bg-white p-4 rounded'><Jobs result={result}/></div>
        <div className='bg-white p-4 rounded'>Right</div>
      </div>
    </div>
  )
}

export default Home;
