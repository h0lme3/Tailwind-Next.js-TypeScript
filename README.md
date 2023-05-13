Add Eslint, Prettier and Husky

```bash
yarn add --dev @typescript-eslint/eslint-plugin

yarn add --dev prettier eslint-config-prettier

yarn add --dev husky
yarn husky install // yarn prepare
yarn husky add .husky/pre-commit "npx lint-staged $1"
yarn husky add .husky/post-merge "yarn install --freeze-lockfile"
```

### Read [this article](https://haodev007.medium.com/using-tailwind-css-next-js-typescript-like-a-pro-integration-40ad8fed0c75)
