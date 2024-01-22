'use client'
import React, { useEffect, useState } from 'react'
import { DateCalendar, TimePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleBooking = async () => {
    if (selectedDate && selectedTime) {
      const response = await fetch(`/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: dayjs(setSelectedDate).format('YYYY-MM-DD'),
          time: dayjs(setSelectedTime).format('h:mm A'),
        }),
      })
      const data = await response.json()
      console.log(data)

      alert('Booking Successfull')
    }
  }

  return (
    <div className="h-screen flex place-items-center">
      <div className="max-w-4xl mx-auto justify-center align-middle">
        <h1 className="text-center font-bold uppercase text-sm underline md:text-2xl">
          Booking
        </h1>

        <div className="w-full text-center flex flex-col">
          <div className=" hover:tooltip" data-tip="hello">
            <DateCalendar
              disablePast
              value={selectedDate}
              onChange={(newDate) => setSelectedDate(newDate)}
            />
          </div>
          <TimePicker
            views={['hours', 'minutes']}
            value={selectedTime}
            onChange={(newTime) => setSelectedTime(newTime)}
            className="font-bold tracking-widest text-center"
          />
        </div>

        <button
          onClick={handleBooking}
          className="py-2 px-4 capitalize border w-full bg-green-500 rounded mt-2 font-bold"
        >
          <p className="text-center">submit</p>
        </button>
      </div>
    </div>
  )
}
