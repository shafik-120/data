<script setup>
import output from '@/other/output.json'
const userData = output

function selectVal(event) {
  event.target.select()
  const text = event.srcElement.value
  //   console.log(inputVal)
  navigator.clipboard.writeText(text)
}

function downloadData() {
  const dataStr = generateExcelData(userData)
  const blob = new Blob([dataStr], { type: 'application/vnd.ms-excel' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', 'data.xls')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function generateExcelData(data) {
  let result = 'Product Name\tColor\tCategory\tPrice\tAction\tAction\n'
  data.forEach((item) => {
    result += `${item.url}\t${item.element_1}\t${item.element_2}\t${item.element_4}\t${item.element_5}\t${item.element_6}\n`
  })
  return result
}
</script>
<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <button
      @click="downloadData"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
    >
      Download
    </button>
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
