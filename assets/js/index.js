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
