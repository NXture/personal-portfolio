/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react"
import ThemeProvider from "providers/ThemeProvider"
import { MDXProvider } from "@mdx-js/react"
import { Code } from "./src/CodeBlock"
import { preToCodeBlock } from "mdx-utils"

export const onServiceWorkerUpdateReady = () => window.location.reload(true)

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <MDXProvider components={components}>{element}</MDXProvider>
  </ThemeProvider>
)
