var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("download-pdf");
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education")
        .value;
    var experience = document.getElementById("experience")
        .value;
    var skills = document.getElementById("skills").value;
    var Certifications = document.getElementById("Certifications").value;
    var AwardsAchievements = document.getElementById("AwardsAchievements").value;
    var Language = document.getElementById("Languages")
        .value;
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills,
        Certifications: Certifications,
        AwardsAchievements: AwardsAchievements,
        Language: Language,
    };
    localStorage.setItem(name, JSON.stringify(resumeData));
    var resumeHtml = "\n     <h2> <b> Resume </b> </h2>\n     <h3>Personal Information</h3>\n     <div style=\"text-align: center; margin-bottom: 20px;\">\n     <p><u><b>Name:</b></u> ".concat(name, "</p>\n     <p><u><b>Email:</b></u> ").concat(email, "</p>\n     <p><u><b>Phone:</b></u> ").concat(phone, "</p>\n     </div>\n      <div>\n     <h3><u>Education</u></h3>\n     <p>").concat(education, "</p>\n\n     <h3><u>Experience</u></h3>\n     <p>").concat(experience, "</p>\n\n     <h3><u>Skills</u></h3>\n     <p>").concat(skills, "</p>\n\n     <h3><u>Certifications</u></h3>\n     <p>").concat(Certifications, "</p>\n\n     <h3><u>Awards Achievements</u></h3>\n     <p>").concat(AwardsAchievements, "</p>\n\n     <h3><u>Languages</u></h3>\n     <p>").concat(Language, "</p>\n     </div>\n   ");
    resumeDisplayElement.innerHTML = resumeHtml;
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(name));
    shareableLinkContainer.style.display = "block";
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
downloadPdfButton.addEventListener("click", function () {
    window.print();
});
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById("username").value =
                username;
            document.getElementById("name").value =
                resumeData.name;
            document.getElementById("email").value =
                resumeData.email;
            document.getElementById("phone").value =
                resumeData.phone;
            document.getElementById("education").value =
                resumeData.education;
            document.getElementById("experience").value =
                resumeData.experience;
            document.getElementById("skills").value =
                resumeData.skills;
            document.getElementById("Certifications").value =
                resumeData.Certifications;
            document.getElementById("AwardsAchievements").value = resumeData.AwardsAchievements;
            document.getElementById("Language").value =
                resumeData.Language;
        }
    }
});
