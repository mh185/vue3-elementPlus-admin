export default function (list: any, header: String, title: String): void {
    for (let i = 0; i < list.length; i++) {
        for (const key in list[i]) {
            header += `${list[i][key] + "\t"},`;
        }
        header += "\n";
    }
    const uri =
        "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(header as string);
    const link = document.createElement("a");
    link.href = uri;
    link.download = title as string;
    link.click();
}