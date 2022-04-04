<template>
  <div class="header f aic jcb w100 bg-white-1 border-bottom">
      <div class="header-left f aic">
          <div class="header-left__img pt1 pb1 pr15 pl15 border-right">
            <img src="../assets/Header/LogoDrMom.png" alt="">
          </div>
          <div class="header-left__text f aic pt1 pb1 pr15 pl15">
            <img src="../assets/Header/language.png" alt="">
            <p class="p-small blue ml1">Xem gian hàng</p>
          </div>
      </div>
      <div class="header-right f aic">
        <div class="header__noti mr15">
          <img src="../assets/Header/Bell.png" alt="">
        </div>
        <div class="header__info f fdc jcb mr1 h100 border-left border-right pt075 pb075 pl1 pr1 bg-gray-2">
          <div>
            <p class="p-small gray mb05">Số dư</p>
          </div>
          <div class="f jcb aic">
            <div class="border-radius align-c bg-brown white" style="width: 20px; height: 20px">
              <p7>Đ</p7>
            </div>
            <p class="p4 ml1 black">10,660,800</p>
          </div>
        </div>
        <div @click="handleLogin" class="header__account f aic mr4 cursor">
          <img src="../assets/Header/account_circle.png" class="mr1">
          <p4 class="black mr1">Nguyễn Văn Bill</p4>
          <img src="../assets/Header/Down.png" alt="">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      var login = document.querySelector('.auth');
      login.classList.toggle('active')
    }
  }
}
</script>

<style>
.header {
  height: 71px;
}
</style>