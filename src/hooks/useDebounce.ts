/**
 * 防抖
 * @param fn 传入方法
 * @param delay 传入时间
 */
export default function (fn: any, delay: number) {
    let timer: any = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
            timer = setTimeout(fn, delay);
        } else {
            timer = setTimeout(fn, delay);
        }
    };
}