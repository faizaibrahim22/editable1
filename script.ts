const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const lastname = (document.getElementById('lastname') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const experiences = (document.getElementById('experiences') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;

    if (!name || !lastname || !phone || !email || !skills || !experiences || !education) {
        alert("Please fill in all fields.");
        return;
    }

    const resumeHTML = `
        <h2><b> Editable Resume</b></h2>
        <h2>Personal Information</h2>
        <p>Name:<span contenteditable="true">${name}</span></p>
        <p>Last Name:<span contenteditable="true"> ${lastname}</span></p>
        <p>Phone: <span contenteditable="true">${phone}</span></p>
        <p>:<span contenteditable="true">Email: ${email}</span>/p>
        <p:<span contenteditable="true">Skills: ${skills}</span></p>
        <p:<span contenteditable="true">Experiences: ${experiences}</span></p>
        <p:<span contenteditable="true">Education: ${education}</span></p>
    `;

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error("Error: Resume display element not found");
    }
});