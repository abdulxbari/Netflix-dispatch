<template>
  <v-dialog v-model="showDeleteDialog" persistent max-width="800px">
    <v-card>
      <v-card-title>
        <span class="headline">Delete Case?</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            Are you sure you want to delete this case and all its external resources?
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue en-1" text @click="closeDeleteDialog()"> Cancel </v-btn>
        <v-btn color="red en-1" text @click="deleteCase(selected)"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapFields } from "vuex-map-fields"
import { mapActions } from "vuex"

export default {
  name: "CaseDeleteDialog",

  data() {
    return {}
  },

  computed: {
    ...mapFields("case_management", ["dialogs.showDeleteDialog", "selected"]),
  },

  methods: {
    ...mapActions("case_management", ["closeDeleteDialog", "deleteCase"]),
  },
}
</script>
