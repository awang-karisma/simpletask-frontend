<script lang="ts">
  import { onMount } from 'svelte'
  import { PlusCircle } from 'svelte-heros'
  import { type Writable, writable } from 'svelte/store'

  import Modal from '@/components/Modal.svelte'
  import Table from '@/components/Table.svelte'
  import { tasks } from '@/stores/task'
  import type { TableButtonDetail } from '@/types/TableButtonDetail.type'
  import type { Task } from '@/types/Task.type'

  let isModalVisible: Writable<boolean> = writable(false)
  let modalMode: string
  let task: Writable<Task> = writable()

  onMount(async () => {
    await getData()
  })

  const getData = async () => {
    const req = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/tasks`)
    const data = await req.json()
    tasks.set(data.items)
    console.log($tasks)
  }

  const submitHandler = async (type: string, data: Task) => {
    if (type === 'add') {
      console.log(JSON.stringify(data))
      const req = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const res = await req.json()
      console.log(res)
    } else if (type === 'edit') {
      const req = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/tasks/${data.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )
      const res = await req.json()
      console.log(res)
    } else if (type === 'delete') {
      const req = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/tasks/${data.id}`,
        {
          method: 'DELETE',
          body: JSON.stringify(data)
        }
      )
      const res = await req.json()
      console.log(res)
    }
    await getData()
    $isModalVisible = false
  }

  const openModal = (mode: string, detail?: TableButtonDetail) => {
    console.log(mode)
    modalMode = mode
    const emptyTask: Task = {
      id: 0,
      name: '',
      detail: '',
      assignee: '',
      due: '',
      status: 0
    }
    if (mode === 'add') {
      task.set(emptyTask)
    } else {
      task.set(detail?.data ?? emptyTask)
    }
    $isModalVisible = true
  }
</script>

<div class="flex flex-col">
  <div class="flex justify-end">
    <button
      class="my-3 inline-flex w-full items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
      on:click="{() => openModal('add')}"
    >
      <PlusCircle class="mr-2" />
      Add New
    </button>
  </div>
  {#if $isModalVisible}
    <Modal
      mode="{modalMode}"
      bind:data="{$task}"
      bind:isOpen="{$isModalVisible}"
      on:add="{(event) => submitHandler('add', event.detail)}"
      on:edit="{(event) => submitHandler('edit', event.detail)}"
      on:view="{(event) => submitHandler('view', event.detail)}"
      on:delete="{(event) => submitHandler('delete', event.detail)}"
    />
  {/if}
  <Table
    bind:tableData="{$tasks}"
    on:tableClick="{(event) =>
      openModal(event.detail.action, {
        id: event.detail.id,
        data: event.detail.data
      })}"
    on:delete="{(event) => openModal('delete', event.detail)}"
    on:edit="{(event) => openModal('edit', event.detail)}"
  />
</div>
