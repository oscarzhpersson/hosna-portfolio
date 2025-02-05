import path from 'path'
import sharp from 'sharp'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { en } from 'payload/i18n/en'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Media } from '@/payload-cms/collections/media'
import { Pages } from '@/payload-cms/collections/pages'
import { Users } from '@/payload-cms/collections/users'

import { SiteSettings } from '@/payload-cms/globals/site-settings'
import { SeoProperties } from '@/payload-cms/globals/seo-properties'
import { ProfilePicture } from '@/payload-cms/globals/profile-picture'
import { Skills } from '@/payload-cms/collections/skills'
import { About } from '@/payload-cms/globals/about'
import { Projects } from '@/payload-cms/globals/projects'
import { Proficiencies } from '@/payload-cms/globals/proficiencies'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Media, Pages, Users, Skills],
  globals: [SiteSettings, SeoProperties, ProfilePicture, About, Proficiencies, Projects],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URI || '',
    },
  }),

  i18n: {
    supportedLanguages: { en },
  },
  plugins: process.env.BLOB_READ_WRITE_TOKEN
    ? [
        vercelBlobStorage({
          collections: {
            [Media.slug]: true,
          },
          token: process.env.BLOB_READ_WRITE_TOKEN || '',
        }),
      ]
    : [],
  admin: {
    autoLogin: {
      email: 'hosna@portfolio.com',
      prefillOnly: true,
    },
  },
  async onInit(payload) {
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.docs.length === 0) {
      await payload.create({
        collection: 'users',
        data: {
          email: 'hosna@portfolio.com',
          password: 'password',
        },
      })
    }
  },

  sharp,
})
