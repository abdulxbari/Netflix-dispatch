<template>
  <v-bottom-sheet v-model="showBulkEdit" hide-overlay persistent>
    <handoff-dialog />
    <v-card :loading="bulkEditLoading" tile>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>{{ selected.length }} selected</v-list-item-subtitle>
          </v-list-item-content>
          <v-spacer />
          <v-list-item-icon>
            <v-btn text @click="showHandoffDialog()">
              <v-icon>mdi-account-arrow-right</v-icon>
              Handoff
            </v-btn>
          </v-list-item-icon>
          <v-list-item-icon>
            <v-btn text @click="saveBulk({ status: 'Active' })">
              <v-icon>mdi-check</v-icon>
              Mark Active
            </v-btn>
          </v-list-item-icon>
          <v-list-item-icon>
            <v-btn text @click="saveBulk({ status: 'Stable' })">
              <v-icon>mdi-lock</v-icon>
              Mark Stable
            </v-btn>
          </v-list-item-icon>
          <v-list-item-icon>
            <v-btn text @click="saveBulk({ status: 'Closed' })">
              <v-icon>mdi-close</v-icon>
              Mark Closed
            </v-btn>
          </v-list-item-icon>
          <v-list-item-icon>
            <v-btn text color="primary" @click="deleteBulk()">
              <v-icon color="primary">mdi-delete</v-icon>
              Delete
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
import { mapFields } from "vuex-map-fields"
import { mapActions } from "vuex"

import HandoffDialog from "@/incident/HandoffDialog.vue"

export default {
  name: "IncidentBulkEditSheet",

  components: {
    HandoffDialog,
  },

  computed: {
    ...mapFields("incident", ["table.rows.selected", "table.bulkEditLoading"]),

    showBulkEdit: function () {
      return this.selected.length ? true : false
    },
  },

  methods: {
    ...mapActions("incident", ["saveBulk", "deleteBulk", "showHandoffDialog"]),
  },
}
</script>
