<script lang="ts">
  import { Pencil, Trash } from 'svelte-heros'
  let tableHeader: Array<string> = []
  import { createEventDispatcher } from 'svelte'
  import type { TableButtonDetail } from '@/types/TableButtonDetail.type'
  import TableButton from '@/components/TableButton.svelte'
  const dispatch = createEventDispatcher()
  const handler: Function = (action: string, data: TableButtonDetail) => {
    // const data: TableButtonDetail = { id: index, data: td }
    dispatch(action, data)
  }
  let tableData: Array<Array<string>> = [[]]

  export { tableData, tableHeader }
</script>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
    <thead
      class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
    >
      <tr>
        {#if tableHeader.length > 0}
          <th class="px-6 py-3">No.</th>
          {#each tableHeader as th}
            <th class="px-6 py-3">{th}</th>
          {/each}
          <th class="px-6 py-3">Action</th>
        {:else}
          <th class="px-6 py-3">No Header</th>
        {/if}
      </tr>
    </thead>
    <tbody>
      {#if tableData.length > 0}
        {#each tableData as td, index}
          <tr
            class="bg-white odd:bg-white even:bg-gray-50 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <td
              class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              {index + 1}
            </td>
            {#each td as key}
              <td
                class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                {key}
              </td>
            {/each}
            <td
              class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              <div class="flex flex-row">
                <!-- <button type="submit" class="rounded-lg bg-green-300 p-1.5 mx-1" on:click={() => dispatch('edit', {id:index, data:td})}> -->
                <TableButton
                  color="green"
                  isLoading="{false}"
                  on:click="{() => handler('edit', { id: index, data: td })}"
                >
                  <Pencil />
                </TableButton>
                <!-- </button> -->
                <!-- <button type="submit" class="rounded-lg bg-red-300 p-1.5 mx-1" on:click={() => dispatch('delete', {id:index, data:td})}> -->
                <TableButton
                  color="red"
                  isLoading="{false}"
                  on:click="{() => dispatch('delete', { id: index, data: td })}"
                >
                  <Trash />
                </TableButton>
                <!-- </button> -->
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
