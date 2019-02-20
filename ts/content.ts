import * as http from "http";

export default class Content {

    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h1 style='color: red;'>Elágazások</h1>");

        var i = true;
        if (i) {
            res.write("<p>if true</p>");
            i = false;
        } else {
            res.write("<p>else true</p>");
        }
        if (i) {
            res.write("<p>if true</p>");
        } else {
            res.write("<p>else true</p>");
        }

        switch ("A") {
            case "A":
                res.write("<p>switch-case elágazás </p>");
                break;
            default:
                break;
        }

        res.write("<a href='https://github.com/Xeno1080/Elagazasok' target='_blank'>" +
            "https://github.com/Xeno1080/Elagazasok</a><br>");
        res.end();
    }
}
