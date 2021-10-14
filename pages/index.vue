<template>
  <div class="flex items-center justify-center bg-light-gray-cyan min-h-screen w-screen">
    <div class="max-w-4xl w-full bg-white p-6 rounded-xl grid lg:grid-cols-2 gap-6 mx-auto shadow-lg">
      <div class="py-4 space-y-6">
        <div class="form-group space-y-1">
          <label for="bill" class="block font-semibold text-sm">Bill</label>
          <div class="flex items-center h-12 w-full relative bg-light-gray-cyan-alt rounded text-light-gray-cyan">
            <svg class="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
            <input type="number" name="bill" v-model="form.bill" class="text-right w-full absolute inset-0 pl-8 pr-2 bg-transparent font-bold text-very-dark-cyan text-xl focus:ring-strong-cyan rounded">
          </div>
        </div>
        <div class="form-group space-y-1">
          <label for="tipPercent" class="block font-semibold text-sm">Select Tip %</label>
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-2 font-semibold">
            <div class="relative">
              <label @click="setCustomFieldVisibility('visible')" for="five" class=" text-center p-2 rounded h-full inset-0 flex items-center justify-center z-10 relative hover:bg-light-gray-cyan cursor-pointer transition-colors duration-150 ease-in-out"
                :class="form.tipPercent == '5' ? 'bg-light-gray-cyan text-very-dark-cyan' : 'bg-very-dark-cyan text-white hover:text-very-dark-cyan'"
              >5%</label>
              <input type="radio" id="five" value="5" v-model="form.tipPercent" class="absolute z-0 inset-0" >
            </div>
            <div class="relative">
              <label @click="setCustomFieldVisibility('visible')" for="10" class="text-center p-2 rounded h-full inset-0 flex items-center justify-center z-10 relative hover:bg-light-gray-cyan cursor-pointer transition-colors duration-150 ease-in-out"
                :class="form.tipPercent == '10' ? 'bg-light-gray-cyan text-very-dark-cyan' : 'bg-very-dark-cyan text-white hover:text-very-dark-cyan'"
              >10%</label>
              <input type="radio" id="10" value="10" v-model="form.tipPercent" class="absolute z-0 inset-0" >
            </div>
            <div class="relative">
              <label @click="setCustomFieldVisibility('visible')" for="fifteen" class="text-center p-2 rounded h-full inset-0 flex items-center justify-center z-10 relative hover:bg-light-gray-cyan cursor-pointer transition-colors duration-150 ease-in-out"
                :class="form.tipPercent == '15' ? 'bg-light-gray-cyan text-very-dark-cyan' : 'bg-very-dark-cyan text-white hover:text-very-dark-cyan'"
              >15%</label>
              <input type="radio" id="fifteen" value="15" v-model="form.tipPercent" class="absolute z-0 inset-0" >
            </div>
            <div class="relative">
              <label @click="setCustomFieldVisibility('visible')" for="twentyFive" class="text-center p-2 rounded h-full inset-0 flex items-center justify-center z-10 relative hover:bg-light-gray-cyan cursor-pointer transition-colors duration-150 ease-in-out"
                :class="form.tipPercent == '25' ? 'bg-light-gray-cyan text-very-dark-cyan' : 'bg-very-dark-cyan text-white hover:text-very-dark-cyan'"
              >25%</label>
              <input type="radio" id="twentyFive" value="25" v-model="form.tipPercent" class="absolute z-0 inset-0" >
            </div>
            <div class="relative">
              <label @click="setCustomFieldVisibility('visible')" for="fifty" class="text-center p-2 rounded h-full inset-0 flex items-center justify-center z-10 relative hover:bg-light-gray-cyan cursor-pointer transition-colors duration-150 ease-in-out"
                :class="form.tipPercent == '50' ? 'bg-light-gray-cyan text-very-dark-cyan' : 'bg-very-dark-cyan text-white hover:text-very-dark-cyan'"
              >50%</label>
              <input type="radio" id="fifty" value="50" v-model="form.tipPercent" class="absolute z-0 inset-0" >
            </div>
            <div  class="relative">
              <label @click="setCustomFieldVisibility('invisible')" for="cutsomPercent" class="h-full w-full absolute inset-0 flex justify-center items-center bg-light-gray-cyan-alt" :class="customLabelVisible === false ? 'z-0' : 'z-10'">Custom</label>
              <input ref="cutsomPercent" id="customPercent" type="number" v-model="form.tipPercent" class="h-full w-full border text-center bg-white absolute inset-0 font-semibold rounded" :class="customLabelVisible === false ? 'z-10' : 'z-0'" placeholder="0">
            </div>
            
          </div>
        </div>
        <div class="form-group space-y-1">
          <label for="personCount" class="block font-semibold text-sm">Number of People</label>
          <div class="flex items-center h-12 w-full relative bg-light-gray-cyan-alt rounded text-light-gray-cyan">
            <svg class="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            <input type="number" name="personCount" v-model="form.personCount" class="text-right w-full absolute inset-0 pl-8 pr-2 bg-transparent font-bold text-very-dark-cyan text-xl">
          </div>
        </div>
      </div>
      <div class="bg-very-dark-cyan rounded-xl pt-12 pb-8 px-8 flex flex-col">
        <div class="space-y-6 text-strong-cyan">
          <div class="flex justify-between space-x-4">
            <p class="text-sm"><span class="block text-white">Tip Amount</span> / person</p>
            <p class="font-bold text-3xl">${{tipAmount}}</p>
          </div>
          <div class="flex justify-between space-x-4">
            <p class="text-sm"><span class="block text-white">Total</span> / person</p>
            <p class="font-bold text-3xl">${{total}}</p>
          </div>
        </div>
        <div class="mt-auto">
          <button @click="reset" class="bg-light-gray-cyan hover:bg-light-gray-cyan-alt transition-colors duration-150 ease-in-out text-center border-0 py-2 w-full rounded uppercase font-semibold text-very-dark-cyan">Reset</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customLabelVisible: true,
      form: {
        bill: 0,
        tipPercent: [],
        personCount: 1,
      }
    }
  },
  computed: {
    totals() {
      return {
        billAmount: parseInt(this.form.bill) > 0 ? parseInt(this.form.bill) : 0,
        tip: parseInt(this.form.tipPercent) ? parseInt(this.form.tipPercent)/100 : 0,
        personCount: this.form.personCount
      }
    },
    tipAmount() {
      return this.totals.billAmount && this.totals.tip ? ((this.totals.billAmount * this.totals.tip)/this.totals.personCount).toFixed(2) : 0.00.toFixed(2)
    },
    total() {
      let total = 0.00.toFixed(2)
      if (this.totals.billAmount && !this.totals.tip) {
        total = (this.totals.billAmount / this.totals.personCount).toFixed(2)
      }
      if (this.totals.billAmount && this.totals.tip) {
        total = (((this.totals.billAmount + this.totals.billAmount * this.totals.tip))/this.totals.personCount).toFixed(2)
      }
      return total
    }
  },
  methods: {
    setCustomFieldVisibility(visibility) {
      this.customLabelVisible = visibility === 'invisible' ? false : true
      visibility === 'invisible' ? this.$refs.cutsomPercent.focus() : null
    },
    reset() {
      this.form.bill = 0.00
      this.tipAmount = 0.00
      this.total = 0.00
      this.form.tipPercent = []
      this.form.personCount = 1
      this.customLabelVisible = true
    }
  },
}
</script>
