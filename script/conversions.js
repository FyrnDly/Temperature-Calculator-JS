// Celsius
const ctr = function(celsius) {
    return 0.8 * celsius;
};
const ctf = function(celsius) {
    return 1.8 * celsius + 32;
};
const ctk = function(celsius) {
    return 273 + celsius * 1;
};

// Reamur
const rtc = function(reamur) {
    return 1.25 * reamur;
};
const rtf = function(reamur) {
    return 2.25 * reamur + 32;
};
const rtk = function (reamur) {
    return 1.25 * reamur + 273;
};

// Fahrenheit
const ftc = function (fahrenheit) {
    return (fahrenheit - 32) / 1.8;
};
const ftr = function (fahrenheit) {
    return (fahrenheit - 32) / 2.25;
};
const ftk = function (fahrenheit) {
    return (fahrenheit - 32) / 1.8 + 273;
};

// Kelvin
const ktc = function (kelvin) {
    return kelvin - 273;
};
const ktr = function (kelvin) {
    return 0.8 * (kelvin - 273);
};
const ktf = function (kelvin) {
    return 1.8 * (kelvin - 273) + 32;
};