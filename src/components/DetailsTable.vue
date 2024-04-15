<script setup>
import output from '@/other/output.json'
const userData = output

function selectVal(event) {
  event.target.select()
  const text = event.srcElement.value
  //   console.log(inputVal)
  navigator.clipboard.writeText(text)
}
</script>
<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Product name</th>
          <th scope="col" class="px-6 py-3">Color</th>
          <th scope="col" class="px-6 py-3">Category</th>
          <th scope="col" class="px-6 py-3">Price</th>
          <th scope="col" class="px-6 py-3">Action</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          v-for="data in userData"
          :key="data.url"
        >
          <td class="px-6 py-4">
            <input
              @click="selectVal($event)"
              type="text"
              name=""
              :value="data.url"
              class="text-black"
              id=""
            />
          </td>
          <td class="px-6 py-4">
            <input
              @click="selectVal($event)"
              type="text"
              name=""
              :value="data.element_1"
              class="text-black"
              id=""
            />
          </td>
          <td class="px-6 py-4">
            <input
              @click="selectVal($event)"
              type="text"
              name=""
              :value="data.element_2"
              class="text-black"
              id=""
            />
          </td>
          <td class="px-6 py-4">
            <input
              @click="selectVal($event)"
              type="text"
              name=""
              :value="data.element_4"
              class="text-black"
              id=""
            />
          </td>
          <td class="px-6 py-4">
            <input
              @click="selectVal($event)"
              type="text"
              name=""
              :value="data.element_5"
              class="text-black"
              id=""
            />
          </td>
          <td class="px-6 py-4">
            <input
              @click="selectVal($event)"
              type="text"
              name=""
              :value="data.element_6"
              class="text-black"
              id=""
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped></style>
