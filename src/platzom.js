export default function platzom(str) {
  let translation = str
  const length = translation.length
  const strLower = str.toLowerCase()
  const reverseStr = str => str.split('').reverse().join('')
  const minMay = str => str.split('').map((v, k) => k % 2 ? v.toLowerCase() : v.toUpperCase()).join('')

  // Si la palabra origina es un palíndromo,
  // ninguna regla anterior cuenta y se devuelve
  // la misma palabra intercalando mayúsculas y minúsculas
  if(strLower == reverseStr(strLower)) {
    return minMay(str)
  }

  // si la palabra termina en ar, se le quitan esos dos caracteres.
  if (str.endsWith('ar')) {
    translation = str.slice(0, -2)
  }

  // si la palabra inicia con Z, se le añade "pe" al final
  if (strLower.startsWith('z')) {
    translation += 'pe'
  }

  // si la palabra traducida tiene 10 o mas letras,
  // se debe partir a la mitad y unir con un guion medio
  if (length >= 10) {
    const mitad = Math.round(length / 2)
    const firstHalf = translation.slice(0, mitad)
    const secondHalf = translation.slice(mitad)
    translation = `${firstHalf}-${secondHalf}`
  }

  return translation;
}
