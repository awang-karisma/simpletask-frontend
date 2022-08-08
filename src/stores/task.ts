import { type Writable, writable } from 'svelte/store'

import type { Task } from '@/types/Task.type'

export const tasks: Writable<Task[]> = writable([])
