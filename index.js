const skillsTab = document.getElementById("skillsTab");
const experienceTab = document.getElementById("experienceTab");
const aboutMeTab = document.getElementById("aboutMeTab");

const aboutInfoBox = document.getElementById("aboutInfoBox");

const skillsInfoBox = document.getElementById("skillsInfoBox");
const experienceInfoBox = document.getElementById("experienceInfoBox");
const aboutMeInfoBox = document.getElementById("aboutMeInfoBox");

skillsTab.addEventListener('click', function() {
    skillsTab.classList.remove("unselectedTab");
    experienceTab.classList.add("unselectedTab");
    aboutMeTab.classList.add("unselectedTab");

    skillsInfoBox.style.display = "block";
    experienceInfoBox.style.display = "none";
    aboutMeInfoBox.style.display = "none";
});

experienceTab.addEventListener('click', function() {
    skillsTab.classList.add("unselectedTab");
    experienceTab.classList.remove("unselectedTab");
    aboutMeTab.classList.add("unselectedTab");

    skillsInfoBox.style.display = "none";
    experienceInfoBox.style.display = "block";
    aboutMeInfoBox.style.display = "none";
});

aboutMeTab.addEventListener('click', function() {
    skillsTab.classList.add("unselectedTab");
    experienceTab.classList.add("unselectedTab");
    aboutMeTab.classList.remove("unselectedTab");

    skillsInfoBox.style.display = "none";
    experienceInfoBox.style.display = "none";
    aboutMeInfoBox.style.display = "block";
});
