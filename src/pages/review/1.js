import { Dialog, Transition } from "@headlessui/react"
import ReactLoading from "react-loading"
import { Hints } from "intro.js-react"
import * as React from "react"
import { Document, Page, pdfjs } from "react-pdf/dist/umd/entry.webpack5"
import { useUID } from "react-uid"

import Layout from "../../components/layout"
import Pills from "../../components/pills"
import Seo from "../../components/seo"
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid"
import { Link } from "gatsby"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const pdfPath = require("../../assets/step-1.pdf").default

const IndexPage = () => {
  const continueBtnId = useUID()
  const [numPages, setNumPages] = React.useState(null)
  const [pageNumber, setPageNumber] = React.useState(1)
  const [isOpen, setIsOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

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
      <div className="flex flex-col items-start w-fit py-3 px-1 border-red-700 rounded border-2 mb-4">
        <p className="mb-2">
          Case Center has automatically detected 16 citations and created
          corresponding hyperlinks.
        </p>
        <p className="mb-2">
          Review your document's citations. When finished, click below to
          continue the automated link creation process.
        </p>
        <Link to="/hyperlink/1">
          <div className="relative">
            <div
              className="absolute"
              style={{ left: -10, top: -10 }}
              id={continueBtnId}
            />
            <button className="bg-neutral-700 px-3 py-2 text-white text-xs rounded-md mr-2">
              Continue
            </button>
          </div>
        </Link>
      </div>

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
          </div>
          <Document
            file={pdfPath}
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

      <Hints
        enabled
        hints={[
          {
            element: `[id='${continueBtnId}']`,
            hint: "Click to continue",
            hintPosition: "top-left",
            hintButtonLabel: "Got it",
          },
        ]}
      />

      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {loading ? (
                    <div className="flex justify-center">
                      <ReactLoading type="spokes" color="rgb(249, 115, 22)" />
                    </div>
                  ) : (
                    <>
                      <Dialog.Description className="mb-4">
                        Case Center will now automatically detect citations that
                        match section names and create corresponding hyperlinks
                      </Dialog.Description>

                      <div className="flex justify-center">
                        <button
                          className="bg-cyan-700 p-2 text-white rounded-xl"
                          onClick={() => setLoading(true)}
                        >
                          Continue
                        </button>
                      </div>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
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
