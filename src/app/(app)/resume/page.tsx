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
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {pdfUrl ? (
        <iframe
          src={pdfUrl}
          title="Resume PDF"
          className="w-full h-screen"
          style={{ border: 'none' }}
        />
      ) : (
        <p>Resume not available</p>
      )}
    </div>
  )
}

export default ResumePage
