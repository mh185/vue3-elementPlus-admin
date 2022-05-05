/**
 * @param val 
 * @returns 
 */
export default function (val: any) {
    let copyipt = document.createElement("input");
    let text = val;
    copyipt.setAttribute("value", text);
    document.body.appendChild(copyipt);
    copyipt.select();
    document.execCommand("copy");
    document.body.removeChild(copyipt);
    return val
}