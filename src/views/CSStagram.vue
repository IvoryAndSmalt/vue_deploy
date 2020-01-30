<template>
  <div class="csstagram">
    <p class="mb-1">Bienvenue à l'accueil.</p>
    <hr class="mb-5" />
    <div class="container cancel">
      <div v-for="post in posts" :key="post.id" class="post">
        <h2>{{ post.titre }}</h2>
        <img :src="post.url" :alt="post.alt" />
        <div class="likes">
          <img :src="testlike(post.id)" alt="Coeur" @click="liker(post.id)" />
          <p v-if="post.likes <= 1000">{{ post.likes }} Likes</p>
          <p v-else>+ de 1000 personnes</p>
        </div>
      </div>
      <hr class="mt-5"/>
      <p id="next" @click="suivant">Suivant</p>
    </div>
  </div>
</template>
<script>

export default {
  mounted() {
    this.loadposts();
    // this.loadlikes();
  },
  data: function() {
    return {
      page: 1,
      posts: null,
      errorStatus: null,
      pageName: "home",
      likes: [
        1,
        2,
        4,
        5
      ]
    };
  },
  methods: {
    testlike(post){
      if(this.likes.includes(post)){
        return "./img/icons/heart_filled.png"
      }
      else{
        return "./img/icons/heart_empty.png"
      }
    },
    loadposts: function() {
      fetch(`https://api.lucasvandenberg.fr/v1/post?page=${this.page}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          this.posts = myJson.data;
        });
    },
    liker: function(id) {
      if(!this.likes.includes(id)){
        // Inclure la requête à l'API pour ajouter le like
        this.likes.push(id);
        this.posts[id].likes++
      }
      else{
        this.likes.splice( this.likes.indexOf(id), 1 );
        this.posts[id].likes--
      }
    },
    suivant: function() {
      this.page++;
      this.loadposts();
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  },
  name: "home"
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
}
.likes {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    transition: all 0.25s ease-in-out;
  }
}

.post {
  transition: all 0.25s ease-in-out;
}

#next{
  font-weight: 600;
}

</style>