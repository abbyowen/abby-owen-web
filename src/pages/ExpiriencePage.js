import React from 'react';
import { Expirience } from '../components/Expirience';
import { PageHeader } from '../components/PageHeader';
import '../styles/headerInfoStyles.css';
import '../styles/home.css';


export function ExpiriencePage(props) {
    // Description Info
    var ibm_bullets = ["TSE Department, Office of the CIO", 
                        "Collaborated with a cross functional internation team in Full stack web devlopment of proprietary suite application", 
                        "Performed team and client demos and incorporated feedback to improve UI/UX"];
    var ta_bullets = ["TA for two courses", 
                        "Software Design and Implementation", 
                        "Foundations in Applied Computer Science", 
                        "Lead weekly office hours where students ask conceptual and debugging questions", 
                        "Assess and provide feedback on student work to increase program efficiency"];
    var plandek_bullets = ["Worked with a team of engineers", 
                            "Model building, statistical analysis, insight technology", 
                            "Implemented machine learning processes in both Python and R", 
                            "Presented statistical modelings to teams of engineers and company leaders"];
    var pinboard_bullets = ["Introduced technical solutions to improve automation and efficiency of company outreach processes", 
                            "Audited site and app content and recommended ways to improve UI/UX"];
    
    // Skills Info
    var ibm_skills = ["React.js", "Java", "SQL", "Adobe XD", "Collaborative Development"];
    var ta_skills = ["Debugging", "C", "Python (Numpy library)", "Jupyter Notebooks"];
    var plandek_skills = ["R", "Python", "Time Series Data Modeling", "Neural Networks, ARIMA, Markov Chains", "Data Visualtization"]
    var pinboard_skills = ["API Integration", "UI/UX Research", "Customer Outreach"];

    // Timeline Dates
    var ibm_start = "May 2022";
    var ibm_end = "Present";

    var ta_start = "June 2021";
    var ta_end = "June 2022";

    var plandek_start = "January 2021";
    var plandek_end = "May 2021";
    
    var pinboard_start = "January 2021";
    var pinboard_end = "March 2021";



    return (
        <div>
                <PageHeader></PageHeader>
                <div className="body-container">
                    <div className="expirience-row">
                        <Expirience 
                            header="Back End Developer Intern, IBM" 
                            color="#0F44CD" 
                            size="25px" 
                            bullets={ibm_bullets}
                            skills={ibm_skills}
                            start={ibm_start}
                            end={ibm_end}
                            list_size="21px"
                        />
                        <Expirience 
                            header="CS Teaching Assistant, Dartmouth" 
                            color="#065000" 
                            size="23px" 
                            bullets={ta_bullets}
                            skills={ta_skills}
                            start={ta_start}
                            end={ta_end}
                            list_size="20px"
                        />
                        <Expirience 
                            header="Data Science Intern, Plandek" 
                            color="#CD0F32" 
                            size="25px" 
                            bullets={plandek_bullets}
                            skills={plandek_skills}
                            start={plandek_start}
                            end={plandek_end}
                            list_size="20px"
                        />
                        <Expirience 
                        header="Research Intern, Pinboard" 
                        color="#C90FCD" 
                        size="25px" 
                        bullets={pinboard_bullets}
                        skills={pinboard_skills}
                        start={pinboard_start}
                        end={pinboard_end}
                        list_size="23px"
                    />
                    </div>
                </div>
        </div>

    );

}

