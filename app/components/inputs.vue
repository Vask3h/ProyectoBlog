<script>
export default {
  name: 'inputs',
  props: {
    textLabel: {
      type: String,
      default: ""
    },
    typeInput: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: String,
      default: ""
    },
    textPlaceholder: {
      type: String,
      default: ""
    }
  },
}
</script>
<template>
<div class="flex flex-col  w-full" >
  <label class="text-white mt-3 ">{{ textLabel }}</label>
  <input
      :value="modelValue"
      :placeholder="textPlaceholder"
      :type="typeInput"
      @input="$emit('update:modelValue', $event.target.value)"

      class="border border-4 border-emerald-200 bg-emerald-200 outline-none focus-within:border-emerald-500 rounded-lg text-black">

</div>
</template>