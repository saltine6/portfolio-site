const skillsTab = document.getElementById("skillsTab");
const experienceTab = document.getElementById("experienceTab");
const aboutMeTab = document.getElementById("aboutMeTab");

const aboutInfoBox = document.getElementById("aboutInfoBox");

const skillsInfoBox = document.getElementById("skillsInfoBox");
const experienceInfoBox = document.getElementById("experienceInfoBox");
const aboutMeInfoBox = document.getElementById("aboutMeInfoBox");

const infoOverlayContainer = document.getElementById("infoOverlays");
const infoOverlayCloseButton = document.getElementById("closeInfoOverlay");

const skillProgrammingCard = document.getElementById("programmingCard");
const skillEditingCard = document.getElementById("editingCard");
const skillVideographyCard = document.getElementById("videographyCard");
const skillPhotographyCard = document.getElementById("photographyCard");
const skillWebDesignCard = document.getElementById("webDesignCard");
const skillLeadershipCard = document.getElementById("leadershipCard");
const skillGameDevelopmentCard = document.getElementById("gameDevelopmentCard");
const skillAcademicsCard = document.getElementById("academicsCard");

skillProgrammingCard.addEventListener('click', function() {
    infoOverlayContainer.style.display = "block";
})

skillEditingCard.addEventListener('click', function() {
    infoOverlayContainer.style.display = "block";
})

skillVideographyCard.addEventListener('click', function() {
    infoOverlayContainer.style.display = "block";
})

skillPhotographyCard.addEventListener('click', function() {
    infoOverlayContainer.style.display = "block";
})

skillWebDesignCard.addEventListener('click', function() {
    infoOverlayContainer.style.display = "block";
})

skillLeadershipCard.addEventListener('click', function() {
    infoOverlayContainer.style.display = "block";
})

skillGameDevelopmentCard.addEventListener('click', function() {
    infoOverlayContainer.style.display = "block";
})

skillAcademicsCard.addEventListener('click', function() {
    infoOverlayContainer.style.display = "block";
})

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

infoOverlayCloseButton.addEventListener('click', function() {
    infoOverlayContainer.style.display = "none";
})
