import { Clock } from './clock';

const divEl = document.querySelector('.clock');

const clock = new Clock(divEl as HTMLDivElement);
clock.start();
