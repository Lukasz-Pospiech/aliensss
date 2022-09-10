//Dealing with viewport height issue (when browser address bar hides the viewport gets higher - we don't want that)
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});


//MENU
let menuOpenedOrClosed = "closed"; 

function showMenu() {
    if (menuOpenedOrClosed === "closed") {
        document.getElementById("menuContainer").style.display = "flex";
        setTimeout(showBrainiac, 500); 
        function showBrainiac() {
            document.getElementById("menuContainer").style.opacity = "1";
            // document.getElementById("brain").style.display = "block";
            document.getElementById("headcut5").className = "headcut5Animation";
            document.getElementById("brain").className = "brainAnimation";
            document.getElementById("headcut4").className = "headcut4Animation";
            document.getElementById("headcut3").className = "headcut3Animation";
            document.getElementById("headcut2").className = "headcut2Animation";
            document.getElementById("headcut1").className = "headcut1Animation";
            // setTimeout(hideBrain, 7000);
            // function hideBrain() {
            //     document.getElementById("brain").style.display = "none";
            // }
        }

        menuOpenedOrClosed = "opened";
    }
    else if (menuOpenedOrClosed === "opened") {
        document.getElementById("headcut5").className = "headcut5AnimationReverse";
        document.getElementById("brain").className = "brainAnimationReverse";
        document.getElementById("headcut4").className = "headcut4AnimationReverse";
        document.getElementById("headcut3").className = "headcut3AnimationReverse";
        document.getElementById("headcut2").className = "headcut2AnimationReverse";
        document.getElementById("headcut1").className = "headcut1AnimationReverse";
        setTimeout(resetOpacity, 1500);
        setTimeout(resetDisplay, 2500);
        function resetOpacity() {
            document.getElementById("menuContainer").style.opacity = "0";
        }
        function resetDisplay() {
            document.getElementById("menuContainer").style.display = "none";
        }
        menuOpenedOrClosed = "closed";
    }
}

// function resetMenu() {
//     document.getElementById("headcut1").style.display = "none";
//     document.getElementById("headcut1").className = "";
//     document.getElementById("headcut2").style.display = "none";
//     document.getElementById("headcut2").className = "";
//     document.getElementById("headcut3").style.display = "none";
//     document.getElementById("headcut3").className = "";
//     document.getElementById("headcut4").style.display = "none";
//     document.getElementById("headcut4").className = "";
//     document.getElementById("headcut5").style.display = "none";
//     document.getElementById("headcut5").className = "";
//     document.getElementById("brain").style.display = "none";
//     document.getElementById("brain").className = "";
// } 


function redirect1() {
    window.location.assign("aboutlukasz.html")
}
function redirect2() {
    window.location.assign("aboutscrimba.html")
}
function redirect3() {
    window.location.assign("lukaszprojects.html")
}
function redirect4() {
    window.location.assign("lukaszshares.html")
}



//INTRO
function pulsateFinger() {
    setInterval(pulsate, 5000);
    function pulsate() {
        document.getElementById("fingerDIV").style.opacity = "0.7";
        setTimeout(resetOpacity, 1000);
        function resetOpacity() {
            document.getElementById("fingerDIV").style.opacity = "0";
        }
    }
}


function ufoLands() {
    document.getElementById("etDIV").style.opacity = "0";
    document.getElementById("ufo").className = "ufoAnimation";
    setTimeout(showEt2, 11000);
     function showEt2() {
        document.getElementById("et2").className = "et2Animation";
    }
    setTimeout(hideEtUfoContainer, 20000);
    function hideEtUfoContainer() {
        document.getElementById("etUfoContainer").style.display = "none";
    }
    setTimeout(showXar, 20000);
    function showXar() {
        document.getElementById("container").style.display = "block";
        document.getElementById("xar").className = "xarAnimation";
        document.getElementById("greenplanet").className = "greenplanetAnimation";
    }
}


