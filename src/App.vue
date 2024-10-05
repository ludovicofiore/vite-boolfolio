<script>

</script>


<template>
  <div class="container">

    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'home'}">Home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'projects'}">Progetti</router-link>
        </li>
        <li>
          <router-link :to="{name: 'contacts'}">Contatti</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>

</template>


<style lang="scss">

.container {
  width: 70%;
  margin: 0 auto;
  margin-top: 100px;
  background-color: bisque;
  font-family: Arial, Helvetica, sans-serif;
}

nav {
  width: 100%;
  background-color: black;
  padding: 10px 0;  

  ul {
    list-style-type: none;
    display: flex;
    gap: 20px;

    a {
      text-decoration: none;
      color: white;
    }
  }
}

</style>