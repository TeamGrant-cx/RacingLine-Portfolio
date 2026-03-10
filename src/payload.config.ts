import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users.js'
import { Media } from './collections/Media.js'
import { Services } from './collections/Services.js'
import { PortfolioProjects } from './collections/PortfolioProjects.js'
import { TeamMembers } from './collections/TeamMembers.js'
import { Testimonials } from './collections/Testimonials.js'
import { ContactSubmissions } from './collections/ContactSubmissions.js'

import { HomePage } from './globals/HomePage.js'
import { AboutPage } from './globals/AboutPage.js'
import { ContactInfo } from './globals/ContactInfo.js'
import { SiteSettings } from './globals/SiteSettings.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  secret: process.env.PAYLOAD_SECRET,
  cors: [
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
  ].filter(Boolean),
  csrf: [
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
  ].filter(Boolean),
  admin: {
    user: Users.slug,
  },

  plugins: [
    vercelBlobStorage({
      enabled: process.env.NODE_ENV === 'production',
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
         

    }),
  ],

  editor: lexicalEditor(),

  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),

  collections: [
    Users,
    Media,
    Services,
    PortfolioProjects,
    TeamMembers,
    Testimonials,
    ContactSubmissions,
  ],

  globals: [
    HomePage,
    AboutPage,
    ContactInfo,
    SiteSettings,
  ],

  sharp,
})