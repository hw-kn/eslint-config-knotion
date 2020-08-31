# Changes

## \[0.1.2] - 2020-08-28

### Changed

- Requiere yarn `^1.22.5` como versión mínima y la establece con `yarn policies set-version` (este comando crea el archivo .yarnrc)

### Removed

- Elimina el valor `singleline.delimiter` de la regla `@typescript-eslint/member-delimiter-style` por conflicto con PrettierX (se usará el delimitador default ";")

## \[0.1.1] - 2020-08-28

### Changed

- Agrega `tslint:^1.10` como dependencia para evitar el warning de prettierx debido al compilador de Angular incorporado.
- Actualiza dependencias.
- Establece env `es2017` y elimina `parserOptions.ecmaVersion` (el entorno es2017 la pone a 8).
- Actualiza la configuración de VS Code en el Readme.

## \[0.1.0] - 2020-08-21

Primer versión en su propio repositorio, para ESLint 7.6+

- TypeScript eslint-plugin
- TypeScript parser
- confusing-browser-globals
- compat
- jsx-a11y
- prettierx
- promise
- react
- react-hooks
- react-perf
- simple-import-sort
- unicorn
