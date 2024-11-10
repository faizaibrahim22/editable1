var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var skills = document.getElementById('skills').value;
    var experiences = document.getElementById('experiences').value;
    var education = document.getElementById('education').value;
    if (!name || !lastname || !phone || !email || !skills || !experiences || !education) {
        alert("Please fill in all fields.");
        return;
    }
    var resumeHTML = "\n        <h2><b> Editable Resume</b></h2>\n        <h2>Personal Information</h2>\n        <p>Name: ".concat(name, "</p>\n        <p>Last Name: ").concat(lastname, "</p>\n        <p>Phone: ").concat(phone, "</p>\n        <p>Email: ").concat(email, "</p>\n        <p>Skills: ").concat(skills, "</p>\n        <p>Experiences: ").concat(experiences, "</p>\n        <p>Education: ").concat(education, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("Error: Resume display element not found");
    }
});
