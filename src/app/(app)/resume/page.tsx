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
    <div className="w-full min-h-screen">
      {pdfUrl ? (
        <iframe
          src={pdfUrl}
          title="Resume PDF"
          className="w-full h-screen"
          style={{ border: 'none' }}
        />
      ) : (
        <p className="text-center p-4">Resume not available</p>
      )}
    </div>
  )
}

export default ResumePage
