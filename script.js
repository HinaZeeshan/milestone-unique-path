var _a;
//listing element
(_a = document.getElementById('resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //giving references to form icons
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var candidateElement = document.getElementById('candidate');
    //provide all foam icons
    if (nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement && candidateElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = educationElement.value;
        var skills = skillsElement.value;
        // unique path       
        var candidate = candidateElement.value;
        var uniquepath = "resumes/".concat(candidate.replace(/\s+/g, '_'), "_cv.html");
        //create resume output
        var resumeoutput = "\n    <h2>Resume</h2>\n    \n    <p><strong>Name :</strong> <span id=\"edit-name\" class=\"editable\">".concat(name_1, "</span></p>\n    <p><strong>Email :</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, "</span></p>\n    <p><strong>Phone :</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, "</span></p>\n    <p><strong>Address :</strong> <span id=\"edit-address\" class=\"editable\"> ").concat(address, "</span></p>\n     \n    \n    <h3>Education</h3>\n    <p <span id=\"edit-education\" class=\"editable\">>").concat(education, "</p>\n\n     <h3>Experience</h3>\n    <p <span id=\"edit-experience\" class=\"editable\">>").concat(experience, "</p>\n\n     <h3>Skills</h3>\n    <p <span id=\"edit-skills\" class=\"editable\">>").concat(skills, "</p>\n ");
        var generateLink = document.createElement('a');
        generateLink.href = 'data: text/html;charset=utf-8,' + encodeURIComponent(resumeoutput);
        generateLink.download = uniquepath;
        generateLink.textContent = 'GENERATE YOUR 2024 RESUME';
        //resume output
        var resumeoutputElement = document.getElementById('resumeoutput');
        if (resumeoutputElement) {
            resumeoutputElement.innerHTML = resumeoutput;
            resumeoutputElement.appendChild(generateLink);
            resumeoutputElement.style.display = "block";
        }
    }
    else {
        console.error('one or more are missing');
    }
});
