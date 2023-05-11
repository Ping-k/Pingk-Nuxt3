/*
 * @Descripttion:
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-05-11 15:04:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-11 16:31:02
 */
export default defineNuxtRouteMiddleware((to, from) => {
  console.log(
    `=============【.global全局路由中间件】=============
  无需注入，任意路由都会经过此中间件
  `,
    to
  );
  // const auth = useState('auth')
  // if (!auth.value.authenticated) {
  //   return navigateTo('/login')
  // }

  if (to.fullPath === "/error1") {
    // return navigateTo("/error");
    // throw createError({ statusCode: 404, statusMessage: "Page Not Found 中间件" });
    throw createError({ statusCode: 500, statusMessage: "Page Error 中间件" });
  }
  if (to.fullPath === "/error2") {
    // return navigateTo("/error");
    throw createError({ statusCode: 404, statusMessage: "Page Not Found 中间件" });
    // throw createError({ statusCode: 500, statusMessage: "Page Error 中间件" });
  }
});
