var classActive = 'active',
    classHide = 'hide';
    classNight = 'front--night';
    classOpen = 'open';

var body = document.querySelector('body'),
	header = document.querySelector('.header'),
    headerType = document.querySelector('.header__type'),
    headerBtn = document.querySelector('.header__adapbtn'),
    headerType_sun = document.querySelector('.header__type-item--sun'),
    headerType_moon = document.querySelector('.header__type-item--moon');


if (headerType) {
    headerType.addEventListener('click', function (event) {
      if (headerType_sun.classList.contains(classActive)) {
	    headerType_sun.classList.remove(classActive);
	    headerType_moon.classList.add(classActive);
	    headerType.classList.add(classActive);
	    body.classList.add(classNight);
	  } else {
	  	headerType_sun.classList.add(classActive);
	    headerType_moon.classList.remove(classActive);
	    headerType.classList.remove(classActive);
	    body.classList.remove(classNight);
	  }
      return false;
    })
}


if (headerBtn) {
	headerBtn.addEventListener('click', function (event) {
		_this = this;
      if (_this.classList.contains(classOpen)) {
	    _this.classList.remove(classOpen);
	    header.classList.remove(classOpen);
	  } else {
	  	_this.classList.add(classOpen);
	    header.classList.add(classOpen);
	  }
      return false;
    })
}