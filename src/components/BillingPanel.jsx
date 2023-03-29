import React from "react"
import PlatformHeader from "./PlatformHeader"

const BillingPanel = () => {
  return (
    <>
      <div className="ml-[260px] w-full">
        <div className="container px-6 sm:mx-auto lg:px-10 py-7 w-full">
          <div className=" h-full w-full  flex flex-col gap-10">
            <PlatformHeader isSearch={false} location={"Billing"} />
            <section className=""></section>
          </div>
        </div>
      </div>
    </>
  )
}

export default BillingPanel
