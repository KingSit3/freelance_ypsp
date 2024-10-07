<template>
  <main
    class="min-h-screen w-full flex flex-col justify-center items-center relative p-5 lg:p-20 space-y-5"
    style="
      background-image: url('/background.jpeg');
      background-repeat: no-repeat;
      background-size: cover;
      font-family: Nosifer;
    "
  >
    <div class="bg-white/50 rounded-xl shadow-2xl w-full lg:w-1/4 flex justify-center">
      <img src="/logo.webp" alt="Logo" class="w-40" />
    </div>
    <div
      class="min-w-[50%] py-10 px-5 gap-5 flex flex-col justify-center items-center z-10 bg-white rounded-xl shadow-2xl"
    >
      <div class="relative">
        <div class="rotate-180">
          <ClockComponent :time="time?.date" />
        </div>
        <img src="/blood.svg" alt="Blood" class="w-40 absolute bottom-6 left-7 opacity-95" />
      </div>

      <div class="w-full h-0.5 bg-black/20" />

      <!-- Time -->
      <div class="relative flex flex-col gap-5 w-full">
        <!-- Minutes & Hours -->
        <div class="flex flex-col lg:flex-row justify-around items-center w-full z-10 gap-5">
          <div class="flex flex-col items-center text-red-700 w-1/2">
            <p class="font-semibold text-lg">Menit</p>
            <p class="font-extrabold text-3xl">{{ time?.minutes }}</p>
          </div>
          <div class="h-20 hidden lg:flex w-0.5 bg-black/20" />
          <div class="h-0.5 flex lg:hidden w-full bg-black/20" />
          <div class="flex flex-col items-center text-red-700 w-1/2">
            <p class="font-semibold text-lg">Jam</p>
            <p class="font-extrabold text-3xl">{{ time?.hours }}</p>
          </div>
          <div class="h-20 hidden lg:flex w-0.5 bg-black/20" />
          <div class="h-0.5 flex lg:hidden w-full bg-black/20" />
          <div class="flex flex-col items-center text-red-700 w-1/2">
            <p class="font-semibold text-lg">Hari</p>
            <p class="font-extrabold text-3xl">{{ time?.days }}</p>
          </div>
        </div>

        <div class="w-full h-0.5 bg-black/20" />

        <!-- Weeks, Months & Years -->
        <div class="flex flex-col lg:flex-row justify-around items-center w-full z-10 gap-5">
          <div class="flex flex-col items-center text-red-700 w-1/3">
            <p class="font-semibold text-lg">Minggu</p>
            <p class="font-extrabold text-3xl">{{ time?.weeks }}</p>
          </div>
          <div class="h-20 hidden lg:flex w-0.5 bg-black/20" />
          <div class="h-0.5 flex lg:hidden w-full bg-black/20" />
          <div class="flex flex-col items-center text-red-700 w-1/3">
            <p class="font-semibold text-lg">Bulan</p>
            <p class="font-extrabold text-3xl">{{ time?.months }}</p>
          </div>
          <div class="h-20 hidden lg:flex w-0.5 bg-black/20" />
          <div class="h-0.5 flex lg:hidden w-full bg-black/20" />
          <div class="flex flex-col items-center text-red-700 w-1/3">
            <p class="font-semibold text-lg">Tahun</p>
            <p class="font-extrabold text-3xl">{{ time?.years }}</p>
          </div>
        </div>
        <div class="w-full h-0.5 bg-black/20" />
      </div>

      <p class="font-semibold text-xl text-center" style="font-family: Carter One">
        Penjajahan dan Agresi sejak 7 Oktober 2023
      </p>
      <a
        href="https://drive.google.com/drive/folders/1el_FogyxUazKgrVY6Ke8p7dZTIKIzHt2?usp=drive_link"
        target="_blank"
        class="border-2 border-black/20 p-3 px-5 rounded-lg hover:opacity-50 duration-300"
      >
        Konten Media
      </a>
      <div class="flex flex-col gap-2 justify-center items-center">
        <p class="font-semibold text-center">Kontak & Sosial media</p>
        <div class="flex gap-10">
          <a
            href="https://www.instagram.com/matapalestina48?igsh=eW14NXN5cDkycWZj"
            target="_blank"
            class="lg:hover:opacity-50 duration-300"
          >
            <img src="/instagram-icon.svg" alt="Instagram Icon" />
          </a>
          <a
            href="https://wa.me/+6285210116092"
            target="_blank"
            class="lg:hover:opacity-50 duration-300"
          >
            <img src="/whatsapp-icon.svg" alt="Whatsapp Icon" />
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
