import React, {useState} from 'react';
import PersonalInfo from './personalInfo';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
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

    const [experience, setExperience] = useState([{ 
            position: '',
            company: '',
            city: '',
            from: '',
            to: '',
            id: uniqid(),           
            submitted: false,
        },
    ])

    const [skills, setSkills] = useState([
        {   skill: '',
            id: uniqid(),
            submitted: false,
         },{
            skill: '',
            id: uniqid(),
            submitted: false,
         },
    ])



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
    setEducation([...newEducation])        
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

    const onExperienceChange = (e, id) => {
        const {name, value } = e.target
        const newExperience = experience.map((expi) => {
        if(expi.id === id){
            return {...expi, [name]: value }
        }
        return expi
    })
    setExperience([...newExperience])
    }

    const addExperience = () => {
        setExperience([...experience,{ 
            position: '',
            company: '',
            city: '',
            from: '',
            to: '',
            id: uniqid(),           
            submitted: false,
        },])
    }

    const onDeleteExperience = (id) => {
        const newExperience = experience.filter((experience) => experience.id !== id);
        setExperience([...newExperience]);
    }

    const onExperienceSubmit = (e) => {
        e.preventDefault();
        setExperience(experience.map((expi) => {
            return {...expi, submitted: true}
        }))
    }

    const editExperience = () => {
        setExperience(experience.map((expi) => {
            return {...expi, submitted: false}
        }))
    }

    const addSkill = () => {

        setSkills([...skills,
            {   skill: '',
                id: uniqid(),
                submitted: false,             
        },])
    }


    const onSkillsChange = (e, id) => {
        const {name, value } = e.target
        const newSkill = skills.map((skill) => {
        if(skill.id === id){
            return {...skill, [name]: value }
        }
        return skill
    })
    setSkills([...newSkill])
    }

    const deleteSkill =  (id) => {
        const newSkills = skills.filter((s) => s.id !== id);
        setSkills([...newSkills]);    
    }

    const submitSkillForm = (e) => {
        e.preventDefault();
        setSkills(skills.map((skill) => {
            return {...skill, submitted: true}
        }))
    }
    const editSkill = (e) => {       
        setSkills(skills.map((skill) => {
            return {...skill, submitted: false}
        }))
    }





    console.log(skills)

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

            <Experience experience = {experience} onChange = {onExperienceChange}
            addExperience = {addExperience} onDeleteExperience = {onDeleteExperience}
            onExperienceSubmit = {onExperienceSubmit} editExperience = {editExperience}
                        
            />

            <Skills allSkills = {skills} addSkill = {addSkill}
            onChange = {onSkillsChange} deleteSkill = {deleteSkill}
            submitSkillForm = {submitSkillForm} editSkill = {editSkill}
            />




            
        </div>
    )
}

export default CVBody
