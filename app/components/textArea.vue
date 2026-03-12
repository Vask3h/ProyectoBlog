<script>
export default {
  name: 'inputs',
  props: {
    textLabel: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      default: ""
    },


  }
}
</script>
<template>
  <div class="flex flex-col" >
    <label class="text-white mt-3">{{ textLabel }}</label>
    <textarea
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        placeholder="Inserte su descripcion de la tarea"
        class="min-h-40 max-h-40 border border-4 border-emerald-200 bg-emerald-200 outline-none focus-within:border-emerald-500 rounded-lg text-black"></textarea>

  </div>


</template>
