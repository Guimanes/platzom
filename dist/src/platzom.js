'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str;
  var length = translation.length;
  var strLower = str.toLowerCase();
  var reverseStr = function reverseStr(str) {
    return str.split('').reverse().join('');
  };
  var minMay = function minMay(str) {
    return str.split('').map(function (v, k) {
      return k % 2 ? v.toLowerCase() : v.toUpperCase();
    }).join('');
  };

  // Si la palabra origina es un palíndromo,
  // ninguna regla anterior cuenta y se devuelve
  // la misma palabra intercalando mayúsculas y minúsculas
  if (strLower == reverseStr(strLower)) {
    return minMay(str);
  }

  // si la palabra termina en ar, se le quitan esos dos caracteres.
  if (str.endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  // si la palabra inicia con Z, se le añade "pe" al final
  if (strLower.startsWith('z')) {
    translation += 'pe';
  }

  // si la palabra traducida tiene 10 o mas letras,
  // se debe partir a la mitad y unir con un guion medio
  if (length >= 10) {
    var mitad = Math.round(length / 2);
    var firstHalf = translation.slice(0, mitad);
    var secondHalf = translation.slice(mitad);
    translation = firstHalf + '-' + secondHalf;
  }

  return translation;
}