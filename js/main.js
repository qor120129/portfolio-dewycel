var header = document.querySelector('header'),
  logo = document.querySelector('.logo'),

  mainMenuli = document.querySelectorAll('.main_menu > li'),
  topMenu = document.querySelector('.top_menu'),
  headerHeight = header.offsetHeight,
  goTopBtn = document.querySelector('.go-top');
scrollAmt = 0;
var lastScroll = 0;
// console.log(headerTopHeight);

window.addEventListener('scroll', function () {
  scrollAmt = window.scrollY;
  console.log(scrollAmt)
  if (scrollAmt == 0) {
    header.classList.remove('scroll-up');
  }

  if (lastScroll < scrollAmt) {
    header.classList.add('scroll-down');
    header.classList.remove('scroll-up');

  } else if (scrollAmt > 0) {
    header.classList.remove('scroll-down');
    header.classList.add('scroll-up');
  }
  // console.log(lastScroll)
  lastScroll = scrollAmt;

  if (scrollAmt > 800) {
    goTopBtn.classList.add('active');
  } else {
    goTopBtn.classList.remove('active');
  }
}); //헤더고정


goTopBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var goTotimer = setInterval(function () {
    if (scrollAmt > 0) {
      window.scrollBy(0, -80)
    } else {
      clearInterval(goTotimer);
    }
  }, 10);
});

if (document.querySelector('.sub_menu')) {
  for (i = 0; i < mainMenuli.length; i++) {
    mainMenuli[i].addEventListener('mouseover', function () {
      currentMenu = this.querySelector('ul li');
      if(currentMenu) {
        subMenuHeight = currentMenu.offsetHeight;
        totalHeight = headerHeight + subMenuHeight;
        header.style.height = totalHeight + 'px';
      }
    });
    mainMenuli[i].addEventListener('mouseout', function () {
      if(currentMenu) {
      header.style.height = totalHeight - subMenuHeight - '24' + 'px';
    }
    })

  };
}

var mainSlidewrapper = document.querySelector('.slide_wrapper'),
  mainslideContainer = mainSlidewrapper.querySelector('.main_banner'),
  mainSlides = mainslideContainer.querySelectorAll('li'),
  mainSlideCount = mainSlides.length,
  mainCurrentIndex = 0,
  mainPager = mainSlidewrapper.querySelector('.pager'),
  mainPagerHTML = '',
  mainPrevBtn = mainSlidewrapper.querySelector('.controls .prev'),
  mainNextBtn = mainSlidewrapper.querySelector('.controls .next'),
  mainTimer = undefined;

for (var i = 0; i < mainSlideCount; i++) {
  mainSlides[i].style.left = i * 100 + '%';
  mainPagerHTML += '<a herf="">' + i + '</a>';
}
mainPager.innerHTML = mainPagerHTML;
var pagerBtn = mainPager.querySelectorAll('a')

goToSlide(0);

function goToSlide(idx) {
  mainslideContainer.style.left = -idx * 100 + '%'
  mainCurrentIndex = idx;
  for (x = 0; x < pagerBtn.length; x++) {
    pagerBtn[x].classList.remove('active');
  }
  pagerBtn[idx].classList.add('active');
} //슬라이드 이동

mainNextBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (mainCurrentIndex != mainSlideCount - 1) {
    goToSlide(mainCurrentIndex + 1);
  } else {
    goToSlide(0);
  }
})
mainPrevBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (mainCurrentIndex != 0) {
    goToSlide(mainCurrentIndex - 1);
  } else {
    goToSlide(mainSlideCount - 1);
  }
}) //버튼으로 이동

for (y = 0; y < pagerBtn.length; y++) {
  pagerBtn[y].addEventListener('click', function (e) {
    e.preventDefault();
    var targetIdx = parseInt(this.innerHTML);
    goToSlide(targetIdx);
  })
} //pager로 이동


function autoSlide() {
  mainTimer = setInterval(function () {
    if (mainCurrentIndex != mainSlideCount - 1) {
      goToSlide(mainCurrentIndex + 1);
    } else {
      goToSlide(0);
    }
  }, 5000);
}

autoSlide();


mainSlidewrapper.addEventListener('mouseover', function () {
  clearInterval(mainTimer);

});

mainSlidewrapper.addEventListener('mouseout', function () {
  autoSlide();
});


var bestSliderWrapper = document.querySelector('.best.products_list_wrapper'),
  bestSlider = bestSliderWrapper.querySelector('.best_product'),
  bestSlides = bestSlider.querySelectorAll('li'),
  bestCurrentIndx = 0,
  bestSlideCount = bestSlides.length,
  bestSlideWidth = 282,
  bestSlideMargin = 24,
  bestPager = document.querySelector('.best_pager'),
  bestPagerHTML = '',
  bestPrevBtn = document.querySelector('.best_prev'),
  bestNextBtn = document.querySelector('.best_next');



