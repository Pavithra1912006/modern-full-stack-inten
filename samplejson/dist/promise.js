"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise = new Promise((resolve, reject) => {
    console.log("this is a promise");
    resolve("promise resolved !");
});
