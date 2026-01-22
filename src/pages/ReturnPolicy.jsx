import React from 'react'

const ReturnPolicy = () => {
  return (
    <div className='min-h-screen pt-24 pb-12 px-4 container mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Return Policy</h1>
      <div className='prose max-w-none'>
        <p>We want you to be completely satisfied with your purchase.</p>
        <h2 className='text-xl font-bold mt-4 mb-2'>Returns</h2>
        <p>You have 30 calendar days to return an item from the date you received it.</p>
        <h2 className='text-xl font-bold mt-4 mb-2'>Refunds</h2>
        <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.</p>
      </div>
    </div>
  )
}

export default ReturnPolicy
