<template>
  <div class="pt-2">
    <button
        type="button"
        class=" hover:bg-emerald-500 flex justify-center items-center border border-2 border-emerald-200 bg-emerald-200   rounded-full border-2 border-emerald-500 text-black p-3  font-bold
           w-full sm:w-auto
           h-10 sm:h-12
           px-4 sm:px-6
           text-sm sm:text-base lg:text-lg
           text-black
           bg-emerald-200
           border-2 border-emerald-500
           rounded-full
           hover:bg-emerald-500
           transition duration-200">
      {{ buttonName }}
    </button>
  </div>

</template>
<script>
export default {
  name: 'buttons',
  props: {
    buttonName: {
      type: String,
      default: "",
      required: false
    }
  },
}
</script>