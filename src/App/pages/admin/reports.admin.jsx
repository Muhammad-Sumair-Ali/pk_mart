import React from 'react'
import Heading from '../../components/panel/Heading'
import { FaChartBar } from 'react-icons/fa'

const AdminReports = () => {
  return (
    <>
    <Heading
        icon={<FaChartBar />}
        title="Products Reports"
        desc="View Reports "
      />
      Reports
    </>
  )
}

export default AdminReports
