<template>
  <v-dialog v-model="showRemove" persistent max-width="800px">
    <v-card>
      <v-card-title>
        <span class="headline">Delete Entity Type?</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap> Are you sure you would like to delete this entity type? </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue en-1" text @click="closeRemove()"> Cancel </v-btn>
        <v-btn color="red en-1" text @click="remove()"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex"
import { mapFields } from "vuex-map-fields"
export default {
  name: "EntityTypeDeleteDialog",
  data() {
    return {}
  },
  computed: {
    ...mapFields("entity_type", ["dialogs.showRemove"]),
  },

  methods: {
    ...mapActions("entity_type", ["remove", "closeRemove"]),
  },
}
</script>
