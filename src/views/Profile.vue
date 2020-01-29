<template>
  <!-- Une template doit toujours n'avoir qu'une seule balise à la racine -->
  <div class="profile">
    <div class="container">
      <h1 class="text-center" id="fullname">{{ profile_data.first }} {{ profile_data.last }}</h1>
      <div class="image center">
        <img
          class="round"
          :src="profile_data.pfp"
          :alt="'photo'+' '+profile_data.first+' '+profile_data.last"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    fetch(`https://api.lucasvandenberg.fr/v1/user/8`, {
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
        this.profile_data.id = myJson.data.id;
        this.profile_data.first = myJson.data.first;
        this.profile_data.last = myJson.data.last;
        this.profile_data.bio = myJson.data.bio;
        this.profile_data.pfp = myJson.data.pfp_url;
        this.profile_data.site = myJson.data.site_url;
      });
  },
  data: function() {
    return {
      pageName: "Profil",
      profile_data: {}
    };
  },
  methods: {
    updateProfile: function(field, value) {
      return field, value;
    }
  },
  name: "profile"
};
</script>

<style lang="scss" scoped>


</style>