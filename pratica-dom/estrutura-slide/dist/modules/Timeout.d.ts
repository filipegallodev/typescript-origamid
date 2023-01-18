export default class Timeout {
    id: number;
    handler: TimerHandler;
    start: number;
    timeLeft: number;
    constructor(handler: TimerHandler, time: number);
    clear(): void;
    pause(): void;
    continue(): void;
}
