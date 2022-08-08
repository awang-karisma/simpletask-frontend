<script lang="ts">
  import Header from '@/components/Header.svelte'

  import '../app.css'
</script>

<Header />

<body>
  <div class="mx-auto my-0 max-w-7xl px-2 sm:px-6 lg:px-8">
    <slot />
  </div>
</body>
