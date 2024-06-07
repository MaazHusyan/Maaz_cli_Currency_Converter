#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const currencies = {
    USD: 1, //Base Currency
    EUR: 0.94,
    INR: 83.44,
    KWD: 0.31,
    PKR: 277,
    SAR: 3.75
};
let user = await inquirer_1.default.prompt([
    {
        name: "from",
        message: "Enter currency:- From ",
        type: "list",
        choices: ["USD", "EUR", "INR", "KWD", "PKR", "SAR"]
    },
    {
        name: "to",
        message: "Enter currency:- To",
        type: "list",
        choices: ["USD", "EUR", "INR", "KWD", "PKR", "SAR"]
    },
    {
        name: "amount",
        message: "Select your Amount",
        type: "number"
    }
]);
let fromCurrency = currencies[user.from];
let toCurrency = currencies[user.to];
let userAmount = user.amount;
let baseAmount = userAmount / fromCurrency;
let convertedAmount = baseAmount * toCurrency;
console.log(Math.round(convertedAmount));
// console.log(convertedAmount);
