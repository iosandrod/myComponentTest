<script setup lang="ts">
// import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<template>
  <main>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Suspense>
          <template #default>
            <component :is="Component"></component>
          </template>
          <template #fallback>正在加载当中 </template>
        </Suspense>
      </template>
    </RouterView>
  </main>
</template>

<style lang="scss">
.el-backtop {
  box-shadow: none !important;
  --el-backtop-bg-color: none !important;
  &:hover {
    box-shadow: none !important;
    --el-backtop-bg-color: none !important;
  }
}
</style>
