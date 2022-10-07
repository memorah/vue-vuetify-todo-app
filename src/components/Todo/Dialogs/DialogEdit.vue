<template>
  <v-dialog :value="true">
    persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Edit Task? </v-card-title>
      <v-card-text>Edit the title of this task?</v-card-text>
      <v-text-field class="px-6" />
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="$emit('close')">
          Cancel
        </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="$store.dispatch('deleteTask', task.id)"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
};
</script>

<style></style>
