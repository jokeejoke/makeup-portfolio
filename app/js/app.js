//import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)
import scrollSpy from 'simple-scrollspy'
import pageScroll from 'page-scroll-to-id'





document.addEventListener('DOMContentLoaded', () => {

	scrollSpy('.header', {
		offset: 128
	})

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

	function chooseLang () {
		let $chooseLangBtn = document.querySelector('.nav__link.lang')
		let $chooseLangWrap = document.querySelector('.choose-lang')
		$chooseLangBtn.addEventListener('click', function(e) {
			$chooseLangWrap.classList.toggle('show')
			this.classList.toggle('active')
			e.preventDefault()
		})
	}
	chooseLang()

})
