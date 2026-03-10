import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import configPromise from '@/payload.config'
import { importMap } from '../importMap.js'

export const generateMetadata = async ({ params, searchParams }) =>
  generatePageMetadata({ config: configPromise, params: await params, searchParams: await searchParams })

export default async function Page({ params, searchParams }) {
  return <RootPage config={configPromise} importMap={importMap} params={await params} searchParams={await searchParams} />
}