for (var i = 0; i < bestSlideCount; i++) {
  bestSlides[i].style.left = i * 306 + 'px';
}
for (var i = 0; i < bestSlideCount - 3; i++) {
  bestPagerHTML += '<a herf="">' + i + '</a>';
}
bestPager.innerHTML = bestPagerHTML;
var bestPagerBtn = bestPager.querySelectorAll('a')



bestmoveSlide(0);

function bestmoveSlide(idx) {
  bestSlider.style.left = -idx * (bestSlideWidth + bestSlideMargin) + 'px'
  bestCurrentIndx = idx;

  for (x = 0; x < bestPagerBtn.length; x++) {
    bestPagerBtn[x].classList.remove('active');
  }
  bestPagerBtn[idx].classList.add('active');
}

bestNextBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (bestCurrentIndx == bestSlideCount - 4) {
    bestmoveSlide(0);

  } else {
    bestmoveSlide(bestCurrentIndx + 1);
  }
})
bestPrevBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (bestCurrentIndx == 0) {
    bestmoveSlide(bestSlideCount - 4);
  } else {
    bestmoveSlide(bestCurrentIndx - 1);
  }
})

bestPagerBtn.forEach(function (item, idx) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    bestmoveSlide(idx);
  });
});




var mdSliderWrapper = document.querySelector('.md.products_list_wrapper'),
  mdSlider = mdSliderWrapper.querySelector('.md_product'),
  mdSlides = mdSlider.querySelectorAll('li'),
  mdCurrentIndx = 0,
  mdSlideCount = mdSlides.length,
  mdSlideWidth = 282,
  mdSlideMargin = 24,
  mdPager = document.querySelector('.md_pager'),
  mdPagerHTML = '',
  mdPrevBtn = document.querySelector('.md_prev'),
  mdNextBtn = document.querySelector('.md_next');

for (var i = 0; i < mdSlideCount; i++) {
  mdSlides[i].style.left = i * 306 + 'px';
}
for (var i = 0; i < mdSlideCount - 3; i++) {
  mdPagerHTML += '<a herf="">' + i + '</a>';
}
mdPager.innerHTML = mdPagerHTML;

var mdPagerBtn = mdPager.querySelectorAll('a');



mdmoveSlide(0);
function mdmoveSlide(idx) {
  mdSlider.style.left = -idx * (mdSlideWidth + mdSlideMargin) + 'px'
  mdCurrentIndx = idx;
  for (x = 0; x < mdPagerBtn.length; x++) {
    mdPagerBtn[x].classList.remove('active');
  }
  mdPagerBtn[idx].classList.add('active');

}



mdNextBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (mdCurrentIndx != mdSlideCount - 4) {
    mdmoveSlide(mdCurrentIndx + 1);
  } else {
    mdmoveSlide(0);
  }
})
mdPrevBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (mdCurrentIndx == 0) {
    mdmoveSlide(mdSlideCount - 4);
  } else {

    mdmoveSlide(mdCurrentIndx - 1);
  }
})


mdPagerBtn.forEach(function (item, idx) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    mdmoveSlide(idx);
  });
});



let myPopup = document.querySelector('.popup_box'),
  popupcloseBtn = document.querySelector('.popup_close'),
  oneDayCheck = document.querySelector('#oneday_close');

function checkcookie(name) {
  var cookies = document.cookie.split(';');
  var visited = false;

  for (ck of cookies) {
    if (ck.indexOf(name) > -1) {
      visited = true;
    }
  }
  if (visited) {
    myPopup.style.display = 'none';
    //alert('재방문');
  } else {
    myPopup.style.display = 'block';
    //alert('첫방문');
  }
}

checkcookie('dewycel');


function setcookie(name, value, day) {
  var date = new Date();
  date.setDate(date.getDate() + day);

  var myCookie = '';
  myCookie = `${name}=${value};Expires=${date.toUTCString()}`;

  document.cookie = myCookie;
  //alert('쿠키저장 성공');
}//setcookie

function deleteCookie(name, value) {
  var date = new Date();
  date.setDate(date.getDate() - 1);

  var myCookie = '';
  myCookie = name + '=' + value + ';expires=' + date.toUTCString();

  document.cookie = myCookie;
}



popupcloseBtn.addEventListener('click', function () {
  if (!oneDayCheck.checked) {
    deleteCookie('dewycel', 'home');
  } else {
    setcookie('dewycel', 'home', 1);
  }
  myPopup.style.display = 'none';
});