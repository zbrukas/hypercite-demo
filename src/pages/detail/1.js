import * as React from "react"

import Layout from "../../components/layout"
import Pills from "../../components/pills"
import Seo from "../../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="mb-12">
      <Pills />
    </div>
    <h1 className="text-3xl mb-2 font-bold">
      Catalyst Fund Limited Partnership II vs. IMAX Corporation
    </h1>
    <h2 className="text-xl font-bold mb-2">View Documents</h2>
    <button className="bg-neutral-700 px-2 py-1 text-white text-sm rounded-lg mb-10">
      View all section documents
    </button>
    <table>
      <tr>
        <td className="p-2 bg-neutral-300">
          <b>Section:</b>
        </td>
        <td>J: Factum</td>
      </tr>
      <tr>
        <td className="p-2 bg-neutral-300">
          <b>Document:</b>
        </td>
        <td>0001: Factum - Moving Party, IMAX 24-Sep-2008 - Final</td>
      </tr>
      <tr>
        <td className="p-2 bg-neutral-300">
          <b>Date:</b>
        </td>
        <td>11 August 2022</td>
      </tr>
      <tr>
        <td className="p-2 bg-neutral-300">
          <b>Date Loaded:</b>
        </td>
        <td>11 August 2022 09:19 PM</td>
      </tr>
      <tr>
        <td className="p-2 bg-neutral-300" />
        <td className="py-4">
          <button className="bg-neutral-700 p-2 text-white text-xs rounded-xl mr-2">
            Move
          </button>
          <button className="bg-neutral-700 p-2 text-white text-xs rounded-xl mr-2">
            Remove
          </button>
          <button className="bg-neutral-700 p-2 text-white text-xs rounded-xl mr-2">
            PDF
          </button>
          <button className="bg-neutral-700 p-2 text-white text-xs rounded-xl mr-2">
            Open Original (.pdf)
          </button>
        </td>
      </tr>
    </table>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
