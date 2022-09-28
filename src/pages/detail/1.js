import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid"
import * as React from "react"
import { Document, Page } from "react-pdf/dist/umd/entry.webpack5"

import Layout from "../../components/layout"
import Pills from "../../components/pills"
import Seo from "../../components/seo"

const pdfPath = require("../../assets/step-1.pdf").default

console.log({ pdfPath })

const IndexPage = () => {
  const [numPages, setNumPages] = React.useState(null)
  const [pageNumber, setPageNumber] = React.useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

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
      <button className="bg-neutral-700 px-2 py-1 text-white text-sm rounded-lg mb-10">
        View all section documents
      </button>
      <table className="mb-8">
        <tbody>
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
        </tbody>
      </table>

      {typeof window !== "undefined" && (
        <div className="border border-gray-300 w-fit">
          <div className="flex items-center bg-gray-200 py-2">
            <span className="mr-2">
              Page {pageNumber} of {numPages}
            </span>
            <button className="bg-cyan-700 p-2 text-white text-xs rounded-xl mr-2">
              <ChevronLeftIcon width={16} height={16} fill="white" />
            </button>
            <button className="bg-cyan-700 p-2 text-white text-xs rounded-xl mr-2">
              <ChevronDoubleLeftIcon width={16} height={16} fill="white" />
            </button>
            <select
              className="mr-2 border border-gray-300"
              onChange={ev => {
                const val = ev.target.value
                const [, index] = val.split("-")
                setPageNumber(Number.parseInt(index))
              }}
            >
              {Array(numPages)
                .fill(0)
                .map((_, index) => (
                  <option key={`option-${index}`} value={`option-${index}`}>
                    page {index + 1}
                  </option>
                ))}
            </select>
            <button className="bg-cyan-700 p-2 text-white text-xs rounded-xl mr-2">
              <ChevronRightIcon width={16} height={16} fill="white" />
            </button>
            <button className="bg-cyan-700 p-2 text-white text-xs rounded-xl mr-6">
              <ChevronDoubleRightIcon width={16} height={16} fill="white" />
            </button>

            <button className="bg-cyan-700 p-2 text-white text-xs rounded-xl mr-6">
              Hyperlink
            </button>

            <button className="bg-cyan-700 p-2 text-white text-xs rounded-xl mr-6">
              Copy Link
            </button>
          </div>
          <Document
            file={pdfPath}
            onLoadError={err => console.error(err)}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      )}
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
