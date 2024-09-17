<script>
export default {
  data() {
    return {
      childrenData: [],
      personData: {},
    };
  },
  created() {
    // Получаем данные из query-параметров и парсим их
    if (this.$route.query.children) {
      this.childrenData = JSON.parse(this.$route.query.children);
    }
    if (this.$route.query.person) {
      this.personData = JSON.parse(this.$route.query.person);
    }
  },
};
</script>

<template>
  <div class="flex flex-col gap-[10px] w-[200px] ml-[375px] mt-[50px]">
    <h1 class="font-medium text-[16px] leading-[24px]">Персональные данные</h1>
    <div class="font-bold text-[16px] leading-[24px]">
      {{ personData.name }}, {{ personData.age }} лет
    </div>
    <h1 class="font-medium text-[16px] leading-[24px]">Дети</h1>
    <div
      v-for="(child, index) in childrenData"
      :key="index"
      class="py-[10px] px-[20px] bg-[#F1F1F1] rounded font-bold text-[16px] leading-[24px]"
    >
      <p>{{ child.name }}, {{ child.age }} лет</p>
    </div>
  </div>
</template>
