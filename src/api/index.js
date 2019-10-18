import { API_URL, API_KEY } from '../constants'
import setUrlParams from '../utils/set-url-params'


/**
 * Search API
 *
 * @param {object} params - the search params
 */

export async function searchAPI(params) {
  const defaultParams = {
    s: '',
    page: 1,
  }

  const apiParams = Object.assign({}, defaultParams, params, { 'apikey': API_KEY })
  const url = setUrlParams(API_URL, apiParams)

  try {
    const request = await fetch(url)

    if (request.status !== 200) {
      throw request.status
    }

    const json = request.json()

    return json
  } catch (err) {
    throw new Error('Search API Error', err)
  }
}
