import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jsStyles = document.querySelector('jss-server-side');
    if(jsStyles){
      jsStyles.parentElement.removeChild(jsStyles);
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
