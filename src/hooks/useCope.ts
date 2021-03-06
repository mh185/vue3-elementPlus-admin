/**
 * @param val 需要复制得内容
 * @returns 
 */
export default function (val: string): string {
    let copyipt = document.createElement("input");
    let text = val;
    copyipt.setAttribute("value", text);
    document.body.appendChild(copyipt);
    copyipt.select();
    document.execCommand("copy");
    document.body.removeChild(copyipt);
    return val
}