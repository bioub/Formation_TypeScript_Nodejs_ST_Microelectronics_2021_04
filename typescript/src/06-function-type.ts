interface CallbackTimeout {
  (): void
}

function setTimeoutSync(cb: CallbackTimeout, delay: number) {
  // pause delay ms
  const debut = Date.now();
  while (debut + delay > Date.now()) {} // bloqué thread (MAUVAISE PRATIQUE)
  cb();
}

function myCallback() {

}


setTimeoutSync(myCallback, 1000);
