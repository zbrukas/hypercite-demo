import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid"

import * as React from "react"
import { Document, Page, pdfjs } from "react-pdf/dist/umd/entry.webpack5"

import Layout from "../../components/layout"
import Pills from "../../components/pills"
import Seo from "../../components/seo"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const pdfPath = require("../../assets/step-2.pdf").default

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

      {typeof window !== "undefined" && (
        <div className="border border-gray-300 w-fit">
          <div className="flex items-center bg-gray-200 py-2">
            <span className="mr-2">
              Page {pageNumber} of {numPages}
            </span>
            <button
              className="bg-cyan-700 p-2 text-white text-xs rounded-xl mr-2"
              disabled={pageNumber === 1}
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              <ChevronLeftIcon width={16} height={16} fill="white" />
            </button>
            <button
              className="bg-cyan-700 p-2 text-white text-xs rounded-xl mr-2"
              onClick={() => setPageNumber(1)}
            >
              <ChevronDoubleLeftIcon width={16} height={16} fill="white" />
            </button>
            <select
              className="mr-2 border border-gray-300"
              value={`option-${pageNumber - 1}`}
              onChange={ev => {
                const val = ev.target.value
                const [, index] = val.split("-")
                setPageNumber(Number.parseInt(index) + 1)
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
            <button
              className="bg-cyan-700 p-2 text-white text-xs rounded-xl mr-2"
              onClick={() => setPageNumber(numPages)}
            >
              <ChevronDoubleRightIcon width={16} height={16} fill="white" />
            </button>
            <button
              className="bg-cyan-700 p-2 text-white text-xs rounded-xl mr-6"
              disabled={pageNumber === numPages}
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              <ChevronRightIcon width={16} height={16} fill="white" />
            </button>

            <button className="bg-cyan-700 p-2 text-white text-xs rounded-xl mr-6">
              Copy Link
            </button>
          </div>
          <Document
            file={pdfPath}
            externalLinkTarget="_blank"
            onLoadSuccess={onDocumentLoadSuccess}
            onItemClick={({ pageNumber }) => setPageNumber(pageNumber)}
          >
            <Page
              pageNumber={pageNumber}
              renderAnnotationLayer
              renderTextLayer
              renderMode="svg"
            />
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
