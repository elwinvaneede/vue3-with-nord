<script setup lang="ts">
import "@nordhealth/components/lib/Button";
import "@nordhealth/components/lib/Badge";
</script>

<template>
  <div class="another">
    <h1>This is another page</h1>
    <nord-button variant="primary">Hello</nord-button>
    <nord-badge type="info">again</nord-badge>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .another {
    min-height: 100vh;
    display: flex;
    align-items: center;
    gap: var(--n-space-s);
  }
}
</style>
