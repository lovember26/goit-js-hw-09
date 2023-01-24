import Notiflix from 'notiflix';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayInput = document.querySelector('input[name=delay]');
const stepInput = document.querySelector('input[name=step]');
const amountInput = document.querySelector('input[name=amount]');
const submitBtn = document.querySelector('button[type=submit]');

submitBtn.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();
  let delayData = +delayInput.value;
  let stepData = +stepInput.value;
  let amountData = +amountInput.value;
  for (let position = 1; position <= amountData; position++) {
    createPromise(position, delayData)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delayData += stepData;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({
          position,
          delay,
        });
      }
    }, delay);
  });
}
