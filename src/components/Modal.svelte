<script lang="ts">
  import type { TableData } from '@/types/TableData.type'
  import { fade } from 'svelte/transition'

  import { createEventDispatcher } from 'svelte'
  import { writable, type Writable } from 'svelte/store'
  const dispatch = createEventDispatcher()
  let mode: string = 'add'
  let data: Writable<TableData> = writable()
  let isOpen: boolean = false
  let formName: string
  let formTask: string
  let formAsignee: string
  let formDue: string
  let formDone: string
  data.subscribe((value) => {
    formName = value.name
    formTask = value.task
    formAsignee = value.assignee
    formDue = value.due
    formDone = value.done
  })
  const handler: Function = (event: MouseEvent) => {
    event.preventDefault()
    const data: TableData = {
      name: formName,
      task: formTask,
      assignee: formAsignee,
      due: formDue,
      done: formDone
    }
    dispatch('submit', data)
  }
  // mode.subscribe((val: string) => {
  //   switch (val) {
  //     case 'add':
  //       title = 'Add New Task'
  //       break
  //     case 'edit':
  //       title = 'Edit Task'
  //       break
  //     default:
  //       title = 'Task'
  //       break
  //   }
  // })
  const isModeDelete: boolean = mode === 'delete'
  export { mode, data, isOpen }
</script>

<!-- Main modal -->
<div
  transition:fade
  id="authentication-modal"
  tabindex="-1"
  class="fixed top-0 right-0 left-0 z-50 flex h-full w-full flex-col items-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-60 backdrop-blur-sm"
  on:click|self="{() => (isOpen = false)}"
>
  <!-- <div class="h-1/4 w-full"></div> -->
  <div
    class="absolute top-1/3 h-fit w-full -translate-y-1/2 p-4 sm:w-3/4 md:w-1/2 xl:w-1/3"
  >
    <!-- Modal content -->
    <div
      class="relative rounded-lg bg-white shadow dark:bg-gray-700"
      in:fade="{{ delay: 300 }}"
    >
      <div class="py-6 px-6 lg:px-8">
        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
          {#if mode === 'add'}Add New Task
          {:else if mode === 'edit'}Edit Task
          {:else if mode === 'delete'}Delete Task
          {/if}
        </h3>
        <form class="space-y-6" action="#">
          <div>
            <label
              for="taskName"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Task name
            </label>
            <input
              type="text"
              name="taskName"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="Put meaningful task here..."
              required
              disabled="{mode === 'delete'}"
              bind:value="{formName}"
            />
          </div>
          <div>
            <label
              for="taskDetail"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Task details
            </label>
            <input
              type="text"
              name="taskDetail"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="Put meaningful task here..."
              required
              disabled="{mode === 'delete'}"
              bind:value="{formTask}"
            />
          </div>
          <div>
            <label
              for="assignee"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Assignee
            </label>
            <input
              type="text"
              name="assignee"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="Who are going to do this task?"
              required
              disabled="{mode === 'delete'}"
              bind:value="{formAsignee}"
            />
          </div>
          <div>
            <label
              for="due"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Due date
            </label>
            <input
              type="text"
              name="due"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="Deadline!"
              required
              disabled="{mode === 'delete'}"
              bind:value="{formDue}"
            />
          </div>
          <div>
            <label
              for="isDone"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Done
            </label>
            <input
              type="text"
              name="isDone"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="Done?"
              required
              disabled="{mode === 'delete'}"
              bind:value="{formDone}"
            />
          </div>
          <div class="flex justify-between">
            <div class="flex items-start">
              <div class="flex h-5 items-center">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  required
                />
              </div>
              <label
                for="remember"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <a
              href="/"
              class="text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <div class="flex justify-end space-x-2">
            <button
              type="submit"
              class="w-fit rounded-lg bg-{mode === 'delete'
                ? 'red'
                : 'blue'}-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
              on:click="{(e) => handler(e)}"
            >
              {mode === 'delete' ? 'Delete' : 'Save'}
            </button>
            <button
              class="w-fit rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
              on:click="{(e) => {
                e.preventDefault()
                isOpen = false
              }}"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- <div class="h-1/4 w-full"></div> -->
</div>
