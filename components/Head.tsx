import Head from 'next/head'
import { useRouter } from 'next/router'

type CustomHeadProps = {
  title: string
  description?: string
  imageUrl?: string
}

const CustomHead = ({
  title,
  description = title,
  imageUrl = '',
}: CustomHeadProps) => {
  const baseUrl = 'https://www.example.com' // Change this accordingly
  const fullImageUrl = baseUrl + imageUrl

  const { pathname } = useRouter()
  const fullUrl = baseUrl + pathname

  return (
    <Head>
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
      <meta name='twitter:creator' content='@shamwela_' />
      <meta name='twitter:site' content='@shamwela_' />

      <meta property='og:type' content='website' />
    </Head>
  )
}

export default CustomHead
