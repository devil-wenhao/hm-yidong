// 专门处理用户信息得存储和删除  以及获取  放在localStorge

const USER_TOKEN = 'heima-91' // 这个key专门用来存储用户信息
// 设置用户得信息
export function setUser (user) {
  localStorage.setItem(USER_TOKEN, JSON.stringify(user))
}
// 读取用户信息
export function getUser () {
  return JSON.parse(localStorage.getItem(USER_TOKEN))
}
// 删除用户信息
export function delUser () {
  localStorage.removeItem(USER_TOKEN)
}
