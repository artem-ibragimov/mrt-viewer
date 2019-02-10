"use strict";
/**
 * Worker для паралелльного построения 3D поверхности из двух 2D графиков
 * @param {IData} data словарь значений x, y
 * @returns {Array<number>} значения z
 */
var calculate = function (data) {
    var temp = Array.from({ length: data.x.length }, function () { return data.x; });
    return temp.map(function (v, i) { return v.map(function (x) { return x * data.y[i]; }); });
};
// @ts-ignore
addEventListener('message', function (message) { return postMessage(calculate(message.data)); });
