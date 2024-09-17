<script>
import ButtonAddChild from "../Buttons/ButtonAddChild.vue";
import ButtonSave from "../Buttons/ButtonSave.vue";

export default {
  components: {
    ButtonAddChild,
    ButtonSave,
  },
  data() {
    return {
      children: [],
      person: {
        name: "",
        age: "",
      },
    };
  },
  methods: {
    addChild() {
      if (this.children.length < 5) {
        this.children.push({ name: "", age: "" }); // Добавляем нового ребенка
      }
    },
    removeChild(index) {
      this.children.splice(index, 1); // Удаление ребенка из списка
    },
    saveData() {
      // Объединение данных для передачи через query-параметры
      this.$router.push({
        name: "InfoPage", // Страница, куда передаем данные
        query: {
          children: JSON.stringify(this.children),
          person: JSON.stringify(this.person),
        },
      });
    },
  },
};
</script>

<template>
  <div class="w-[616px] flex flex-col gap-5 mx-auto pt-[30px]">
    <div class="flex flex-col gap-5 w-[616px] mx-auto mt-[30px]">
      <div>Персональные данные</div>
      <div class="flex flex-col gap-[10px]">
        <div
          class="w-[616px] h-[56px] border border-GrayBorder flex flex-col pl-4"
        >
          <div class="text-[#1111117A]">Имя</div>
          <input type="text" v-model="person.name" />
        </div>
        <div
          class="w-[616px] h-[56px] border border-GrayBorder flex flex-col pl-4"
        >
          <div class="text-[#1111117A]">Возраст</div>
          <input type="text" v-model="person.age" />
        </div>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="font-medium text-[16px] leading-[24px]">Дети (макс. 5)</div>
      <ButtonAddChild
        v-if="children.length < 5"
        class="relative left-[300px] top-[-15px] select-none"
        @click="addChild"
      />
    </div>

    <!-- Блоки для ввода данных о детях -->
    <div
      v-for="(child, index) in children"
      :key="index"
      class="flex flex-row gap-[18px]"
    >
      <div
        class="w-[260px] h-[56px] border border-GrayBorder flex flex-col gap-[5px] pl-[10px]"
      >
        <div class="font-normal text-[14px] leading-[24px] text-[#1111117A]">
          Имя
        </div>
        <input
          v-model="child.name"
          class="font-normal text-[14px] leading-[24px]"
          placeholder="Введите имя"
        />
      </div>
      <div
        class="w-[260px] h-[56px] border border-GrayBorder flex flex-col gap-[5px] pl-[10px]"
      >
        <div class="font-normal text-[14px] leading-[24px] text-[#1111117A]">
          Возраст
        </div>
        <input
          v-model="child.age"
          class="font-normal text-[14px] leading-[24px]"
          placeholder="Введите возраст"
        />
      </div>
      <div
        class="w-[60px] h-[24px] font-normal text-[14px] leading-[24px] text-[#01A7FD] mt-[15px] cursor-pointer hover:text-[#195a7aec] transition duration-300 select-none"
        @click="removeChild(index)"
      >
        Удалить
      </div>
    </div>

    <!-- Кнопка для сохранения данных -->
    <ButtonSave @click="saveData" />
  </div>
</template>
