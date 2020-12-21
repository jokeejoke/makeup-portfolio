//import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)
import WOW from 'wow.js'
import scrollSpy from 'simple-scrollspy'
import scrollPage from 'page-scroll-to-id'




document.addEventListener('DOMContentLoaded', () => {

	scrollSpy('.header', {
		offset: 128
	})

//	new WOW().init();

	window.onscroll = function() {
		if (window.pageYOffset < 100) {
			document.querySelector('.nav__link').classList.remove('active')
		}
		if (window.pageYOffset > 250) {
			document.querySelector('.header').classList.add('active')
		} else {
			document.querySelector('.header').classList.remove('active')
		}
	}

	$("a[href*='#']").mPageScroll2id();

	function chooseLang (sel1, sel2) {
		let $chooseLangBtn = document.querySelector(sel1)
		let $chooseLangWrap = document.querySelector(sel2)
		$chooseLangBtn.addEventListener('click', function(e) {
			$chooseLangWrap.classList.toggle('show')
			this.classList.toggle('active')
			e.preventDefault()
		})
	}

	function accordion() {
		const $acc = document.querySelectorAll('.accordion__header')
		$acc.forEach(item => {
			item.addEventListener('click', function() {
				const $currentlyActuveAccHeader = document.querySelector('.accordion__header.accordion__header-active')
				if($currentlyActuveAccHeader && $currentlyActuveAccHeader !== item) {
					$currentlyActuveAccHeader.classList.toggle('accordion__header-active')
					$currentlyActuveAccHeader.nextElementSibling.style.maxHeight = 0
				}

				this.classList.toggle('accordion__header-active')
				const $accBody = this.nextElementSibling
				if(this.classList.contains('accordion__header-active')){
					$accBody.style.maxHeight = $accBody.scrollHeight + 'px'
				} else {
					$accBody.style.maxHeight = 0
				}
			})
		})
	}

	function hamburgerMenu() {
		const $hamburgerBtnWrap = document.querySelector('.mobileHamburger')
		const $hamburgerBtn = document.querySelector('.hamburger')
		const $headerNav = document.querySelector('.header .nav')
		$hamburgerBtnWrap.addEventListener('click', function() {
			this.classList.toggle('active')
			$hamburgerBtn.classList.toggle('active')
			$headerNav.classList.toggle('show')
		})
	}

	chooseLang('.nav__link.lang', '.choose-lang')
	chooseLang('.moblie-choose-lang .nav__link', '.moblie-choose-lang .choose-lang')
	accordion()
	hamburgerMenu()

})
