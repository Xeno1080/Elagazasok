"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
        res.write("<h1 style='color: red;'>Elagazasok</h1>");

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
                res.write("<p>switch-case elagazas </p>");
                break;
            default:
                break;
        }
    }
}
exports.default = Content;
