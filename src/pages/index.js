import { Link } from "gatsby"
import { Hints } from "intro.js-react"
import * as React from "react"
import { useUID } from "react-uid"

import Layout from "../components/layout"
import Pills from "../components/pills"
import Seo from "../components/seo"

const IndexPage = () => {
  const viewBtnId = useUID()

  return (
    <Layout>
      <Seo title="Home" />
      <div className="mb-12">
        <Pills />
      </div>
      <h1 className="text-3xl mb-2 font-bold">
        Catalyst Fund Limited Partnership II vs. IMAX Corporation
      </h1>
      <h2 className="text-xl font-bold mb-2">View Documents</h2>
      <div className="w-fit py-3 px-1 border-red-700 rounded border-2 mb-4">
        <span className="mr-2">
          <b>Bundle:</b> 01. Master Bundle
        </span>
        <button className="bg-neutral-700 px-3 py-2 text-white text-xs rounded-md mr-2">
          Select Bundle
        </button>
      </div>
      <p className="mb-4">J: Factum</p>
      {[
        "Upload File(s)",
        "Remove All Documents",
        "Update All Documents",
        "View Notes",
      ].map(val => (
        <button className="bg-neutral-700 p-2 text-white text-xs rounded-xl mr-2 mb-2">
          {val}
        </button>
      ))}
      <table className="border border-gray-300 mb-8" width="100%">
        <thead>
          <tr>
            <td className="py-4 pl-2">
              <b>J:</b>
            </td>
            <td className="py-4">
              <span className="bg-sky-700 py-2 px-4 text-white font-bold text-xs rounded-xl mr-2 mb-2">
                Factum
              </span>
            </td>
            <td className="py-4">
              <b>(1 document, 25 pages)</b>
            </td>
          </tr>
          <tr className="bg-gray-300">
            <th className="py-2" colSpan={2} aria-labelledby="controls" />
            <th className="py-2" align="left">
              Index
            </th>
            <th className="py-2" align="left">
              Name
            </th>
            <th className="py-2" align="left">
              Date
            </th>
            <th className="py-2" align="left">
              Bundle Number (145F)
            </th>
            <th className="py-2" align="left">
              Master Bundle
              <br />
              Included-Inserted-Tabbed
            </th>
            <th className="py-2" colSpan={3} aria-labelledby="actions" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 pl-2" aria-label="controls">
              <button className="bg-neutral-700 p-2 text-white text-xs rounded-xl">
                Move
              </button>
            </td>
            <td className="py-2">
              <button className="bg-neutral-700 p-2 text-white text-xs rounded-xl">
                Remove
              </button>
            </td>
            <td className="py-2">0001</td>
            <td className="py-2">
              Factum - Moving Party, IMAX 24-Sep-2008 - Final
            </td>
            <td className="py-2">11 August 2022</td>
            <td className="py-2">
              <span className="bg-neutral-700 p-2 text-white text-xs rounded-xl">
                1:J1 - J25
              </span>
            </td>
            <td className="py-2">Yes-No-No</td>
            <td className="py-2" aria-label="actions">
              <Link to="/detail/1">
                <button
                  id={viewBtnId}
                  className="bg-neutral-700 p-2 text-white text-xs rounded-xl"
                >
                  View
                </button>
              </Link>
            </td>
            <td className="py-2">
              <button className="bg-neutral-700 p-2 text-white text-xs rounded-xl">
                PDF
              </button>
            </td>
            <td className="py-2">
              <button className="bg-neutral-700 p-2 text-white text-xs rounded-xl">
                Open Original (.pdf)
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <hr className="h-0.5 bg-gray-400" />

      <Hints
        enabled
        hints={[
          {
            element: `[id='${viewBtnId}']`,
            hint: "View PDF",
            hintPosition: "top-left",
            hintButtonLabel: "Got it"
          },
        ]}
      />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
