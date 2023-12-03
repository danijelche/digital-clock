const hoursElement = document.getElementById("hrs");
const minutesELement = document.getElementById("min");
const secondsElement = document.getElementById("sec");
const monthElement = document.getElementById("month");
const dayElement = document.getElementById("day");
const day2Element = document.getElementById("day2");
const yearElement = document.getElementById("year");

function updateTime() {
	const date = new Date();
	
	const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
	const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
	const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
	hoursElement.innerHTML = hours;
	minutesELement.innerHTML = minutes;
	secondsElement.innerHTML = seconds;
}

function updateDate() {
	const date = new Date();
	
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	monthElement.innerHTML = months[date.getMonth()];
	day2Element.innerHTML = weekDays[date.getDay()];
	dayElement.innerHTML = date.getDate();
	yearElement.innerHTML = date.getFullYear();
}

	setInterval(()=>{
		updateTime();
		updateDate();
	},1000);