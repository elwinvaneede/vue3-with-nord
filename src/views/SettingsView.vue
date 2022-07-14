<script lang="ts" setup>
import "@nordhealth/components/lib/Card";
import "@nordhealth/components/lib/Stack";
import "@nordhealth/components/lib/Input";
import "@nordhealth/components/lib/Select";
import "@nordhealth/components/lib/Button";
</script>

<template>
  <nord-card padding="l" style="max-width: 600px">
    <h2 slot="header">Workspace</h2>
    <nord-stack gap="l">
      <p class="n-color-text-weaker">
        Manage your clinic’s workspace settings here.
      </p>
      <form action="#">
        <nord-stack gap="l">
          <nord-input
            expand
            name="name"
            label="Workspace name"
            value="Nord Design System"
          ></nord-input>
          <nord-input
            expand
            name="url"
            label="Workspace URL"
            value="nordhealth.design/nord"
          ></nord-input>
          <nord-select name="theme" value="light" label="Interface theme">
            <option value="light">Light theme</option>
            <option value="dark">Dark theme</option>
            <option value="auto">Auto (system preference)</option>
          </nord-select>
          <nord-button variant="primary" submit>Update</nord-button>
          <hr class="n-divider" />
          <nord-stack gap="s">
            <h3 class="n-typescale-xl">Delete workspace</h3>
            <p class="n-color-text-weaker">
              If you want to permanently delete this workspace and all of its
              data, you can do that do that below.
            </p>
          </nord-stack>
          <nord-button variant="danger" submit>Delete workspace</nord-button>
        </nord-stack>
      </form>
    </nord-stack>
  </nord-card>
</template>
