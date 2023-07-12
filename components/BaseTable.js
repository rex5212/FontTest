import React from 'react'

const BaseTable = (props) => {
  return (
    <div class="flex flex-col">
    <div class="overflow-x-auto shadow-md sm:rounded-lg">
      <div class="inline-block min-w-full align-middle">
        <div class="overflow-hidden ">
          <table class="min-w-full divide-y opacity-100	 table-fixed ">
            {props.children}
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BaseTable