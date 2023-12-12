import './discount-timer.scss';

const daysElement = document.querySelector('.discount-timer__days');
const hoursElement = document.querySelector('.discount-timer__hours');
const minutesElement = document.querySelector('.discount-timer__minutes');
const secondsElement = document.querySelector('.discount-timer__seconds');

const finishDiscountDate = new Date('2023-12-31T18:00:00');

const updateDiscountDate = () => {
    const currentDate = new Date().valueOf();
}

setInterval(updateDiscountDate, 1000)