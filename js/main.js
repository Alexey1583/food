'use strict';

// Tab

window.addEventListener('DOMContentLoaded', () => {

	const tabheaderItem = document.querySelectorAll('.tabheader__item'),
			tabheaderItems = document.querySelector('.tabheader__items'),
			tabContent = document.querySelectorAll('.tabcontent');

	function hideTabcontent() {
		tabContent.forEach(item => {
			item.classList.add('hide');
		});

		tabheaderItem.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTadsContent(i = 0) {
		tabContent[i].classList.remove('hide');
		tabContent[i].classList.add('show', 'fade');
		tabheaderItem[i].classList.add('tabheader__item_active');
	}

	tabheaderItems.addEventListener('click', function (e) {

		if (e.target && e.target.classList.contains('tabheader__item')) {
			tabheaderItem.forEach((item, i) => {
				if (e.target == item) {
					hideTabcontent();
					showTadsContent(i);
				}

			});
		}
	});

	hideTabcontent();
	showTadsContent();

	// Timer

	const dedline = "2022-03-15";

	function getTheBalance(endTime) {
	const t = Date.parse(endTime) - Date.parse(new Date()),
			days = Math.floor(t / (1000 * 60 * 60 *24)),
			hours = Math.floor((t / (1000 * 60 * 60)) % 24),
			minutes = Math.floor((t / (1000 * 60)) % 60),
			seconds = Math.floor((t / 1000) % 60);

	return {
		'total': t,
		days,
		hours,
		minutes,
		seconds,
	};
	}
	
	function getZero(num) {
		if (num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function outputElement(selector, endTime) {
		const timer = document.querySelector(selector),
				days = timer.querySelector('#days'),
				hours = timer.querySelector('#hours'),
				minutes = timer.querySelector('#minutes'),
				seconds = timer.querySelector('#seconds'),
				timeInterval = setInterval(updateClock, 1000);

		updateClock();
		function updateClock(){
			const t = getTheBalance(endTime);

				days.innerHTML = getZero(t.days);
				hours.innerHTML = getZero(t.hours);
				minutes.innerHTML = getZero(t.minutes);
				seconds.innerHTML = getZero(t.seconds);

				if (t.total <= 0) {
					clearInterval(timeInterval);
				}
		}
	}
	outputElement('.timer', dedline);
});