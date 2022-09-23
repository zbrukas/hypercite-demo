import * as React from "react"
import { BellIcon } from "@heroicons/react/24/solid"
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline"

const Header = () => (
  <div className="flex flex-col">
    {/* Header section */}
    <header className="flex justify-between items-center px-4 pt-2 mb-2">
      {/* Title */}
      <h1 className="text-3xl mr-auto mb-0">Thomson Reuters Case Center</h1>
      {/* Notifications icon */}
      <div className="w-8 mr-6">
        <BellIcon color="gray" />
      </div>
      {/* Employee info */}
      <div>
        <h6 className="text-sm text-sky-800 font-bold mb-1">Dennis Temko</h6>
        <p className="text-xs text-sky-700 leading-4 mb-0">
          Lawyer | United States
          <br />
          <u>| Pacific Daylight Time</u>
        </p>
      </div>
    </header>

    {/* Nav */}
    <nav className="flex bg-neutral-700 items-center border-white border-b">
      <button className="bg-neutral-700 p-4 text-white border-white border-r text-sm relative">
        Home
      </button>
      <button className="bg-neutral-700 p-4 text-white border-white border-r text-sm relative">
        Invite Lists
      </button>
      <button className="bg-neutral-700 p-4 text-white border-white border-r text-sm relative">
        View Case List
      </button>
      <button className="bg-neutral-700 p-4 text-white border-white border-r text-sm relative">
        View Hearings
      </button>
      <button className="bg-neutral-700 p-4 text-white border-white border-r text-sm relative">
        Support
      </button>
      <div className="ml-auto py-2 bg-white w-80">
        <input
          className="px-2 placeholder:text-black"
          placeholder="Case name / reference"
        />
      </div>
      <button className="bg-neutral-700 p-4 pr-10 text-white border-white border-r text-sm relative">
        Search Cases{" "}
        <QuestionMarkCircleIcon
          color="blue"
          fill="white"
          className="w-6 h-6 absolute top-2 right-2"
        />
      </button>
      <button className="bg-neutral-700 p-4 text-white border-white border-r text-sm relative">
        Account Details
      </button>
      <button className="bg-neutral-700 p-4 text-white border-white border-r text-sm relative">
        Log Out
      </button>
    </nav>

    {/* Orange bar */}
    <span className="h-3 bg-orange-500 w-full" />
  </div>
)

export default Header