let xarTalkSegment = 0; 
function xarTalksForward() {
    if (xarTalkSegment === 10) {
        xarTalkSegment = 0;
    }
    else {
        xarTalkSegment += 1;
    }
    let text1 = "";
    let text2 = "";
    switch (xarTalkSegment) {
        case 1: 
            text1 = "Hello World - Human World. My name is Xar. I come from planet Zentra (a.k.a the Green Planet) located in the constellation Andromeda, 2 million light-years from Earth.";
            text2 = "The Green Planet is home to a dozen alien races.";
            break;
        case 2: 
            text1 = "Recently one member of your species - a homo sapiens named Lukasz - began recklessly experimeting with CSS and Javascript. He messed up the code so much that it created a vast ripple effect...";
            text2 = "...on the other side of this universe.";
            break;
        case 3:
            text1 = "As a result, our planet Zentra’s core has been destabilized, and our species is on the verge of extinction. Nearby planets in our sector are already collapsing.";
            text2 = "See a collapse for yourself.";
            break;
        case 4: 
            text1 = "I’m the captain of a group of 12 volunteers sent to Earth to track down and hijack Lukasz. We must take him back to our planet because only there can he fix the bugs in his code which created the ripple effect.";
            text2 = "Check out my crew.";
            break;
        case 5: 
            text1 = "Lukasz is hard to find, he has no friends, doesn’t talk to anyone (only to himself), we can’t reach him. He allegedly made contact with Scrimba – an organization which encourages homo sapiens...";
            text2 = "...to learn web development.";
            break;
        case 6: 
            text1 = "Individuals like Lukasz write code which resuls in the destruction of entire star systems! We have reasons to believe that the free HTML/CSS course Lukasz took on Scrimba trigerred him to write code...";
            text2 = "...responsible for the current chaos in our galaxy.";
            break;
        case 7: 
            text1 = "Our capabilities of doing research here on Earth are limited due to our biological form which we can’t morph in this dimension. We need your help. Help us locate Lukasz. We know he’s hiding somewhere...";
            text2 = "...in the tropical zone of your planet.";
            break;
        case 8: 
            text1 = "We’ve created this website to provide you with the only intel we’ve got – the leftovers of Lukasz's experiments with web development, which you'll find in the menu section. Perhaps these pages that Lukasz left will give you some clue...";
            text2 = "...as to where he might be located.";
            break;
        case 9: 
            text1 = "He must be hiding there somewhere deep in a tropical jungle, still messing around with code. If you happen to contact him, tell him that we’re not leaving Earth until he surrenders to us.";
            text2 = "Warn him that, if necessary, we will take him by force.";
            break;
        case 10: 
            text1 = "Now go to menu and explore. End of message.";
            text2 = "Thank you.";
            break;
    }

    let text1Array = text1.split(' ');
    text1Array = text1Array.map(word => `<span>${word} </span>`);
    let text1Box = document.getElementById("xartext1DIV");
    text1Box.innerHTML = "";
    text1Array.forEach(tag => text1Box.innerHTML += tag);

    let text2Array = text2.split(' ');
    text2Array = text2Array.map(word => {
        return word === "collapse" ? `<span onclick="showExplosion()" style="color:yellow">${word} </span>` : 
        word === "crew." ? `<span onclick="showCrew()" style="color:yellow">${word} </span>` :
        `<span>${word} </span>`;
    });
    let text2Box = document.getElementById("xartext2DIV");
    text2Box.innerHTML = "";
    text2Array.forEach(tag => text2Box.innerHTML += tag);

    let spansList = document.getElementsByTagName("span");

    setInterval(showWord, 200);

    let i = 0;
    function showWord() {
        if(i < spansList.length) {
            spansList[i].style.opacity="1";
            i++;
        }
    }
}


