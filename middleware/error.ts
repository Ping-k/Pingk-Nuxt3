/*
 * @Descripttion:
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-05-11 14:50:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-11 15:47:38
 */

export default defineNuxtRouteMiddleware((to, from) => {
  console.log(
    `=============【自定义路由中间件】=============
  自定义中间件，需要手动在pages页面里面注入
  definePageMeta({
    middleware: ["error"]
    // or middleware: 'auth'
  })
  `,
    to
  );
  if (to.fullPath === "/job") {
    console.log(`===============自定义error=================`);
    // return navigateTo("/error");
    // throw createError({ statusCode: 404, statusMessage: "Page Not Found 中间件" });
    // throw createError({ statusCode: 500, statusMessage: "Page Error 中间件" });
  }
});
