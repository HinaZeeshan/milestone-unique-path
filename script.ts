//listing element
document.getElementById('resume')?.addEventListener('submit',function(event){
    event.preventDefault();

    //giving references to form icons

    
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const candidateElement = document.getElementById('candidate') as HTMLInputElement;
    
    
    //provide all foam icons
    if (nameElement &&  emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement && candidateElement  ){

        const name = nameElement.value ;
        const email = emailElement.value ;
        const phone = phoneElement.value ;
        const address = addressElement.value ;
        const education = educationElement.value ;
        const experience = educationElement.value ;
        const skills = skillsElement.value ;

      // unique path       
        const candidate = candidateElement.value;
        const uniquepath = `resumes/${candidate.replace(/\s+/g,'_')}_cv.html`

      

           //create resume output
    const resumeoutput =`
    <h2>Resume</h2>
    
    <p><strong>Name :</strong> <span id="edit-name" class="editable">${name}</span></p>
    <p><strong>Email :</strong> <span id="edit-email" class="editable"> ${email}</span></p>
    <p><strong>Phone :</strong> <span id="edit-phone" class="editable"> ${phone}</span></p>
    <p><strong>Address :</strong> <span id="edit-address" class="editable"> ${address}</span></p>
     
    
    <h3>Education</h3>
    <p <span id="edit-education" class="editable">>${education}</p>

     <h3>Experience</h3>
    <p <span id="edit-experience" class="editable">>${experience}</p>

     <h3>Skills</h3>
    <p <span id="edit-skills" class="editable">>${skills}</p>
 `;  
  const generateLink = document.createElement('a')
  generateLink.href = 'data: text/html;charset=utf-8,' + encodeURIComponent(resumeoutput)
  generateLink.download = uniquepath;
  generateLink.textContent = 'GENERATE YOUR 2024 RESUME';

 //resume output
    const resumeoutputElement = document.getElementById('resumeoutput')
    if(resumeoutputElement){
        resumeoutputElement.innerHTML = resumeoutput;
     
    resumeoutputElement.appendChild(generateLink)    
                resumeoutputElement.style.display = "block";
    }
}else{
    console.error('one or more are missing')
}
});

                