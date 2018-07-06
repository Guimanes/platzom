# Platzom

Platzom es un idioma inventado para el curso de fundamentos de javascript de Platzi, el mejor lugar de educación online

## Descripción del idioma

- Si la palabra termina en ar, se le quitan esos dos caracteres.

- Si la palabra inicia con Z, se le añade "pe" al final.

- Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guion medio.

- Si la palabra origina es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas.

## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom("Programar") // Program
```

## Licencia
[MIT](https://opensource.org/licenses/MIT)
