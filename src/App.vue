<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="custom-toolbar">
        <div class="toolbar-right">
          <q-btn-dropdown class="custom-dropdown" label="Tugas" dropdown-icon="">
            <q-list class="nav-list">
              <q-item clickable v-close-popup>
                <router-link to="/">
                  <q-item-section>
                    <q-item-label class="nav-label">Weather</q-item-label>
                  </q-item-section>
                </router-link>
              </q-item>
              <q-item clickable v-close-popup>
                <router-link to="/tugas1">
                  <q-item-section>
                    <q-item-label class="nav-label">TUGAS 1</q-item-label>
                  </q-item-section>
                </router-link>
              </q-item>
              <q-item clickable v-close-popup>
                <router-link to="/tugas4">
                  <q-item-section>
                    <q-item-label class="nav-label">TUGAS 4</q-item-label>
                  </q-item-section>
                </router-link>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  setup() {},
};
</script>

<style>

.custom-toolbar {
  background-color: #050C9C;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: flex-start; 
  align-items: center;
}

.toolbar-right {
  display: flex;
  justify-content: flex-end; 
  width: 100%;
}

.custom-dropdown {
  background-color:#050C9C;
  color: white;
}

.nav-list {
  background-color: white;
  color: black;
}

.q-item-section {
  color: white;
}

.nav-label {
  font-weight: bold;
  color: black !important;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  background-color:white;
  background-size: 100%;
}

</style>
