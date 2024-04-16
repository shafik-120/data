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
    <button @click="downloadData" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4">
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
          <th scope="col" class="px-6 py-3">Action</th>
          <th scope="col" class="px-6 py-3">Action</th>
          <th scope="col" class="px-6 py-3">Action</th>
          <th scope="col" class="px-6 py-3">Action</th>
          <th scope="col" class="px-6 py-3">Action</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          v-for="data in userData" :key="data.element_100.url">
          <td class="px-6 py-4">
            <input @click="selectVal($event)" type="text" name="" :value="data.element_100.url" class="text-black"
              id="" />
          </td>
          <td class="px-6 py-4">
            <input @click="selectVal($event)" type="text" name=""
              :value="data && data.element_0 ? data.element_0.iconSrc : 'No text content available'" class="text-black"
              id="" />
          </td>
          <td class="px-6 py-4">
            <input @click="selectVal($event)" type="text" name=""
              :value="data && data.element_1 ? data.element_1.textContent : 'No text content available'"
              class="text-black" id="" />
          </td>
          <td class="px-6 py-4">
            <input @click="selectVal($event)" type="text" name=""
              :value="data && data.element_2 ? data.element_2.textContent : 'No text content available'"
              class="text-black" id="" />
          </td>
          <td class="px-6 py-4">
            <input @click="selectVal($event)" type="text" name=""
              :value="data && data.element_3 ? data.element_3.textContent : 'No text content available'"
              class="text-black" id="" />
          </td>
          <td class="px-6 py-4">
            <input @click="selectVal($event)" type="text" name=""
              :value="data && data.element_4 ? data.element_4.textContent : 'No text content available'"
              class="text-black" id="" />
          </td>
          <td class="px-6 py-4">
            <input @click="selectVal($event)" type="text" name=""
              :value="data && data.element_5 ? data.element_5.textContent : 'No text content available'"
              class="text-black" id="" />
          </td>
          <td class="px-6 py-4">
            <input @click="selectVal($event)" type="text" name=""
              :value="data && data.element_6 ? data.element_6.textContent : 'element_6 No text content available'"
              class="text-black" id="" />
          </td>
          <td class="px-6 py-4">
            <input @click="selectVal($event)" type="text" name=""
              :value="data && data.element_7 ? data.element_7.textContent : 'element_7 No text content available'"
              class="text-black" id="" />
          </td>
          <td class="px-6 py-4">
            <input @click="selectVal($event)" type="text" name=""
              :value="data && data.element_8 ? data.element_8.textContent : 'element_8 No text content available'"
              class="text-black" id="" />
          </td>
          <td class="px-6 py-4">
            <input @click="selectVal($event)" type="text" name=""
              :value="data && data.element_9 ? data.element_9.textContent : 'element_9 No text content available'"
              class="text-black" id="" />
          </td>
          <td class="px-6 py-4">
            <input @click="selectVal($event)" type="text" name=""
              :value="data && data.element_10 ? data.element_10.textContent : 'element_10 No text content available'"
              class="text-black" id="" />
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped></style>
