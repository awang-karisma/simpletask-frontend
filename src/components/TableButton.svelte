<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { Refresh } from 'svelte-heros'
  const dispatch = createEventDispatcher()

  let color = 'green'
  let isLoading = false
  export { color, isLoading }
</script>

<div>
  <button
    type="submit"
    class="rounded-lg bg-{color}-300 mx-1 p-1.5"
    on:click="{() => dispatch('click')}"
  >
    {#if isLoading}
      <Refresh />
    {:else}
      <slot />
    {/if}
  </button>
</div>
