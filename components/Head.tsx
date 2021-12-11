import Head from 'next/head'

const CustomHead = ({
  title,
  description,
  keywords,
  imageUrl,
}: {
  title: string
  description: string
  keywords: string
  imageUrl: string
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:alt' content={title} />

      <meta name='description' content={description} />
      <meta property='og:description' content={description} />
      <meta name='twitter:description' content={description} />

      <meta name='keywords' content={keywords} />

      <meta name='image' content={imageUrl} />
      <meta property='og:image' content={imageUrl} />
      <meta name='twitter:image' content={imageUrl} />

      <meta name='twitter:card' content='summary_large_image' />
      {/* Add your Twitter username here
      <meta name='twitter:creator' content='@your_username' />
      <meta name='twitter:site' content='@your_username' /> */}

      {/* Change the type if you want. For example, blog. */}
      <meta property='og:type' content='website' />
    </Head>
  )
}

export default CustomHead
