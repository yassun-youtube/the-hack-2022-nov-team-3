/**
 * オブジェクトが空かの判定
 */

export function isEmptyObject(obj: { [key: string]: any } | undefined) {
  if (!obj) return true
  return !Object.keys(obj).length
}
