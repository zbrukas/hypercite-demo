import { Dialog, Transition } from "@headlessui/react"
import { navigate } from "gatsby"
import { Hints } from "intro.js-react"
import * as React from "react"
import ReactLoading from "react-loading"
import { useUID } from "react-uid"

import Layout from "../../components/layout"
import Pills from "../../components/pills"
import Seo from "../../components/seo"
import { tryAutomaticDownload } from "../../utils"

const pdfPath = require("../../assets/step-2.pdf").default

const IndexPage = () => {
  const resubmitBtnId = useUID()
  const [formValues, setFormValues] = React.useState({})
  const [isOpen, setIsOpen] = React.useState(false)

  const hasValues = React.useMemo(() => {
    return Object.values(formValues).reduce(
      (sum, curr) => sum + curr.trim().length,
      0
    )
  }, [formValues])

  React.useEffect(() => {
    if (isOpen && typeof window !== "undefined") {
      const t = setTimeout(() => {
        tryAutomaticDownload(pdfPath)
        navigate("/")
      }, 3000)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  return (
    <Layout>
      <Seo title="Home" />
      <div className="mb-12">
        <Pills />
      </div>
      <h1 className="text-3xl mb-2 font-bold">
        Catalyst Fund Limited Partnership II vs. IMAX Corporation
      </h1>
      <div className="p-2 bg-amber-100 mb-4 border-y border-gray-500">
        <p className="mb-0 text-center">
          {hasValues ? (
            <>
              Click{" "}
              <div className="relative inline">
                <div
                  className="absolute"
                  style={{ left: -10, top: -10 }}
                  id={resubmitBtnId}
                />
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-transparent border-none"
                >
                  here
                </button>{" "}
              </div>
              to re-submit to final hyperlink insertion once all alternative
              names are entered
            </>
          ) : (
            `
                You have started the linking process' second step. To complete the
                second and final step, indicate to the Case Center (in the spaces
                provided) how your legal document/factum references cited sources. In
                other words, where a referenced document's "name" in Case Center does
                not match how the same document is referred to in a legal filling's
                citation, provide how the document is cited in the filling.
          `
          )}
        </p>
      </div>

      <h5 className="mb-4">AA: Factum and Compendium</h5>
      <div className="flex items-center">
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
      </div>

      <table className="border border-gray-300 mb-8" width="100%">
        <thead>
          <tr>
            <td className="py-4 pl-2">
              <b>AA:</b>
            </td>
            <td colSpan={4} className="py-4">
              <span className="bg-sky-700 py-2 px-4 text-white font-bold text-xs rounded-xl mr-2 mb-2">
                Factum and Compendium
              </span>
              <b>(20 documents, 48 pages)</b>
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
            <th className="py-2" align="left" style={{ minWidth: 250 }}>
              If different from "name",
              <br />
              how does your legal filling <br />
              cite to this document?
            </th>
            <th className="py-2" align="left">
              Bundle Number (106F)
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
          {[
            ["Amended Notice of Application", "1:J1-26"],
            ["Summons and Verified Complanint of U", "2:J1-27"],
            ["Compendium", "3:J1-28"],
            ["Tab 1 Compendium", "4:J1-29"],
            ["Tab 2 Compendium", "5:J1-30 - J1-32"],
            ["Tab 3 - Amended Note of Application", "6:J1-33"],
            ["Tab 4 - Affidavit of Glen Banks", "7:J1-34"],
            ["Tab 5 - Supplemental Affidavit of Glen Banks", "8:J1-35"],
            ["Tab 6 - Trust Indenture", "9:J1-36"],
            ["Tab 7 - Letter from Cede & CO", "10:J1-37"],
            ["Tab 8 - Affidavit of Thomas Rerrign", "11:J1-38"],
            ["Tab 10 - Consent Solicitation", "12:J1-39"],
            ["Tab 11 - Cross-examination Gelfond", "13:J1-40"],
            ["Tab 12 - Consent and Forbearance Agreement", "14:J1-41 - J1-42"],
            ["Tab 13 - Master Securities Loan Agreement", "15:J1-43 - J1-44"],
            ["Tab 14 - Catalyst Press Release", "16:J1-45"],
            ["Tab 15 - Cross-examination of Gabriel De Alba", "17:J1-46"],
            ["Tab 16 - Lock-Up Agreement", "18:J1-47"],
            ["Tab 17 - Catalyst Press Release", "19:J1-48"],
            ["Factum - Moving Party, IMAX 24 -Sep-2008", "20:J1-49 - J1-73"],
          ].map(([docName, bundle], index) => (
            <tr key={bundle}>
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
              <td className="p-2">{(index + 1).toFixed(0).padStart(4, "0")}</td>
              <td className="p-2">{docName}</td>
              <td className="p-2">
                {index < 19 ? "25 July 2022" : "01 August 2022"}
              </td>
              <td className="py-2 pr-4">
                <input
                  className="px-2 border border-gray-400 placeholder:text-grey w-full"
                  placeholder="Insert factum name"
                  onChange={e =>
                    setFormValues(val => ({
                      ...val,
                      [bundle]: e.target.value,
                    }))
                  }
                />
              </td>
              <td className="py-2">
                <span className="bg-neutral-700 p-2 text-white text-xs rounded-xl">
                  {bundle}
                </span>
              </td>
              <td className="py-2">Yes-No-No</td>
              <td className="py-2" aria-label="actions">
                <button className="bg-neutral-700 p-2 text-white text-xs rounded-xl">
                  View
                </button>
              </td>
              <td className="py-2">
                <button className="bg-neutral-700 p-2 text-white text-xs rounded-xl">
                  PDF
                </button>
              </td>
              <td className="py-2">
                <button className="bg-neutral-700 p-2 text-white text-xs rounded-xl">
                  {index > 1 ? "Open Original (.pdf)" : "Open Original (.docx)"}
                </button>
                {index === 19 && (
                  <>
                    <button className="ml-2 bg-neutral-700 p-2 text-white text-xs rounded-xl w-8">
                      S
                    </button>
                    <button className="ml-2 bg-neutral-700 p-2 text-white text-xs rounded-xl w-8">
                      T
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
                  <div className="flex justify-center">
                    <ReactLoading type="spokes" color="rgb(249, 115, 22)" />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Hints
        enabled
        hints={[
          {
            element: `[id='${resubmitBtnId}']`,
            hint: "Click to resubmit",
            hintPosition: "top-left",
            hintButtonLabel: "Got it",
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
