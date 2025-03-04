import React from 'react'
import { fetchResume } from '@/services/cms/fetchResume'

const ResumePage = async () => {
  let pdfUrl = ''
  try {
    pdfUrl = await fetchResume()
  } catch (err) {
    console.error('Error fetching resume:', err)
  }

  return (
    <div className="fixed inset-0 pt-16 pb-0 px-0">
      {pdfUrl ? (
        <object
          data={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
          type="application/pdf"
          className="w-full h-full"
          style={{
            display: 'block',
          }}
        >
          <p>
            Your browser does not support PDFs. <a href={pdfUrl}>Download the PDF</a> instead.
          </p>
        </object>
      ) : (
        <p className="text-center p-4">Resume not available</p>
      )}
    </div>
  )
}

export default ResumePage
