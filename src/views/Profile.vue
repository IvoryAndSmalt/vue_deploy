<template>
  <!-- Une template doit toujours n'avoir qu'une seule balise à la racine -->
  <div class="profile">
    <p>Bonjour, je suis la page {{ pageName }}</p>
    <div class="container">
        <form>
            <input placeholder="Lien de l'image" type="text" name="urlImage" id="urlImage" v-model="urlImage">
            <input placeholder="Titre de la publication" type="text" name="postTitle" id="postTitle" v-model="postTitle">
            <textarea name="description" id="description" cols="30" rows="10" placeholder="description" v-model="description"></textarea>
            <input @click="newPost" type="submit" value="Envoyer">
        </form>
    </div>
  </div>
</template>
    
<script>
import axios from "axios";

export default {
  //   mounted() {
  //     axios.get("http://api.lucasvandenberg.fr/v1/post", {
  //       headers: {
  //           "Access-Control-Allow-Origin": "*"
  //         }
  //       })
  //       .then(response => (this.posts = response.data.data));
  //   },
  data: function() {
    return {
      errorStatus: null,
      pageName: "Profil",
      urlImage: null,
      postTitle: null,
      description: null
    };
  },
  methods: {
    newPost: function(e) {
        e.preventDefault();
      axios.post("https://api.lucasvandenberg.fr/v1/post", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Accept": "application/json",
          "Content-type": "application/json"
        },
        url: this.urlImage,
        author_id: 12,
        title: this.postTitle,
        description: this.description,
        likes: 0
      });
    }
  },
  name: "profile"
};
</script>

<style lang="scss" scoped>
body * {
  color: red;
}
img {
  max-width: 400px;
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