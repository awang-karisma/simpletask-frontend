<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { Refresh } from 'svelte-heros'

  const dispatch = createEventDispatcher()
  const handleClick = (event: MouseEvent, name: string) => {
    event.stopPropagation()
    dispatch(name)
  }
  let color: string
  let isLoading: boolean
  export { color, isLoading }
</script>

<button
  type="submit"
  class="{`rounded-lg hover:bg-${color}-400 bg-${color}-300 mx-1 p-1.5`}"
  on:click="{(event) => handleClick(event, 'click')}"
>
  {#if isLoading}
    <Refresh />
  {:else}
    <slot />
  {/if}
</button>
