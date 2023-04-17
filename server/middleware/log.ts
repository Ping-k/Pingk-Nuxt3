/*
 * @Descripttion:
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-13 15:15:03
 * @LastEditors:
 * @LastEditTime: 2023-04-13 15:15:14
 */
export default defineEventHandler((event) => {
  console.log('New request: ' + event.node.req.url)
})
