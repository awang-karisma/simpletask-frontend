import type { Task } from './Task.type'

export type SubmitData = {
  id?: number
  type: string
  data?: Task
}
