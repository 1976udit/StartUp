import "server-only"
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, token} from '../env'

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token
})

if(!token) {
  console.error('write token is not set')
}