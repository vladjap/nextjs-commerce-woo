import { FetcherError } from '@commerce/utils/errors'
import type { GraphQLFetcher } from '@commerce/api'
import { getCommerceApi } from '../'
// import fetch from './fetch' // tmp removed - not working in localhost with change host file for API source

const fetchGraphqlApi: GraphQLFetcher = async (
  query: string,
  { variables, preview } = {},
  fetchOptions
) => {
  const config = getCommerceApi().getConfig()
  const res = await fetch(config.commerceUrl, {
    ...fetchOptions,
    method: 'POST',
    headers: {
      ...fetchOptions?.headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    throw new FetcherError({
      errors: json.errors ?? [{ message: 'Failed to fetch Woo API' }],
      status: res.status,
    })
  }

  return { data: json.data, res }
}

export default fetchGraphqlApi
