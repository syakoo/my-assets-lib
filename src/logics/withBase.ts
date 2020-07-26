import { format } from 'url'
import getConfig from 'next/config'

const { publicRuntimeConfig = {} } = getConfig() || {}
const { basePath } = publicRuntimeConfig

export default (path: string): string => format((basePath || '') + (path || ''))
