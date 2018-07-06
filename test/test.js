const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function() {
  it('Si la palabra termina en ar, se le quitan esos dos caracteres.', function() {
    const translation = platzom("Programar")
    expect(translation).to.equal("Program")
  })
  it('Si la palabra inicia con Z, se le añade "pe" al final.', function() {
    const translation1 = platzom("Zorro")
    const translation2 = platzom("Zarpar")
    expect(translation1).to.equal("Zorrope")
    expect(translation2).to.equal("Zarppe")

  })
  it('Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guion medio.', function() {
    const translation3 = platzom("abecedario")
    expect(translation3).to.equal("abece-dario")
  })
  it('Si la palabra origina es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas.', function() {
    const translation4 = platzom("sometemos")
    expect(translation4).to.equal("SoMeTeMoS")
  })
})
