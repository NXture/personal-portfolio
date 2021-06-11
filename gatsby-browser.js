/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react"
import ThemeProvider from "providers/ThemeProvider"

export const onServiceWorkerUpdateReady = () => window.location.reload(true)

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
