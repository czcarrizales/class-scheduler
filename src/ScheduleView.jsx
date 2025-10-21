import { useEffect, useState } from 'react'
import './ScheduleView.css'
import ScheduleCard from './ScheduleCard'

function ScheduleView({ mainStudent, allStudents }) {

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

  useEffect(() => {
  }, [mainStudent])

  useEffect(() => {

  }, [allStudents])

  return (
    <div className='schedule-view-main'>
      <h1>Schedule View</h1>
      <div className='schedule'>
        {
          daysOfWeek.map(day => (
            <div>
              <h2 className='day-title'>{day}</h2>
              {mainStudent?.classes?.filter(cls => cls.dates.includes(day)).map(cls => (
                <ScheduleCard key={cls.id} title={cls.name} time={cls.time} className={cls.name} />
              ))}
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default ScheduleView