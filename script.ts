const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;

const shareableLinkContainer = document.getElementById(
  "shareable-link-container"
) as HTMLDivElement;

const shareableLinkElement = document.getElementById(
  "shareable-link"
) as HTMLAnchorElement;
const downloadPdfButton = document.getElementById(
  "download-pdf"
) as HTMLButtonElement;
// Handle form submission
form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement)
    .value;
  const experience = (document.getElementById("experience") as HTMLInputElement)
    .value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;
  const Certifications = (
    document.getElementById("Certifications") as HTMLInputElement
  ).value;
  const AwardsAchievements = (
    document.getElementById("AwardsAchievements") as HTMLInputElement
  ).value;
  const Language = (document.getElementById("Languages") as HTMLInputElement)
    .value;

  const resumeData = {
    name,
    email,
    phone,
    education,
    experience,
    skills,
    Certifications,
    AwardsAchievements,
    Language,
  };
  localStorage.setItem(name, JSON.stringify(resumeData));

  const resumeHtml = `
     <h2> <b> Resume </b> </h2>
     <h3>Personal Information</h3>
     <div style="text-align: center; margin-bottom: 20px;">
     <p><u><b>Name:</b></u> ${name}</p>
     <p><u><b>Email:</b></u> ${email}</p>
     <p><u><b>Phone:</b></u> ${phone}</p>
     </div>
      <div>
     <h3><u>Education</u></h3>
     <p>${education}</p>

     <h3><u>Experience</u></h3>
     <p>${experience}</p>

     <h3><u>Skills</u></h3>
     <p>${skills}</p>

     <h3><u>Certifications</u></h3>
     <p>${Certifications}</p>

     <h3><u>Awards Achievements</u></h3>
     <p>${AwardsAchievements}</p>

     <h3><u>Languages</u></h3>
     <p>${Language}</p>
     </div>
   `;

  resumeDisplayElement.innerHTML = resumeHtml;

  const shareableURL = `${window.location.origin}?username=${encodeURIComponent(
    name
  )}`;

  shareableLinkContainer.style.display = "block";
  shareableLinkElement.href = shareableURL;
  shareableLinkElement.textContent = shareableURL;
});

downloadPdfButton.addEventListener("click", () => {
  window.print();
});

window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");
  if (username) {
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
      const resumeData = JSON.parse(savedResumeData);
      (document.getElementById("username") as HTMLInputElement).value =
        username;
      (document.getElementById("name") as HTMLInputElement).value =
        resumeData.name;
      (document.getElementById("email") as HTMLInputElement).value =
        resumeData.email;
      (document.getElementById("phone") as HTMLInputElement).value =
        resumeData.phone;
      (document.getElementById("education") as HTMLTextAreaElement).value =
        resumeData.education;
      (document.getElementById("experience") as HTMLTextAreaElement).value =
        resumeData.experience;
      (document.getElementById("skills") as HTMLTextAreaElement).value =
        resumeData.skills;
      (document.getElementById("Certifications") as HTMLTextAreaElement).value =
        resumeData.Certifications;
      (
        document.getElementById("AwardsAchievements") as HTMLTextAreaElement
      ).value = resumeData.AwardsAchievements;
      (document.getElementById("Language") as HTMLTextAreaElement).value =
        resumeData.Language;
    }
  }
});
