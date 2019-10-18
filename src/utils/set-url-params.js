/**
 * Set Url Params
 *
 * @param {string} uri
 * @param {object} params
 */

export default function(uri, params) {
  const relative = new RegExp('^/').test(uri)
  let url

  if (relative) {
    url = new URL(window.location.origin + uri)
  } else {
    url = new URL(uri)
  }

  Object.keys(params).forEach(key => {
    url.searchParams.set(key, params[key])
  })

  url = url.toString()

  if (relative) {
    return url.replace(window.location.origin, '')
  }

  return url
}
