<template>
  <Disclosure as="nav" class="bg-blue-900" v-slot="{ open }">
    <div class="mx-auto">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6 bg-transparent" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex">
          <div class="flex ml-8">
            <img class="h-8 w-auto" src="../../../public/images/nav_bar_icon.png" alt="Your Company" />
          </div>
          <div class="hidden sm:ml-6 sm:block items-center">
            <div class="flex space-x-4 items-center">
              <router-link v-for="item in navigation" :key="item.name" :to="{name : item.name}"
                :class="[item.current ? 'text-white' : 'text-gray-300', 'rounded-md px-3 py-2 text-sm font-medium']"
                :aria-current="item.current ? 'page' : undefined" class="flex items-center hover:text-white">
                {{ item.name }} 
                <button v-if="!item.current" type="button">
                  <ChevronDown class="h-4 w-4 ml-1.5 mt-1" aria-hidden="true" />
                </button>
              </router-link>
            </div>
          </div>
        </div>

        <div class="flex items-center pr-2">
          <button type="button" class="pr-4 text-gray-300 hover:text-white">
            <PlusIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <div class="border-l border-l-blue-800 h-16 pr-4"></div>

          <button type="button" class="pr-4 text-gray-300 hover:text-white">
            <SearchIcon class="h-6 w-6" aria-hidden="true" />
          </button>
          <button type="button" class="pr-4 text-gray-300 hover:text-white">
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>
          <button type="button" class="pr-4 text-gray-300 hover:text-white">
            <BentoIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <div>
            <Menu as="div" class="relative">
              <div>
                <MenuButton
                  class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-gray-800">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your
                    Profile</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>

</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, PlusIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import BentoIcon from './icons/BentoIcon.vue';
import SearchIcon from './icons/SearchIcon.vue';
import ChevronDown from './icons/ChevronDown.vue';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Campaigns', href: '#', current: false },
  { name: 'Audience', href: '#', current: false },
  { name: 'Automations', href: '#', current: false },
]
</script>