<script setup lang="ts"></script>

<template>
  <div
    class="w-screen h-[76px] bg-white"
    style="box-shadow: 0px 1px 0px 0px #1111111a"
  >
    <div class="w-[93px] h-[29px] relative top-[22px] left-[52px]">
      <img src="/LogoMain.svg" />
    </div>
    <div class="relative left-[50vw] w-[200px]">
      <div class="flex flex-row gap-2">
        <div>
          <router-link
            to="/"
            class="text-[14px] font-normal text-GrayHeader leading-[24px]"
            >Меню</router-link
          >
        </div>
        <router-link
          to="/info"
          class="text-[14px] font-normal text-GrayHeader leading-[24px]"
          >Превью</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
