import { NotFoundPage, generatePageMetadata } from '@payloadcms/next/views'
import configPromise from '@/payload.config'
import { importMap } from '../importMap.js'

export const generateMetadata = async ({ params, searchParams }) =>
  generatePageMetadata({ config: configPromise, params: await params, searchParams: await searchParams })

export default async function NotFound({ params, searchParams }) {
  return <NotFoundPage config={configPromise} importMap={importMap} params={await params} searchParams={await searchParams} />
}
