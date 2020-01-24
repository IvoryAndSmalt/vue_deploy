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

export default {
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
  },
  name: "profile"
};
</script>

<style lang="scss" scoped>

</style>