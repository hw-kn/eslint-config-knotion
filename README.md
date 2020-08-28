# eslint-config-knotion

Configuración de [ESLint](https://eslint.org/) y [PrettierX](https://www.npmjs.com/package/prettierx) para ser usada en aplicaciones React/TypeScript que cumple las reglas de [StandardJS](https://standardjs.com/) con algunas adaptaciones.

Esta configuración puede usarse sin problemas con el plugin ESLint para [VS Code](https://code.visualstudio.com/), para linteo desde línea de comando, o en un hook de precommit.

## Plugins incluídos

- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [compat](https://www.npmjs.com/package/eslint-plugin-compat)
- [jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [prettierx](https://www.npmjs.com/package/eslint-plugin-prettierx)
- [promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [react](https://www.npmjs.com/package/eslint-plugin-react)
- [react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [react-perf](https://www.npmjs.com/package/eslint-plugin-react-perf)
- [simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)
- [unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)

## Uso

Instala ESLint v7.6 o posterior y el `eslint-config-knotion` directo desde el repositorio de GitHub:

```bash
yarn add -D eslint@7 github:hw-kn/eslint-config-knotion
```

Crea un archivo de configuración regular, como en este .eslintrc.js de ejemplo:

```javascript
module.exports = {
  root: true,
  extends: ['knotion'],
}
```

Es todo, las dependencias están incluídas en la configuración.
Puedes sobreescribir lo que quieras (rules, env, etc).

### Reglas de runtime

Si deseas usar las reglas para TypeScript que requieren información de tiempo de ejecución, usa un config como este:

```javascript
module.exports = {
  root: true,
  extends: ['knotion', 'knotion/ts-runtime'], // incluye reglas de runtime
  parserOptions: {
    project: './tsconfig.json', // la ruta a tu archivo de configuración de TS
  },
}
```

## Uso con VS Code

Instala la extensión [ESLint para VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) y agrega esto a tu `.vscode/settings.json`:

```json
{
  // Esto habilita a la extensión ESLint como formatter con Prettierx integrado
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // Si tienes `editor.formatOnSave:true` global puedes omitir la regla anterior
  // y definir solamente el formateador predeterminado.
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  }
}
```

### NOTA

El bloque `editor.codeActionsOnSave` formatea automáticamente los archivos manejados por ESLint antes de guardarlos y hace lo mismo que `editor.formatOnSave:true` para esos archivos.

## Fake Prettier

Si quieres guardar un archivo formateado por **PrettierX** pero sin comprobarlo con ESLint puedes usar la extensión [Prettier para de VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) con el [Prettier de aMarCruz](https://github.com/aMarCruz/prettier).

```bash
yarn add -D github:aMarCruz/prettier
```

Este módulo está pensado para trabajar con cualquier extensión o comando que use Prettier, sustituyéndolo por el más poderoso PrettierX.
