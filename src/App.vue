<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";

import PrimaryNavigation from "./components/PrimaryNavigation.vue";
import PageHeader from "./components/PageHeader.vue";

import "@nordhealth/components/lib/Layout";
import "@nordhealth/components/lib/CommandMenu";

import { useTitle } from "@vueuse/core";

const title = useTitle();
const router = useRouter();

router.afterEach((to) => {
  title.value = to.meta.title;
});
</script>

<template>
  <nord-layout nav-toggle="toggle-button">
    <PrimaryNavigation />
    <PageHeader />
    <RouterView />
    <nord-command-menu></nord-command-menu>
  </nord-layout>
</template>
