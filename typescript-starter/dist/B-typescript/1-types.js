"use strict";
console.log('Hello Types !');
// Podstawowe :
var str;
var num;
var bool;
var numArray;
var boolArray;
numArray = [1, 2, 3.2];
boolArray = [true];
var moreComplex = {};
var detailedObject = { name: 'Katarzyna' };
detailedObject.age = 38;
var anyType = 'najpierw-string';
anyType = 123;
// Dodatkowe:
/// Enum
var Apartment;
(function (Apartment) {
    Apartment[Apartment["BIG"] = 100] = "BIG";
    Apartment[Apartment["MEDIUM"] = 90] = "MEDIUM";
    Apartment[Apartment["SMALL"] = 10] = "SMALL";
    Apartment[Apartment["LITTLE"] = 3] = "LITTLE";
})(Apartment || (Apartment = {}));
var apart = Apartment.LITTLE;
