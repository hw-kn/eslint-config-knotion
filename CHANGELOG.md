# Changes

## \[0.2.2] - 2020-12-07

### Changed

- Fix a las reglas de `eslint-simple-import-sort` posición del bloque `type`

## \[0.2.1] - 2020-12-07

### Changed

- Ajustes por cambio de reglas de `eslint-simple-import-sort` 6 y 7 (bloque `type` y regla `export`)
- Actualiza dependencias.

## \[0.2.0] - 2020-11-12

### Added

- Regla de runtime `@typescript-eslint/no-confusing-void-expression` con ignoreVoidOperator `true`
- Regla `unicorn/no-object-as-default-parameter`

### Changed

- Actualiza dependencias, ahora se requiere ESLint 7.11 como mínimo.
- Cambia `@typescript-eslint/prefer-reduce-type-parameter` a warn en lugar de error.
- Agrega opciones a `@typescript-eslint/restrict-template-expressions`, todas `true`
- Usa `@typescript-eslint/no-duplicate-imports` para archivos TS, en lugar de la regla de nativa de ESLint.

### Removed

- `@typescript-eslint/prefer-string-starts-ends-with`

## \[0.1.8] - 2020-10-31

### Changed

- Actualiza `react-perf`
- Compacta los `imports` con opciones de `eslint-plugin-simple-import-sort`.

## \[0.1.7] - 2020-10-29

### Changed

- Usa la opción `ignoredTypeNames` en `@typescript-eslint/no-base-to-string`
- Elimina `prefer-optional-chain` y `unbound-method` de reglas de runtime TS.
- Elimina 'flowinclude' (Flow está en desuso) de los comentarios de block y agrega `#__INLINE__` y `#__NOINLINE__` (directivas Terser).
- Elimina `no-debugger`, en producción el minificador quita estas instrucciones.
- Deshabilita la regla `no-redeclare` de ESLint y habilita la de TypeScript en .ts y .tsx

## \[0.1.6] - 2020-09-30

### Fixed

- Elimina `@typescript-eslint/no-for-in-array` que causaba error en el config normal al requerir el runtime de TypeScript.

## \[0.1.5] - 2020-09-21

### Changed

- `@typescript-eslint/no-use-before-define` ya no verifica variable en contexto superior.
- Establece `ecmaVersion` a 2019, en lugar de 2017 como estaba automáticamente.
- Actualiza dependencias.

### Fixed

- Mueve `impliedStrict` a `ecmaFeatures`, donde pertenece.

### Removed

- La regla `@typescript-eslint/ban-ts-comment`.
  No tiene mucho sentido si no se sabe lo que se está haciendo.

## \[0.1.4] - 2020-09-01

### Fixed

- La regla `simple-import-sort/sort` ahora reconoce a los paquetes que inician con `'public\/'`, `'src/'`, y `'~/'` como internos y los coloca después de los `import` de efectos secundarios.

## \[0.1.3] - 2020-09-01

### Fixed

- Sustituye `no-loss-of-precision` por `@typescript-eslint/no-loss-of-precision` también en los .js, debido a problemas con los separadores numéricos de ES8.
- Sustituye `no-shadow` por `@typescript-eslint/no-shadow` debido a incompatibilidades con TS.
- Deshabilita `@typescript-eslint/no-unused-vars` debido a un bug.

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
