import { useEffect, useState } from 'react'
import './ScheduleView.css'
import ScheduleCard from './ScheduleCard'

function ScheduleView({ mainStudent, allStudents }) {

  useEffect(() => {
    console.log('coming from schedule view')
  }, [mainStudent])

  useEffect(() => {

  }, [allStudents])

  return (
    <>
      <h1>Schedule View</h1>
      {
        mainStudent?.classes?.map((cls) => {
          return (
            <ScheduleCard key={cls.id} title={cls.name} time={cls.time} className={cls.name} />
          )

        })
      }
    </>
  )
}

export default ScheduleView