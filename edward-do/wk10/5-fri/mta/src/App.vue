<template>
  <div id="app">
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <router-link to="/" exact class="item">
            <i class="train icon" /> MTA
          </router-link>
        </div>
      </div>
    </div>

    <div class="ui text container">
      <div class="ui one column grid">
        <div class="column">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
  #app > div.navbar {
    margin-bottom: 1.5em;
    border-radius: 0;
  }
</style>
