import Head from 'next/head'

export default function SEO({ title = 'Aaditya Kapruwan — Portfolio', description = 'A short bio and blog.', image, url }) {
  const siteTitle = title
  const siteDescription = description
  const siteUrl = url || ''
  const siteImage = image || '/og-image.png'

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      {siteUrl && <meta property="og:url" content={siteUrl} />}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
    </Head>
  )
}
