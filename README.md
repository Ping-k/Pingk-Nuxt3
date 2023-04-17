# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

```
Nuxt使用两个目录来处理像stylesheets, fonts 或 images这样的资产。
public/目录内容原样提供给服务器根目录。
assets/目录按惯例包含你想要构建工具(Vite或webpack)处理的每个资产。
```
```
Nuxt3组件及pages页面中Vue根节点只能有一个，不能多个，多个Nuxt路由解析异常，Vue3官方是支持多根节点的，但是Nuxt3是根据pages目录自动生成的router所以不支持多级根节点。
登录页面login多根节点导致切换路由过渡动画报错。
```