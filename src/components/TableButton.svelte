<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { Refresh } from 'svelte-heros'

  const dispatch = createEventDispatcher()
  const handleClick = (event: MouseEvent, name: string) => {
    event.stopPropagation()
    dispatch(name)
  }
  let color = 'green'
  let isLoading = false
  export { color, isLoading }
</script>

<div>
  <button
    type="submit"
    class="rounded-lg bg-{color}-300 mx-1 p-1.5"
    on:click="{(event) => handleClick(event, 'click')}"
  >
    {#if isLoading}
      <Refresh />
    {:else}
      <slot />
    {/if}
  </button>
</div>
