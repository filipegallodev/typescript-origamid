export interface CountList {
    [key: string]: number;
}
export default function countBy(arr: (string | number)[]): CountList;
