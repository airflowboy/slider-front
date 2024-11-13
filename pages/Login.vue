<template>
    <a @click="loginWithKakao">
      <img src="../public/kakao_login.png">
    </a>
  </template>
  
  <script>
  export default {
    name: 'IndexPage',
    methods: {
      async kakaoInit() {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init('3572995636a2c74ddf7de8f17f0264da');
        }
      },
      async loginWithKakao() {
        try {
          await this.kakaoInit();
          await window.Kakao.Auth.authorize({
            redirectUri: `${window.location.origin}/kakao-callback`,
          });
        } catch (error) {
          console.error('Kakao 로그인 에러:', error);
        }
      }
    },
    mounted() {
      this.kakaoInit();
    }
  }
  </script> 