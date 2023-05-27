
import Dashboard from '@/components/Dashboard'
import Table from '@/components/Table'
import React from 'react'

export default function page() {
      return (
            <div>
                  <Dashboard />
                  <div className='container  ml-72 mt-28'>
                        <Table/>
                  </div>
            </div>
      )
}
