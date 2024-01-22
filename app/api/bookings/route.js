import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request) {
  const body = await request.json()
  console.log(body)
  const { date, time } = body
  console.log(date, time)

  const user = await prisma.user.create({
    data: {
      selectedDate: date,
      selectedTime: time,
    },
  })

  return NextResponse.json(user, { status: 200 })
}
