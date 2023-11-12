import React from 'react'

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
       {heading}
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
        {subHeading}
      </p>
    </div>
  )
}

export default SectionTitle