function xarTalksBack() {   
    if (xarTalkSegment > 1) {
        xarTalkSegment -= 1;
    }
    let text1 = "";
    let text2 = "";
    switch (xarTalkSegment) {
        case 1: 
            text1 = "Hello World - Human World. My name is Xar. I come from planet Zentra (a.k.a the Green Planet) located in the constellation Andromeda, 2 million light-years from Earth.";
            text2 = "The Green Planet is home to a dozen alien races.";
            break;
        case 2: 
            text1 = "Recently one member of your species - a homo sapiens named Lukasz - began recklessly experimeting with CSS and Javascript. He messed up the code so much that it created a vast ripple effect...";
            text2 = "...on the other side of this universe.";
            break;
        case 3:
            text1 = "As a result, our planet Zentra’s core has been destabilized, and our species is on the verge of extinction. Nearby planets in our sector are already collapsing.";
            text2 = "See a collapse for yourself.";
            break;
        case 4: 
            text1 = "I’m the captain of a group of 12 volunteers sent to Earth to track down and hijack Lukasz. We must take him back to our planet because only there can he fix the bugs in his code which created the ripple effect.";
            text2 = "Check out my crew.";
            break;
        case 5: 
            text1 = "Lukasz is hard to find, he has no friends, doesn’t talk to anyone (only to himself), we can’t reach him. He allegedly made contact with Scrimba – an organization which encourages homo sapiens...";
            text2 = "...to learn web development.";
            break;
        case 6: 
            text1 = "Individuals like Lukasz write code which resuls in the destruction of entire star systems! We have reasons to believe that the free HTML/CSS course Lukasz took on Scrimba trigerred him to write code...";
            text2 = "...responsible for the current chaos in our galaxy.";
            break;
        case 7: 
            text1 = "Our capabilities of doing research here on Earth are limited due to our biological form which we can’t morph in this dimension. We need your help. Help us locate Lukasz. We know he’s hiding somewhere...";
            text2 = "...in the tropical zone of your planet.";
            break;
        case 8: 
            text1 = "We’ve created this website to provide you with the only intel we’ve got – the leftovers of Lukasz's experiments with web development, which you'll find in the menu section. Perhaps these pages that Lukasz left will give you some clue...";
            text2 = "...as to where he might be located.";
            break;
        case 9: 
            text1 = "He must be hiding there somewhere deep in a tropical jungle, still messing around with code. If you happen to contact him, tell him that we’re not leaving Earth until he surrenders to us.";
            text2 = "Warn him that, if necessary, we will take him by force.";
            break;
        case 10: 
            text1 = "Now go to menu and explore. End of message.";
            text2 = "Thank you.";
            break;    
    }

    let text1Array = text1.split(' ');
    text1Array = text1Array.map(word => `<span>${word} </span>`);
    let text1Box = document.getElementById("xartext1DIV");
    text1Box.innerHTML = "";
    text1Array.forEach(tag => text1Box.innerHTML += tag);

    let text2Array = text2.split(' ');
    text2Array = text2Array.map(word => {
        return word === "collapse" ? `<span onclick="showExplosion()" style="color:yellow">${word} </span>` : 
        word === "crew." ? `<span onclick="showCrew()" style="color:yellow">${word} </span>` :
        `<span>${word} </span>`;
    });
    let text2Box = document.getElementById("xartext2DIV");
    text2Box.innerHTML = "";
    text2Array.forEach(tag => text2Box.innerHTML += tag);

    let spansList = document.getElementsByTagName("span");

    setInterval(showWord, 200);

    let i = 0;
    function showWord() {
        if(i < spansList.length) {
            spansList[i].style.opacity="1";
            i++;
        }
    }
}


function showExplosion() {
    document.getElementById("explosionContainer").style.display = "block";
    document.getElementById("explosionContainer").innerHTML = `<img id="explosion" src="explosion.gif" alt="explosion">`; 
    // document.getElementById("explosion").style.display = "block";
    setTimeout(hideExplosion, 7560);
    function hideExplosion() {
        document.getElementById("explosionContainer").style.display = "none";
        document.getElementById("explosionContainer").innerHTML = ``; 
        // document.getElementById("explosion").style.display = "none";
    } 
}

function showCrew() {
    document.getElementById("crewDIV").style.display = "block";
}

function exitCrew() {
    document.getElementById("crewDIV").style.display = "none";
}