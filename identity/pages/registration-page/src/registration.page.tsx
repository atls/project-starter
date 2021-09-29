import React                              from 'react'

import { KratosRegistrationFlowProvider } from '@atls/react-kratos-browser-flows'
import { GoToLogin }                      from '@identity/login-password-fragment'
import { RegistrationPassword }           from '@identity/registration-password-fragment'
import { AuthLayout }                     from '@identity/auth-layout-fragment'
import { Column }                         from '@atls-ui-proto/layout'
import { Oidc }                           from '@identity/oidc-fragment'

export const RegistrationPage = () => (
  <KratosRegistrationFlowProvider>
    <AuthLayout actions={<GoToLogin />} title='Регистрация'>
      <Column>
        <RegistrationPassword />
        <Oidc title='Зарегистрируйтесь с помощью соцсетей.' />
      </Column>
    </AuthLayout>
  </KratosRegistrationFlowProvider>
)
