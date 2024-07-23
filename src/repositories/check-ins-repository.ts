import { CheckIn, Prisma } from '@prisma/client'

export interface CheckInsRepository {
  findById(id: string): Promise<CheckIn | null>
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
  findManyByUserId(UserId: string, page: number): Promise<CheckIn[]> // full history os check-ins
  countByUserId(userId: string): Promise<number> // number of check-ins by user
  findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null> // can't check in twice in a day
  save(checkIn: CheckIn): Promise<CheckIn>
}
