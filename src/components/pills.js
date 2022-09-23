import * as React from "react"

const PILLS = [
  'Case Home',
  'Review',
  'Index',
  'Sections',
  'People',
  'My Share Group',
  'Bundles',
  'Search',
  'Notes',
  'Hyperlink',
  'Upload',
  'Linked Cases',
  'Audit',
  'Duplicates',
  'Transfer'
]

const Pills = () => (
  <div className="flex flex-wrap">
    {PILLS.map(val => (
      <button className="bg-neutral-700 px-3 py-2 text-white text-xs rounded-md mr-2 mb-2">
        {val}
      </button>
    ))}
  </div>
)

export default Pills