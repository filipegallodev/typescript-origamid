export default class Timeout {
    id: number;
    handler: TimerHandler;
    constructor(handler: TimerHandler, time: number);
    clear(): void;
}
