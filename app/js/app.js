//import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)
import scrollSpy from 'simple-scrollspy'
import scrollPage from 'page-scroll-to-id'
import Swiper, { Navigation, Pagination } from 'swiper'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


require('./vendor/@fancyapps/fancybox/dist/jquery.fancybox')


document.addEventListener('DOMContentLoaded', () => {

	// gsap animation
	gsap.registerPlugin(ScrollTrigger);

	scrollSpy('.header', {
		offset: 128
	})

	window.onscroll = function () {
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

	
	Swiper.use([Navigation, Pagination]);
	const swiper = new Swiper('.slider__container', {
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.slider__pagination',
			clickable: true,
		},
	});

	function chooseLang(sel1, sel2) {
		let $chooseLangBtn = document.querySelector(sel1)
		let $chooseLangWrap = document.querySelector(sel2)
		$chooseLangBtn.addEventListener('click', function (e) {
			$chooseLangWrap.classList.toggle('show')
			this.classList.toggle('active')
			e.preventDefault()
		})
	}

	function accordion() {
		const $acc = document.querySelectorAll('.accordion__header')
		$acc.forEach(item => {
			item.addEventListener('click', function () {
				const $currentlyActuveAccHeader = document.querySelector('.accordion__header.accordion__header-active')
				if ($currentlyActuveAccHeader && $currentlyActuveAccHeader !== item) {
					$currentlyActuveAccHeader.classList.toggle('accordion__header-active')
					$currentlyActuveAccHeader.nextElementSibling.style.maxHeight = 0
				}

				this.classList.toggle('accordion__header-active')
				const $accBody = this.nextElementSibling
				if (this.classList.contains('accordion__header-active')) {
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
		$hamburgerBtnWrap.addEventListener('click', function () {
			this.classList.toggle('active')
			$hamburgerBtn.classList.toggle('active')
			$headerNav.classList.toggle('show')
		})
	}

	function loaderAnimation() {
		let tl = gsap.timeline()
		tl.to('.loader__item', {
			duration: 0.7,
			stagger: -0.4,
			x: "100%",
			//ease: Expo.easeInOut
		})
		tl.set('.loader', {
			width: 0
		})
	}

	function sitenimation() {
		gsap.fromTo('.banner__image img', {
			duration: 2,
			scale: 1.1
		}, {
			duration: 2,
			scale: 1
		})
		gsap.from('.banner__title', { y: 100, duration: 2, opacity: 0 })
		gsap.fromTo('.banner__btn', { y: -100, duration: 2, opacity: 0 }, {y: 0, opacity: 1})
		gsap.from('.aboutMe__title', {duration: 2, y: 50, opacity: 0})
		gsap.from('.aboutMe__text', {duration: 1.5, opacity: 0, y: 50})
		gsap.from('.aboutMe__img', {duration: 1.5, opacity: 0, y: -50, delay: 0.5})
	}

	function aboutMeAnimation() {
		const scrollAnim = gsap.timeline({
			scrollTrigger: {
				trigger: '.about'
			}
		})
		scrollAnim.from('.about__title', { y: 100, opacity: 0, duration: 1 })
		scrollAnim.from('.about__text p', { y: 100, opacity: 0, duration: 1, stagger: 0.5 }, '-=0.5')
		scrollAnim.from('.about__image', { opacity: 0, duration: 1 }, '-=1')
		scrollAnim.from('.about__btn', { opacity: 0, duration: 0.5 }, '-=1')
		scrollAnim.from('.about__placeholder', { opacity: 0, x: 200, duration: 1 }, '-=1')
		scrollAnim.from('.about .figure', { opacity: 0, scale: 0, duration: 2 }, '-=1')
	}
	function servicesAnimation() {
		const anim = gsap.timeline({
			scrollTrigger: {
				trigger: '.services'
			}
		})
		anim.from('.services__title', { y: 200, opacity: 0, duration: 1.5 })
		anim.from('.accordion__item', { y: 200, opacity: 0, duration: 1, stagger: 0.2 }, '-=1')
	}
	function contactsAnimation() {
		const anim = gsap.timeline({
			scrollTrigger: {
				trigger: '.footer'
			}
		})
		anim.from('.footer__title', { y: 200, opacity: 0, duration: 1.5 })
		anim.from('.contacts li', { scale: 0, opacity: 0, duration: 1, stagger: 0.2 }, '-=1')
		anim.from('.social li', { scale: 0, opacity: 0, duration: 1, stagger: 0.2 }, '-=0.5')
	}

	function kitAnimation() {
		const anim = gsap.timeline({
			scrollTrigger: {
				trigger: '.makeupKit'
			}
		})
		anim.from('.makeupKit__title', { y: 100, opacity: 0, duration: 1.5 })
		anim.from('.makeupKit__text', { y: 100, opacity: 0, duration: 1, stagger: 0.5 }, '-=0.5')
		anim.from('.makeupKit__img', { y: 100, opacity: 0, duration: 1, stagger: 0.5 }, '-=0.5')
	}

	chooseLang('.nav__link.lang', '.choose-lang')
	chooseLang('.moblie-choose-lang .nav__link', '.moblie-choose-lang .choose-lang')
	accordion()
	hamburgerMenu()
	loaderAnimation()
	sitenimation()
	aboutMeAnimation()
	servicesAnimation()
	contactsAnimation()
	kitAnimation()

})