import React from "react"
import PlatformHeader from "./PlatformHeader"
import { useDropzone } from "react-dropzone"
import BillingTableRow from "./BillingTableRow"

const BillingPanel = () => {
  const onDrop = (acceptedFiles) => {
    alert("Recu uploaded here")
  }
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ onDrop })
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))
  return (
    <>
      <div className="ml-[260px] w-full">
        <div className="container px-6 sm:mx-auto lg:px-10 py-7 w-full">
          <div className=" h-full w-full  flex flex-col gap-8">
            <PlatformHeader isSearch={false} location={"Billing"} />
            <section className=" space-y-10">
              <section className="container space-y-3">
                <h1 className="text-secondary text-lg font-semibold">
                  My Plan
                </h1>
                <div
                  {...getRootProps()}
                  className="w-full h-64 flex justify-center items-center rounded-lg border-dashed border-primary border-4 cursor-pointer"
                >
                  <input {...getInputProps()} />
                  <p>Drag and drop Payment here, or click to select files</p>
                </div>
                <div>
                  <h1 className="text-secondary  font-semiBold">Files</h1>
                  <ul>{files}</ul>
                </div>
              </section>
              <section className>
                <h1 className="text-secondary text-lg font-semibold">
                  Billing History
                </h1>
                <table className="w-full border-spacing-y-[10px]  border-separate">
                  <thead className="bg-[#f5f6fb] text-primary">
                    <tr className="uppercase">
                      <th className="p-2">Invoice Number</th>
                      <th>Package</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <BillingTableRow />
                    <BillingTableRow />
                    <BillingTableRow />
                    <BillingTableRow />
                  </tbody>
                </table>
              </section>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default BillingPanel
