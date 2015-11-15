window.addEventListener("resize", mobileOrDesktopKS);
var mobileMenuOn = 0;
mobileOrDesktopKS();


//different name so it wouldnt clash with other js
function mobileOrDesktopKS() {
		if ((screen.width <= 800) && (mobileMenuOn === 0)) {
		mobileMenuOn = 1;
        document.getElementById('mobile-menu').addEventListener('click', mobileNav);
        window.addEventListener('hashchange',function(){
        	document.getElementById('mobile-menu').dataset.toggle = 'off';
        });

        addEventListenerLoop(document.querySelectorAll('[data-tab-target]'),"click",mobileTopMenu);
        addEventListenerLoop(document.querySelectorAll('[data-tab-toggle]'),"click",mobileTabMenu);
    }

}

//mobile nav toggle button
function mobileNav() {
    var mobileMenu = document.getElementById('mobile-menu');
    var mobileMenuState = mobileMenu.dataset.toggle;

    if (mobileMenuState === 'off') {
        mobileMenu.dataset.toggle = 'on';

        //add active-tab class to currently open nav location
        var pointer = document.elementFromPoint(30,(window.innerHeight / 2)).parentNode.id;
        document.querySelector('[data-target=\''+pointer+'\']').classList.add('active-tab');
        document.querySelector('[data-target=\''+pointer+'\']').parentNode.classList.add('active-tab');
        document.querySelector('[data-target=\''+pointer+'\']').parentNode.previousElementSibling.classList.add('active-tab');

        //add active-url class to mobile navigations open window menu
        var currUrl = /\/kaiskauda\/(.*)\//.exec(document.URL);
        if (currUrl === null) {
            document.getElementById('renginiai').classList.add('active-url');
        } else if (currUrl[1] != null) {
            document.getElementById(currUrl[1]).classList.add('active-url');
        }

    } else {
        mobileMenu.dataset.toggle = 'off';
       removeAllClass('active-tab');
    }
}

//adds removes top level mobile menu tabs
function mobileTopMenu() {
	document.getElementById(this.dataset.tabTarget).classList.toggle("active-url");
};

//adds removes nested level mobile menu tabs
function mobileTabMenu() {
	console.log(this);
	this.classList.toggle("active-tab");
};

function addEventListenerLoop(elements, evnt, func) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener(evnt, func);
    };
};
