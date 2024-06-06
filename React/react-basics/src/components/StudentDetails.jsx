import React from 'react'

function StudentDetails() {

    const internalStyle ={
        color: 'red'
    }

    const studentDetails = {
        name: 'Rahul Chandra Shekhar',
        age: 23,
        email: 'rahul@gmail.com',
        isGraduated: true,
        education:{
            degree: {
                name: 'B.Tech',
                institute: 'IIT Kharagpur',
                university: 'IIT',
                year: 2022
            },
            diploma: {
                name: 'Diploma in Mechanical Engineering',
                institute: 'NIT Roorkee',
                university: 'NIT',
                year: 2019
            },
            SSC: {
                institute: "Kendriya Vidyalaya",
                year: 2016
            }
        },
        hobbies: ["Reading", "Watching", "Swimming", "Studying"]
    }

    // Fragments:
    //   return (
    //     <>
    //         <h2>{"Student Name: "+studentDetails.name}</h2>
    //     </>
    //     )


    // Conditional Rendering:
    return(
        <div>
            <div >
                <h2>{"Name: "+studentDetails.name}</h2>
                <br />
                {"Age: "+studentDetails.age}
                <br />
                {"Email: "+studentDetails.email}
                <br />
                {/* Conditional Rendering */}
                {
                    studentDetails.isGraduated
                &&
                <p style={internalStyle}>
                <span className='graduated-badge'>Graduated</span>
                {"Degree Name: "+studentDetails.education.degree.name}<br />
                {"Degree Institute: "+studentDetails.education.degree.institute}<br />
                {"Degree University: "+studentDetails.education.degree.university}<br />
                {"Degree Year: "+studentDetails.education.degree.year}<br />
                </p>
                }


                {/* Rendering List */}
                <h3 style={{fontStyle: 'italic'}}>Hobbies:</h3>
                <ul type='none'>
                    {
                        studentDetails.hobbies.map( (hobby, index) => (
                            <li key={index}>{hobby}</li>
                            )
                        )
                    }
                </ul>

            </div>
        </div>
    )
}

export default StudentDetails
