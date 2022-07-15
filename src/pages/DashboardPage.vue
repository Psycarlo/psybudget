<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="flex gap-x-2">
      <div
        class="flex items-center gap-x-2 rounded-md bg-brand-primary px-4 text-brand-light duration-500 hover:-translate-y-1 hover:shadow-md"
      >
        <svg
          class="h-6 w-6 fill-brand-light"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p class="font-bold">Today</p>
      </div>
      <input
        v-model="amount"
        type="number"
        placeholder="Amount"
        class="rounded-md border-0 bg-brand-gray focus:ring-2 focus:ring-brand-primary"
      />
      <input
        v-model="description"
        type="text"
        placeholder="Description"
        class="rounded-md border-0 bg-brand-gray focus:ring-2 focus:ring-brand-primary"
      />
      <select
        class="rounded-md border-0 bg-brand-gray focus:ring-2 focus:ring-brand-primary"
      ></select>
      <button
        class="flex min-w-[2.5rem] items-center justify-center rounded-full bg-brand-secondary duration-500 hover:translate-y-1 hover:shadow-md"
        @click="addEntry(false)"
      >
        <svg
          class="h-6 w-6 stroke-brand-light"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 12H4"
          ></path>
        </svg>
      </button>
      <button
        class="flex min-w-[2.5rem] items-center justify-center rounded-full bg-brand-primary duration-500 hover:-translate-y-1 hover:shadow-md"
        @click="addEntry(true)"
      >
        <svg
          class="h-6 w-6 stroke-brand-light"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue'

  import pocketbase from '../services/pocketbase'

  const amount = ref<number | undefined>()
  const description = ref('')
  const category = ref('')

  function addEntry(isCredit: boolean) {
    console.log(amount.value, description.value, category.value, isCredit)
  }

  onMounted(async () => {
    // const res = await pocketbase.createRecord()
    // console.log(res)
  })
</script>
