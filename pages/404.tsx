import Head from 'components/Head'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <>
      <Head title='Page not found' />

      <h1>Sorry. Page not found.</h1>
      <Link href='/'>
        <a>Go to the home page</a>
      </Link>
    </>
  )
}

export default Custom404
