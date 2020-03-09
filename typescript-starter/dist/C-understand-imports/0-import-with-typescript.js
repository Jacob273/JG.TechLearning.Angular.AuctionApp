"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var greetings_1 = __importDefault(require("./modules/greetings"));
console.log(greetings_1.default('Michał'));
// Żeby Quokka zadziałała musimy zrobić:
// npm i -D ts-node tsconfig-paths
// doinstaluje to 2 zależności do dev:
// ts-node
// tsconfig-paths
