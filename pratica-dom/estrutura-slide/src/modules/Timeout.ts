export default class Timeout {
  id;
  handler;
  constructor(handler: TimerHandler, time: number) {
    this.id = setTimeout(handler, time);
    this.handler = handler;
  }
  clear() {
    clearTimeout(this.id);
  }
}
