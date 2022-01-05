import React, {useState} from 'react';
import PersonalInfo from './personalInfo';
import Education from './Education';
import uniqid from "uniqid";

import './body.css'




const CVBody = () => {

  const [ personalInfo, setPersonalInfo] = useState({
          title: '',      
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          address: '',
          linkedIn: '',
          instagram: '',          
          personalSummary: '',
          submitted: false      
  })

    const [education, setEducation] = useState([{
        universityName: '',
        city: '',
        degree: '',
        subject: '',
        from: '',
        to: '',            
        id: uniqid(),
        submitted: false,
    },])



    const handleChange = (e) => {
        const {name, value} = e.target;
        setPersonalInfo({
            ...personalInfo,
            [name]: value,
        })
        console.log(personalInfo)
    }

    const onPersonalInfoSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        setPersonalInfo({
            ...personalInfo,               
            submitted: true,
            })
    }


    const editForm = () => {
        setPersonalInfo({
            ...personalInfo,               
            submitted: false,
            })
    }


   const onChangeEducation = (e, id) => {
    const {name, value } = e.target
    const newEducation = education.map((eduItem) => {
        if(eduItem.id === id){
            return {...eduItem, [name]: value }
        }
        return eduItem
    })
    setEducation(         
        [...newEducation])        
    }


    const addEducation = () => {
        setEducation([
            ...education, {
                universityName: '',
                city: '',
                degree: '',
                subject: '',
                from: '',
                to: '',            
                id: uniqid(),
                submitted: false,
            },
        ])
    }

    const deleteEducation = (id) => {
        const newEducation = education.filter((educationItem) => educationItem.id !== id);
        setEducation([...newEducation]);
    }


    const  onEducationSubmit = (e) => {
        e.preventDefault();
        setEducation(education.map((edu) => {
            return {...edu, submitted: true}
        })) 
        console.log('submitted clicked')         
    }

    const editEducation = (e) => {
        e.stopPropagation();
        setEducation(education.map((edu) => {
            return {...edu, submitted: false}
        }))
        console.log(education)
        console.log('edit-btn clicked') 
    }


    console.log(education)

    return (
        <div className='CV-container'  >
            <PersonalInfo data={personalInfo}
            handleChange = {handleChange} sectionHeading = 'Personal Information'
            onSubmit = {onPersonalInfoSubmit} editForm = {editForm}
            />

            <Education  allEducation = {education}
            onChange = {onChangeEducation} addEducation = {addEducation}
            deleteEducation = {deleteEducation}  onEducationSubmit = { onEducationSubmit}
            editEducation = {editEducation}
            />





            
        </div>
    )
}

export default CVBody
