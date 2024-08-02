// "id": "9a6568b8-2d7f-4387-8545-c850fd65ba4d",
// "title": "Technical Program Manager",
// "description": "Aut rerum voluptas voluptates qui sint maxime. Minus vel accusantium praesentium quaerat. Impedit qui aut et.",
// "company": "Nitzsche, Spinka and Hagenes",
// "location": "Baguio, Timor-Leste",
// "salary_from": 61494,
// "salary_to": 117721,
// "employment_type": "Co-founder/Technical Partner",
// "application_deadline": "Sat, 09/22/2024",
// "qualifications": "[\"2 years of Git experience\",\"Skilled in React\",\"5 years in PHP\",\"Expert in Docker\"]",
// "contact": "103-692-766",
// "job_category": "Mobile App Developer",
// "is_remote_work": 1,
// "number_of_opening": 4,
// "created_at": "Sun, 10/15/2023",
// "updated_at": "Sun, 10/15/2023"

import React , {useState , useEffect} from 'react'
import axios from 'axios'


function JobCard () {

    const [data , setData] = useState('');
    const totalJobs = 0;

    useEffect(() => {
        axios.get('https://ca5fbb7b-18a4-488c-ae84-93fc375771c7.mock.pstmn.io/listings?page=' , (res) => {
            
            console.log("Result : ")
            console.log(res);
            
            try{
                // Handling data
                const job = res.map((item) => {
                    
                            
                    setData(item);
    
                })

                // Pagination 
                totalJobs = res[0].length;

                var jobsPerPage = 5;

                if(totalJobs < 5){
                    // No pages 
                }else{
                    var jobPerPage = [];

                    for(let i = 0 ; i<totalJobs ; i++){
                        jobsPerPage.push(res[0][i]);
                    }
                }


            }catch(err){
                console.error(err);
                console.log(err)
            }
    
        })

        // fetch('https://ca5fbb7b-18a4-488c-ae84-93fc375771c7.mock.pstmn.io/listings?page=' , (res) => {
        //     console.log(res);
        // })
    }  , [])

    return (
            <div>
                <h2>{data.id}</h2>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
            </div>
    )
}

export default JobCard;