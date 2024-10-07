const body = document.getElementById("body");

const skillsTab = document.getElementById("skillsTab");
const experienceTab = document.getElementById("experienceTab");
const aboutMeTab = document.getElementById("aboutMeTab");

const aboutInfoBox = document.getElementById("aboutInfoBox");

const skillsInfoBox = document.getElementById("skillsInfoBox");
const experienceInfoBox = document.getElementById("experienceInfoBox");
const aboutMeInfoBox = document.getElementById("aboutMeInfoBox");

const infoOverlayContainer = document.getElementById("infoOverlay");
const infoOverlayCloseButton = document.getElementById("closeInfoOverlay");
const dimScreen = document.getElementById("dimScreen");

const skillProgrammingCard = document.getElementById("programmingCard");
const skillEditingCard = document.getElementById("editingCard");
const skillVideographyCard = document.getElementById("videographyCard");
const skillPhotographyCard = document.getElementById("photographyCard");
const skillWebDesignCard = document.getElementById("webDesignCard");
const skillLeadershipCard = document.getElementById("leadershipCard");
const skillGameDevelopmentCard = document.getElementById("gameDevelopmentCard");
const skillAcademicsCard = document.getElementById("academicsCard");

const overlayProgramming = document.getElementById("ProgrammingInfoOverlay");
const overlayEditing = document.getElementById("EditingInfoOverlay");
const overlayVideography = document.getElementById("VideographyInfoOverlay");
const overlayPhotography = document.getElementById("PhotographyInfoOverlay");
const overlayWebDesign = document.getElementById("WebDesignInfoOverlay");
const overlayLeadership = document.getElementById("LeadershipInfoOverlay");
const overlayGameDevelopment = document.getElementById("GameDevelopmentInfoOverlay");
const overlayAcademics = document.getElementById("AcademicsInfoOverlay");

skillProgrammingCard.addEventListener('click', function() {
    infoOverlayContainer.style.display = "block";
    body.classList.add("stopScrolling");

    dimScreen.style.display = "block";

    overlayProgramming.style.display = "block";
    overlayEditing.style.display = "none";
    overlayVideography.style.display = "none";
    overlayPhotography.style.display = "none";
    overlayWebDesign.style.display = "none";
    overlayLeadership.style.display = "none";
    overlayGameDevelopment.style.display = "none";
    overlayAcademics.style.display = "none";
    dimScreen.scrollIntoView();

})

skillEditingCard.addEventListener('click', function() {
    infoOverlayContainer.style.display = "block";
    body.classList.add("stopScrolling");

    dimScreen.style.display = "block";

    infoOverlayContainer.style.display = "block";
    overlayProgramming.style.display = "none";
    overlayEditing.style.display = "block";
    overlayVideography.style.display = "none";
    overlayPhotography.style.display = "none";
    overlayWebDesign.style.display = "none";
    overlayLeadership.style.display = "none";
    overlayGameDevelopment.style.display = "none";
    overlayAcademics.style.display = "none";
    dimScreen.scrollIntoView();

})

skillVideographyCard.addEventListener('click', function() {
    infoOverlayContainer.style.display = "block";
    body.classList.add("stopScrolling");

    dimScreen.style.display = "block";

    infoOverlayContainer.style.display = "block";
    overlayProgramming.style.display = "none";
    overlayEditing.style.display = "none";
    overlayVideography.style.display = "block";
    overlayPhotography.style.display = "none";
    overlayWebDesign.style.display = "none";
    overlayLeadership.style.display = "none";
    overlayGameDevelopment.style.display = "none";
    overlayAcademics.style.display = "none";
    dimScreen.scrollIntoView();

})

skillPhotographyCard.addEventListener('click', function() {
    infoOverlayContainer.style.display = "block";
    body.classList.add("stopScrolling");

    dimScreen.style.display = "block";

    infoOverlayContainer.style.display = "block";
    overlayProgramming.style.display = "none";
    overlayEditing.style.display = "none";
    overlayVideography.style.display = "none";
    overlayPhotography.style.display = "block";
    overlayWebDesign.style.display = "none";
    overlayLeadership.style.display = "none";
    overlayGameDevelopment.style.display = "none";
    overlayAcademics.style.display = "none";
    dimScreen.scrollIntoView();

})

skillWebDesignCard.addEventListener('click', function() {
    infoOverlayContainer.style.display = "block";
    body.classList.add("stopScrolling");

    dimScreen.style.display = "block";

    infoOverlayContainer.style.display = "block";
    overlayProgramming.style.display = "none";
    overlayEditing.style.display = "none";
    overlayVideography.style.display = "none";
    overlayPhotography.style.display = "none";
    overlayWebDesign.style.display = "block";
    overlayLeadership.style.display = "none";
    overlayGameDevelopment.style.display = "none";
    overlayAcademics.style.display = "none";
    dimScreen.scrollIntoView();

})

skillLeadershipCard.addEventListener('click', function() {
    infoOverlayContainer.style.display = "block";
    body.classList.add("stopScrolling");

    dimScreen.style.display = "block";

    infoOverlayContainer.style.display = "block";
    overlayProgramming.style.display = "none";
    overlayEditing.style.display = "none";
    overlayVideography.style.display = "none";
    overlayPhotography.style.display = "none";
    overlayWebDesign.style.display = "none";
    overlayLeadership.style.display = "block";
    overlayGameDevelopment.style.display = "none";
    overlayAcademics.style.display = "none";
    dimScreen.scrollIntoView();

})

skillGameDevelopmentCard.addEventListener('click', function() {
    infoOverlayContainer.style.display = "block";
    body.classList.add("stopScrolling");

    dimScreen.style.display = "block";

    infoOverlayContainer.style.display = "block";
    overlayProgramming.style.display = "none";
    overlayEditing.style.display = "none";
    overlayVideography.style.display = "none";
    overlayPhotography.style.display = "none";
    overlayWebDesign.style.display = "none";
    overlayLeadership.style.display = "none";
    overlayGameDevelopment.style.display = "block";
    overlayAcademics.style.display = "none";
    dimScreen.scrollIntoView();

})

skillAcademicsCard.addEventListener('click', function() {
    infoOverlayContainer.style.display = "block";
    body.classList.add("stopScrolling");

    dimScreen.style.display = "block";

    infoOverlayContainer.style.display = "block";
    overlayProgramming.style.display = "none";
    overlayEditing.style.display = "none";
    overlayVideography.style.display = "none";
    overlayPhotography.style.display = "none";
    overlayWebDesign.style.display = "none";
    overlayLeadership.style.display = "none";
    overlayGameDevelopment.style.display = "none";
    overlayAcademics.style.display = "block";
    dimScreen.scrollIntoView();
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
    body.classList.remove("stopScrolling");
})

dimScreen.addEventListener('click', function() {
    infoOverlayContainer.style.display = "none";
    body.classList.remove("stopScrolling");
});