const REFRESH_DELAY = 1000;

class Clock {
  hostEl: HTMLDivElement;
  constructor(hostEl: HTMLDivElement) {
    this.hostEl = hostEl;
  }
  render() {
    const now = new Date();
    this.hostEl.innerText = now.toLocaleTimeString();
  }
  start() {
    this.render();
    setInterval(() => {
      this.render();
    }, REFRESH_DELAY);
  }
}
