"use strict";
const path = require("path");
module.exports = {
    entry: "./client.js",
    output: {
        filename: "client.bundle.js",
        library: "clientApp",
        path: path.resolve("../../../", "./public/scripts/")
    }
};
