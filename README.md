Add Eslint, Prettier and Husky

```bash
yarn add --dev @typescript-eslint/eslint-plugin

yarn add --dev prettier eslint-config-prettier

yarn add --dev husky
yarn husky install
yarn husky add .husky/pre-commit "yarn tsc --noEmit && yarn eslint . && yarn prettier --write ."
```
