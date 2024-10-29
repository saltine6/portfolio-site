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

const skillCards = document.getElementsByClassName("infoCard");

const infoOverlays = document.getElementsByClassName("specInfoOverlay");

const iframeLinks = [,"https://www.youtube.com/embed/SsELrf45LDE?si=tnI4_F0GkTQwK8s4","https://www.youtube.com/embed/TQLhhXa9jVA?si=ZcMwzFsx3wbeJz1x",,,,,];

// add click functionality to skill cards
for (let i = 0; i < skillCards.length; i++) {
    skillCards[i].addEventListener('click', function() {
        infoOverlayContainer.style.display = "block";
        body.classList.add("stopScrolling");
        dimScreen.style.display = "block";

        for (let j = 0; j < infoOverlays.length; j++) {
            if (i == j) {
                infoOverlays[j].style.display = "block";
                if (iframeLinks[j] != null) {
                    infoOverlays[j].getElementsByTagName("iframe")[0].setAttribute('src', iframeLinks[j]);
                }
            } else {
                infoOverlays[j].style.display = "none";
            }
        }

        dimScreen.scrollIntoView();
    });
}

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

const allIFrames = document.getElementsByTagName("iframe");

infoOverlayCloseButton.addEventListener('click', function() {
    for (let i = 0; i < allIFrames.length; i++) {
        allIFrames[i].setAttribute('src', 'none');
    }
    infoOverlayContainer.style.display = "none";
    body.classList.remove("stopScrolling");
})

dimScreen.addEventListener('click', function() {
    for (let i = 0; i < allIFrames.length; i++) {
        allIFrames[i].setAttribute('src', 'none');
    }
    infoOverlayContainer.style.display = "none";
    body.classList.remove("stopScrolling");
});