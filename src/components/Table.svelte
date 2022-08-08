<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'
  import { Pencil, Trash } from 'svelte-heros'

  import TableButton from '@/components/TableButton.svelte'
  import type { Task } from '@/types/Task.type'

  const dispatch = createEventDispatcher()

  let tableData: Task[]
  export { tableData }
</script>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
    <thead
      class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
    >
      <tr>
        <th class="px-6 py-3">No.</th>
        <th class="px-6 py-3">Task Name</th>
        <!-- <th class="px-6 py-3">Task Details</th> -->
        <th class="px-6 py-3">Assignee</th>
        <th class="px-6 py-3">Due</th>
        <th class="px-6 py-3">Status</th>
        <th class="px-6 py-3">Action</th>
      </tr>
    </thead>
    <tbody>
      {#if tableData.length > 0}
        {#each tableData as td, index}
          <tr
            class="cursor-pointer bg-white odd:bg-white even:bg-gray-50 hover:bg-gray-100"
            on:click="{() =>
              dispatch('tableClick', { action: 'view', id: index, data: td })}"
          >
            <td
              class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              {index + 1}
            </td>
            <td
              class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              {td.name}
            </td>
            <!-- <td
              class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              {td.detail}
            </td> -->
            <td
              class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              {td.assignee}
            </td>
            <td
              class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              {new Date(parseInt(td.due)).toLocaleString()}
            </td>
            <td
              class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              {td.status}
            </td>
            <td
              class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              <div class="flex flex-row">
                <TableButton
                  color="green"
                  isLoading="{false}"
                  on:click="{() =>
                    dispatch('tableClick', {
                      action: 'edit',
                      id: index,
                      data: td
                    })}"
                >
                  <Pencil />
                </TableButton>
                <TableButton
                  color="red"
                  isLoading="{false}"
                  on:click="{() =>
                    dispatch('tableClick', {
                      action: 'delete',
                      id: index,
                      data: td
                    })}"
                >
                  <Trash />
                </TableButton>
              </div>
            </td>
          </tr>
        {/each}
      {:else}
        <tr
          class="bg-white odd:bg-white even:bg-gray-50 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <td
            class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            No Data
          </td>
        </tr>
      {/if}
    </tbody>
  </table>
</div>
