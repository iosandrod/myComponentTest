<script setup lang="ts">
import HistoryMenu from '@/layouts/admin/historyMenu.vue'
import leftMenu from '@/layouts/admin/leftMenu.vue'
import Navbar from '@/layouts/admin/navbar.vue'
</script>

<template>
  <main class="admin h-screen w-screen grid md:grid-cols-[auto_1fr]">
    <leftMenu />
    <!-- 
      历史的menu
     -->
    <section class="content bg-gray-100 grid grid-rows-[auto_1fr] overflow-hidden">
      <div>
        <Navbar />
        <HistoryMenu />
      </div>
      <div class="pb-32 overflow-y-auto">
        <router-view #default="{ Component, route }">
          <component :is="Component" :key="route.fullPath" />
        </router-view>
      </div>
    </section>
  </main>
</template>
