<script lang="ts">
  import { type Writable, writable } from 'svelte/store'

  import type { NavigationLink } from '@/types/NavigationLink.type'

  let isUserMenuOpen: Writable<boolean> = writable(false)
  let activeMenu: Writable<string> = writable('Home')
  let navigationLinks: NavigationLink[] = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' }
  ]
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-white">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="flex flex-1 items-stretch justify-start">
        <div class="flex flex-shrink-0 items-center">
          <img
            class="block h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt="Workflow"
          />
        </div>
        <div class="sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            {#each navigationLinks as navigationLink}
              <a
                href="{navigationLink.href}"
                class="{$activeMenu === navigationLink.name
                  ? 'bg-gray-900 text-white'
                  : 'text-black hover:text-white'} rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700"
                aria-current="page"
              >
                {navigationLink.name}
              </a>
            {/each}
          </div>
        </div>
      </div>
      <div
        class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
      >
        <!-- Profile dropdown -->
        <div class="relative ml-3">
          <div>
            <button
              type="button"
              class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              on:click="{() => ($isUserMenuOpen = !$isUserMenuOpen)}"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="h-8 w-8 rounded-full"
                src="images/fotoprofil.jpg"
                alt=""
              />
            </button>
          </div>

          <!--
              Dropdown menu, show/hide based on menu state.
  
              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
          <div
            class="{$isUserMenuOpen
              ? ''
              : 'hidden'} absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabindex="-1"
          >
            <!-- Active: "bg-gray-100", Not Active: "" -->
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-0"
            >
              Your Profile
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-1"
            >
              Settings
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-2"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
