import Head from 'next/head'
// import { useRouter } from 'next/router'

const defaultImageUrl = ''

const CustomHead = ({
  title,
  description = title,
  imageUrl = defaultImageUrl,
}: {
  title: string
  description?: string
  imageUrl?: string
}) => {
  // const baseUrl = 'https://www.example.com'
  // const { pathname } = useRouter()
  // const ogUrl = baseUrl + pathname

  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:alt' content={title} />

      <meta name='description' content={description} />
      <meta property='og:description' content={description} />
      <meta name='twitter:description' content={description} />

      <meta name='image' content={imageUrl} />
      <meta property='og:image' content={imageUrl} />
      <meta name='twitter:image' content={imageUrl} />

      {/* <meta property='og:url' content={ogUrl} /> */}

      <meta name='twitter:card' content='summary_large_image' />
      {/* Add your Twitter username here
      <meta name='twitter:creator' content='@your_username' />
      <meta name='twitter:site' content='@your_username' /> */}

      {/* Change the type if you want. For example, article, blog. */}
      <meta property='og:type' content='website' />
    </Head>
  )
}

export default CustomHead
