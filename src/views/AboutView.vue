<script setup lang="ts">
import "@nordhealth/components/lib/Button";
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <nord-button variant="primary">Hello</nord-button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    gap: var(--n-space-s);
  }
}
</style>
