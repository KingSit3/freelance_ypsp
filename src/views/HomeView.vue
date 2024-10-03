<template>
  <main class="min-h-screen w-full flex justify-center items-center relative p-20">
    <div class="absolute top-0 w-full h-full bg-gradient-to-tl from-green-500" />
    <div
      class="min-w-[50%] py-10 px-5 gap-5 flex flex-col justify-center items-center z-10 bg-white rounded-xl shadow-2xl"
    >
      <div class="relative">
        <img src="/logo.webp" alt="Logo" class="w-40" />
        <div class="rotate-180">
          <ClockComponent :time="time?.date" />
        </div>
        <img src="/blood.svg" alt="Blood" class="w-40 absolute bottom-6 left-7 opacity-95" />
      </div>

      <!-- Time -->
      <div class="relative flex flex-col gap-5 w-full">
        <!-- Minutes & Hours -->
        <div class="flex justify-around w-full z-10">
          <div class="flex flex-col items-center">
            <p class="font-semibold text-lg">Menit</p>
            <p class="font-extrabold text-3xl">{{ time?.minutes }}</p>
          </div>
          <div class="flex flex-col items-center">
            <p class="font-semibold text-lg">Jam</p>
            <p class="font-extrabold text-3xl">{{ time?.hours }}</p>
          </div>
        </div>

        <div class="w-full h-0.5 bg-black/20" />

        <!-- Weeks, Months & Years -->
        <div class="flex justify-around w-full z-10">
          <div class="flex flex-col items-center">
            <p class="font-semibold text-lg">Minggu</p>
            <p class="font-extrabold text-3xl">{{ time?.weeks }}</p>
          </div>
          <div class="flex flex-col items-center">
            <p class="font-semibold text-lg">Bulan</p>
            <p class="font-extrabold text-3xl">{{ time?.months }}</p>
          </div>
          <div class="flex flex-col items-center">
            <p class="font-semibold text-lg">Tahun</p>
            <p class="font-extrabold text-3xl">{{ time?.years }}</p>
          </div>
        </div>
      </div>

      <p class="font-semibold text-center">Penjajahan dan Agresi sejak 7 Oktober 2023</p>
      <div class="flex flex-col gap-2 justify-center items-center">
        <p class="font-semibold">Kontak & Sosial media</p>
        <div class="flex gap-10">
          <a href="" class="lg:hover:opacity-50 duration-300">
            <img src="/telegram-icon.svg" alt="Telegram Icon" />
          </a>
          <a href="" class="lg:hover:opacity-50 duration-300">
            <img src="/whatsapp-icon.svg" alt="Telegram Icon" />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import ClockComponent from '@/components/ClockComponent.vue'
import { ref, onMounted } from 'vue'

interface TimeInterface {
  date: Date
  seconds: string
  minutes: string
  hours: string
  days: string
  weeks: string
  months: string
  years: string
}

const time = ref<TimeInterface>()

const getDistantDate = () => {
  const now = new Date()
  let firstInvasion = new Date('10/07/2023')
  let diff = now.getTime() - firstInvasion.getTime()

  return {
    date: now,
    seconds: Math.round(diff / 1000).toString(),
    minutes: Math.round(diff / (1000 * 60)).toString(),
    hours: Math.round(diff / (1000 * 3600)).toString(),
    days: Math.round(diff / (1000 * 3600 * 24)).toString(),
    weeks: Math.round(diff / (1000 * 3600 * 24 * 7)).toString(),
    months: Math.round(diff / (1000 * 3600 * 24 * 30)).toString(), // it's not bug, it's feature!
    years: Math.round(diff / (1000 * 3600 * 24 * 30 * 12)).toString()
  }
}

onMounted(() => {
  time.value = getDistantDate()
  setInterval(() => {
    time.value = getDistantDate()
  }, 1000)
})
</script>
