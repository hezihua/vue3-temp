import type { NavigationGuardWithThis } from 'vue-router'

const whiteList = ['/login', '/rule', '/dashboard']

export const beforeEach: NavigationGuardWithThis<undefined> = async (
  to,
  _,
  next
) => {
  if (whiteList.includes(to.path)) {
    return next()
  }
  return next()
}
