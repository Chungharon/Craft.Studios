// pages/_app.js (or _app.tsx)

import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import Payhip from '../components/payhip'
import { Analytics } from '@vercel/analytics/react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Chatbot from '../components/chatbot'
// Corrected import path assuming components/chatbot.jsx is the location

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Payhip />
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
          {/* Place the Chatbot component here */}
          <Chatbot/>
        </AnimatePresence>
        <Analytics />
      </Layout>
    </Chakra>
  )
}

export default Website