<template>
  <!-- Une template doit toujours n'avoir qu'une seule balise à la racine -->
  <div class="csstagram">
    <p>Bonjour, je suis la page {{ pageName }}</p>
    <div class="container">
      <div v-for="post in posts" :key="post.id" class="post">
        <h2>{{ post.titre }}</h2>
        <img :src="post.url" :alt="post.alt" />
        <div class="likes">
          <img :src="post.heart" alt="Coeur" @click.once="liker(post.id)" />
          <p v-if="post.likes <= 100">{{ post.likes }}</p>
          <p v-else>+ de 100 personnes</p>
          <p>Bonjour c'est moi!</p>
        </div>
      </div>
    </div>
    <!-- <p v-if="testLogique">A vendre</p> -->
    <!-- <input type="text" name="jeanmichel" id="jeanmichel" v-model="input">
    <h1>Voici mon input : {{ input }}</h1>-->
  </div>
</template>
    
<script>
export default {
  mounted() {
    fetch('https://api.lucasvandenberg.fr/v1/post?page=9', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    this.posts = myJson.data;
  });
  },
  data: function() {
    return {
      posts: null,
      errorStatus: null,
      pageName: "jeanmichel"
    };
  },
  methods: {
    liker: function(id) {
      return (
        (this.posts[id].heart =
          "https://image.flaticon.com/icons/png/512/148/148836.png"),
        this.posts[id].likes++
      );
    }
  },
  name: "home"
};
</script>

<style lang="scss" scoped>
body * {
  color: red;
}
img {
  max-width: 400px;
  width: 100%;
  height: auto;
}
.likes {
  display: flex;
  justify-content: center;
  align-items: center;
}
.likes img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>