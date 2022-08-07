<script lang="ts">
  import Table from '@/components/Table.svelte'
  import Modal from '@/components/Modal.svelte'
  import { PlusCircle } from 'svelte-heros'
  import { writable, type Writable } from 'svelte/store'
  import type { TableButtonDetail } from '@/types/TableButtonDetail.type'
  import type { TableData } from '@/types/TableData.type'

  const tableHeader: Array<string> = [
    'Task Name',
    'Task Detail',
    'Assignee',
    'Due Date',
    'Done'
  ]
  const tableData: Array<Array<string>> = [
    ['test', 'Tugas', 'saya', Date.now().toString(), 'false'],
    ['test', 'Tugas', 'saya', Date.now().toString(), 'false'],
    ['test', 'Tugas', 'saya', Date.now().toString(), 'false'],
    ['test', 'Tugas', 'saya', Date.now().toString(), 'false']
  ]
  let isModalVisible: Writable<boolean> = writable(false)
  let modalData: Writable<TableData> = writable()
  let modalMode: string
  const openModal: Function = (mode: string, detail: TableButtonDetail) => {
    modalMode = mode
    if (mode === 'add') {
      modalData.set({
        name: '',
        task: '',
        assignee: '',
        due: '',
        done: ''
      })
    } else {
      modalData.update((u) => {
        u = {
          name: detail.data[0],
          task: detail.data[1],
          assignee: detail.data[2],
          due: detail.data[3],
          done: detail.data[4]
        }
        console.log(detail.data)
        return u
      })
    }
    console.log($modalData)
    $isModalVisible = true
  }
</script>

<div class="flex flex-col">
  <div class="flex justify-end">
    <button
      class="my-3 inline-flex w-full items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      on:click="{() => openModal('add')}"
    >
      <PlusCircle class="mr-2" />
      Add New
    </button>
  </div>
  {#if $isModalVisible}
    <Modal
      mode="{modalMode}"
      bind:data="{modalData}"
      bind:isOpen="{$isModalVisible}"
      on:submit="{(event) => console.log(event)}"
    />
  {/if}
  <Table
    tableHeader="{tableHeader}"
    tableData="{tableData}"
    on:delete="{(event) => openModal('delete', event.detail)}"
    on:edit="{(event) => openModal('edit', event.detail)}"
  />
</div>
