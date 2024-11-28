'use strict'

// BG
const mainBg = document.querySelector('.main__bg')

const mainHeight = document.body.offsetHeight
console.log(mainHeight)

for (let i = 0; i < mainHeight; i += 500) {
	let bgDuo = document.createElement('div')
	bgDuo.className = 'main__bg-duo'
	let bgImg1 = document.createElement('img')
	let bgImg2 = document.createElement('img')
	bgImg1.className = 'main__bg-img'
	bgImg2.className = 'main__bg-img'
	bgImg1.src = './assets/images/bg.png'
	bgImg2.src = './assets/images/bg.png'
	bgImg1.style.transform = `rotate(${Math.random() * 360}deg)`
	bgImg2.style.transform = `rotate(${Math.random() * 360}deg)`
	bgDuo.appendChild(bgImg1)
	bgDuo.appendChild(bgImg2)
	mainBg.appendChild(bgDuo)
}

// FAQ
const questions = document.querySelectorAll('.faq__question')
const questionsBtns = document.querySelectorAll('.faq__question-btn')

for (let i = 0; i < questions.length; i++) {
	questions[i].style.maxHeight =
		questions[i].querySelector('.faq__question-head').clientHeight + 40 + 'px'
}
window.addEventListener('resize', function () {
	for (let i = 0; i < questions.length; i++) {
		if (questionsBtns[i].style.transform != 'rotate(90deg)') {
			questions[i].style.maxHeight =
				questions[i].querySelector('.faq__question-head').clientHeight +
				40 +
				'px'
		} else {
			questions[i].style.maxHeight = questions[i].scrollHeight + 'px'
		}
	}
})

function questionToggle(index) {
	const headHeight = questions[index].querySelector(
		'.faq__question-head'
	).clientHeight // Получаем высоту faq__question-head

	if (questionsBtns[index].style.transform == 'rotate(90deg)') {
		questionsBtns[index].style.transform = 'rotate(0deg)'
		if (window.innerWidth <= 720) {
			questions[index].style.maxHeight = headHeight + 40 + 'px'
		} else {
			questions[index].style.maxHeight = headHeight + 40 + 'px'
		}
	} else {
		questionsBtns[index].style.transform = 'rotate(90deg)'
		questions[index].style.maxHeight = questions[index].scrollHeight + 'px'
	}
}

for (let i = 0; i < questionsBtns.length; i++) {
	questionsBtns[i].addEventListener('click', () => {
		questionToggle(i)
	})
}
// MENU-BTN

const menuBtn = document.querySelector('.header__menu-btn')
const navBar = document.querySelector('.header__nav')
const navLinks = document.querySelectorAll('.header__nav-link')

menuBtn.addEventListener('click', function () {
	this.classList.toggle('active')
	navBar.classList.toggle('active')
})
