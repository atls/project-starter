import React                        from 'react'
import { Box }                      from '@atls-ui-proto/layout'
import { Layout }                   from '@atls-ui-proto/layout'

import { Navigation }               from '@site/navigation-fragment'
import { VerificationNotification } from '@site/verification-notification-fragment'

export const PromoPage = () => (
  <Box height='100%' width='100%' background='#DADEED' flexDirection='column'>
    <Layout>
      <VerificationNotification />
    </Layout>
    <Layout>
      <Navigation />
    </Layout>
  </Box>
)
