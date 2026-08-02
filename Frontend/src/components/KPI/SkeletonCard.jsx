import React from 'react'

const SkeletonCard = () => {
  return (
     <div className="animate-pulse bg-[#1b1b1b] rounded-xl p-6 shadow-lg">

            <div className="h-6 w-16 bg-gray-700 rounded mb-6"></div>

            <div className="h-10 w-24 bg-gray-700 rounded mb-4"></div>

            <div className="h-4 w-32 bg-gray-700 rounded"></div>

        </div>
  )
}

export default SkeletonCard
