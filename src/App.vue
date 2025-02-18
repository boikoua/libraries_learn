<script setup></script>

<template>
  <header class="py-9">
    <h1 class="text-center text-8xl drop-shadow-md">
      <span class="text-blue-500">Smart</span>
      <span class="text-white">Invoice</span>
    </h1>
  </header>

  <main class="flex justify-center gap-7">
    <table
      class="h-max w-1/4 bg-white border border-slate-500 rounded-xl shadow-lg shadow-gray-300/70 overflow-hidden"
    >
      <thead>
        <tr>
          <th class="py-4 border">Name</th>
          <th class="py-4 border">Price</th>
          <th class="py-4 border">Count</th>
          <th class="py-4 border">Sum</th>
          <th class="py-4 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="py-2 text-center border">Monitor</td>
          <td class="py-2 text-center border">200</td>
          <td class="py-2 text-center border">3</td>
          <td class="py-2 text-center border">600</td>
          <td class="py-2 text-center border">icon</td>
        </tr>
        <tr>
          <td class="py-2 text-center border">Monitor</td>
          <td class="py-2 text-center border">200</td>
          <td class="py-2 text-center border">3</td>
          <td class="py-2 text-center border">600</td>
          <td class="py-2 text-center border">icon</td>
        </tr>
        <tr>
          <td class="py-2 text-center border">Monitor</td>
          <td class="py-2 text-center border">200</td>
          <td class="py-2 text-center border">3</td>
          <td class="py-2 text-center border">600</td>
          <td class="py-2 text-center border">icon</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th class="py-2 border" colspan="3">Total items: 9</th>
          <th class="py-2 border" colspan="2">Total sum: 3600</th>
        </tr>
      </tfoot>
    </table>

    <form
      class="flex flex-col gap-6 h-max w-1/4 p-6 bg-blue-500 border border-slate-500 rounded-xl shadow-lg shadow-gray-300/70"
    >
      <input
        type="text"
        placeholder="Product name..."
        class="py-3 px-5 rounded-lg text-lg bg-white outline-none focus:shadow-xl"
        required
      />
      <input
        type="number"
        placeholder="Product price..."
        class="py-3 px-5 rounded-lg text-lg bg-white outline-none focus:shadow-xl no-arrows"
        required
      />
      <input
        type="number"
        placeholder="Product count..."
        class="py-3 px-5 rounded-lg text-lg bg-white outline-none focus:shadow-xl no-arrows"
        required
      />
      <button
        class="py-3 px-5 rounded-lg text-lg bg-white outline-none focus:shadow-xl"
        type="submit"
      >
        Add product
      </button>
    </form>
  </main>
</template>
