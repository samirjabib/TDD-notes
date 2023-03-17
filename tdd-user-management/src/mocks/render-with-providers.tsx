import React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {render} from '@testing-library/react'

const queryClient = new QueryClient()

export const renderWithProviders = (ui: React.ReactNode) =>
  render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>)


  //We make a providers for reuse code in others part of code when use react-query XD