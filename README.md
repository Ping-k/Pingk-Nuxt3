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

```
nuxi 命令官方文档：https://nuxt.com.cn/docs/api/commands/dev

```

```
部署
1、打包
yarn build
2、pm2部署
yarn deploy-pm2
```
```
静态托管-预渲染
yarn generate
generate 命令预呈现应用程序的每个路由，并将结果存储在普通的HTML文件中，您可以将其部署到任何静态托管服务上。
该命令会触发nuxi build 命令，prerender 参数设置为true。对于每个页面，Nuxt使用爬虫程序生成相应的HTML和有效负载文件。生成的文件将在.output/public的目录。并且生产dist目录，可直接部署。
```
```
preview 命令启动一个服务器来预览你的Nuxt应用程序。
```