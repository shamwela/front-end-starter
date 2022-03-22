import NextHead from 'next/head'
import { useRouter } from 'next/router'

type HeadProps = {
  title: string
  description?: string
  imageUrl?: string
}
const baseUrl = 'https://www.example.com' // Change this accordingly
const twitterUsername = 'john_smith' // Change this accordingly

const Head = ({
  title,
  description = title,
  imageUrl = '', // Change this accordingly
}: HeadProps) => {
  const fullImageUrl = baseUrl + imageUrl
  const { pathname } = useRouter()
  const fullUrl = baseUrl + pathname

  return (
    <NextHead>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:alt' content={title} />

      <meta name='description' content={description} />
      <meta property='og:description' content={description} />
      <meta name='twitter:description' content={description} />

      <meta name='image' content={fullImageUrl} />
      <meta property='og:image' content={fullImageUrl} />
      <meta name='twitter:image' content={fullImageUrl} />

      <meta property='og:url' content={fullUrl} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={'@' + twitterUsername} />
      <meta name='twitter:site' content={'@' + twitterUsername} />

      <meta property='og:type' content='website' />
    </NextHead>
  )
}

export default Head
