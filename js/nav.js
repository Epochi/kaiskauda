window.onload = function() {
    window.addEventListener("resize", mobileOrDesktop);  
    mobileOrDesktop();
}
function mobileOrDesktop() {
    if (window.innerWidth > 800) {
        kysInit();
    } else if (window.innerWidth <= 800) {
        if (kysInitState === 1) {
            window.removeEventListener("resize", elementAligning);
            window.removeEventListener("scroll", nav);
        }
    }
}



function nav() {   
    var windowloc = window.pageYOffset + screenPlower;    
    //console.log('page: ' + window.pageYOffset + " plow: " + screenPlower + " myVarloc: " + windowloc + " firstNav: " + firstNav);
    if ((windowloc > firstNav && fixedNavState === 0) && (fixedNavBot < (footerTop - window.pageYOffset)) ){
        document.getElementById('fixed-nav').className = 'fixed-nav fixed-nav-fixed';
        fixedNavState = 1;
    } else if (windowloc < firstNav && fixedNavState === 1) {
        document.getElementById('fixed-nav').style.top = firstNav + 'px';
        document.getElementById('fixed-nav').className = 'fixed-nav fixed-nav-absolute';
        lastFocus = '';
        fixedNavState = 0;
        removeAllClass('active-nav');
    } else if ((fixedNavBot > (footerTop - window.pageYOffset)) && (fixedNavState === 1)) {
        document.getElementById('fixed-nav').style.top = (footerTop - screenHeight * 0.65)  + 'px';
        document.getElementById('fixed-nav').className = 'fixed-nav fixed-nav-absolute';
        fixedNavState = 0;
        removeAllClass('active-nav');
        fixedNavBot = screenHeight - document.getElementById('n-l').clientHeight;
    }
    if(fixedNavState === 1){
        navLocator();
    }
    
}

//document.getElementById('fixed-nav').style.top = firstNav + 'px';

function navLocator() {
    var currElm;
    var foundFocus = 0;
    //console.log(document.elementFromPoint(elementFromPointXLocation, (screenHeight * 0.35)));

    //selects nav on click, was problem with items that were too small
    if(window.location.hash === lastHash || !window.location.hash){
        var currentFocus = document.elementFromPoint(elementFromPointXLocation, (screenHeight * 0.35)).parentNode;
    } else {
        if (window.location.hash.indexOf('-banner') > -1)
         {
             var currentFocus = document.querySelector(window.location.hash.slice(0, window.location.hash.indexOf('-banner')));
         }else{
             var currentFocus = document.querySelector(window.location.hash);
         }
        lastHash = window.location.hash;
    }    
    //console.log('lastFocus: '+lastFocus + " currentFocus: " + currentFocus.id);
    //fixes finding items 2 levels deep
    if (currentFocus.classList.contains('nav-locator') && lastFocus != currentFocus.id) 
        {
            //save li object from fixed-nav
            currElm = document.getElementById(currentFocus.id + '-nav');
            foundFocus = 1;
        } else if (currentFocus.parentNode.classList.contains('nav-locator') && lastFocus != currentFocus.parentNode.id)
        { 
            //save li object from fixed-nav
            currElm = document.getElementById(currentFocus.parentNode.id + '-nav');
            foundFocus = 1;
         }


    //if text-box div contains nav-locator
    if (foundFocus === 1) {
        
        //if the elms nav-master is .active, do nothing
        if (document.querySelector('li.' + currElm.parentNode.id + '.active-nav')) {
            //if it's not active, check if there are any others that have it
        } else {
            //if other nav-masters have .active. remove.
            if (document.querySelector('#fixed-nav>ul>li.active-nav')) {
                navExtend(document.querySelector('#fixed-nav>ul>li.active-nav').nextElementSibling.id, document.querySelector('#fixed-nav>ul>li.active-nav'));
                //and add to current elms navigation
                navExtend(currElm.parentNode.id, currElm.parentNode.previousElementSibling);
            } else {
                //or just add to nav.li
                navExtend(currElm.parentNode.id, currElm.parentNode.previousElementSibling);
            }
        }


        //console.log(currElm);

        //remove all active-nav from nav li (from siblings)
        if (document.querySelector('#fixed-nav>ul>ul>li.active-nav')) {
            document.querySelector('#fixed-nav>ul>ul>li.active-nav').className -= 'active-nav';
        }
        //console.log(currElm.classList);
        currElm.className = "active-nav";


    }
    lastFocus = currentFocus.id;

}

var lastFocus;
var fixedNavState = 0;
var screenHeight;
var firstNav;
var screenPlower;
var elementFromPointXLocation;
// var textArray;
var textRangesArray = [];
//for styling, delete after
var navTop = 0.35;
var lastHash;
var footerTop;
var fixedNavHeight;
var kysInitState = 0;

function kysInit() {
    kysInitState = 1;
    lastFocus = 'none';
   	elementAligning();
    nav();
    window.addEventListener("resize", elementAligning);
    window.addEventListener("scroll", nav);
}



function navExtend(arg1, clr) {
    var elm = document.getElementById(arg1);
    removeAllClass('active-nav');
    elm.classList.toggle("active-nav");
    clr.classList.toggle('active-nav');
}




function elementAligning() {
    screenHeight = window.innerHeight;
    var screenWidth = window.innerWidth;
    screenPlower = screenHeight * navTop;
    firstNav = document.getElementById('firstRow').offsetTop + 50;
    footerTop = document.querySelector('footer').offsetTop
    fixedNavBot = screenHeight - document.getElementById('n-l').clientHeight;
    document.getElementById('fixed-nav').style.top = firstNav + 'px';

    if (screenWidth > 1200) {
        
        var leftMargin = ((screenWidth - 1200) / 2) - 16;
        //console.log(leftMargin);
        document.getElementById('fixed-nav').style.left = leftMargin + 900 + 'px';
        document.getElementById('fixed-nav').style.width = 300 + 'px';

        elementFromPointXLocation = leftMargin + 100;

    } else {

        document.getElementById('fixed-nav').style.left = ((screenWidth * 0.73)) + 'px';
        document.getElementById('fixed-nav').style.width = (screenWidth - (screenWidth * 0.73)) + 'px';
        elementFromPointXLocation = screenWidth * 0.1;
    }

}
