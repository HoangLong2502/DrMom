<template>
  <div class="auth f aic jcc w100 h100vh">
      <div class="login relative pt1 pb1 pl1 pr1 border-radius bg-white-1">
        <svg @click="handleClose" class="absolute cursor" style="top: 2em; right: 1em" viewBox="0 0 18 16" width="18" height="16">
            <use xlink="http://www.w3.org/2000/svg" href="#close" x="0" y="0"></use>
        </svg>
          <div class="title h4 w100 align-c mb1">Đăng nhập</div>
          <form action="">
              <div class="f fdc mb1">
                  <label class="h7 mb05" for="">Số điện thoại</label>
                  <input class="h6" type="text" placeholder="Nhập số điện thoại vào đây">
              </div>
              <div class="f fdc mb1">
                  <label class="h7 mb05" for="">Mật khẩu</label>
                  <input class="h6" type="password" placeholder="Nhập mật khẩu vào đây">
              </div>
              <div class="f jcb aic mb1">
                  <div class="f aic">
                      <input type="checkbox" name="" id="">
                      <p>Nhớ tài khoản</p>
                  </div>
                  <div style="text-decoration-line:underline">
                      <p>Quên mật khẩu</p>
                  </div>
              </div>
              <button class="w100 h5 pt075 pb075 align-c border-radius bg-brown white">Đăng nhập</button>
          </form>
          <div class="w100 align-c mt15">
              <span class="gray h5">Chưa có tài khoản?</span>
              <span @click="handleRegister" class="cursor blue h5">Đăng ký ngay</span>
          </div>
      </div>

      <div class="register relative fdc pt1 pb1 pl1 pr1 border-radius bg-white-1">
         <svg @click="handleClose" class="absolute cursor" style="top: 2em; right: 1em" viewBox="0 0 18 16" width="18" height="16">
            <use xlink="http://www.w3.org/2000/svg" href="#close" x="0" y="0"></use>
        </svg>
        <div class="title h4 w100 align-c mb1">Đăng ký</div>
          <form action="">
              <div class="f fdc mb1">
                  <label class="h7 mb05" for="">Số điện thoại</label>
                  <input class="h6" type="text" placeholder="Nhập số điện thoại vào đây">
              </div>
              <div class="f fdc mb1">
                  <label class="h7 mb05" for="">Mật khẩu</label>
                  <input class="h6" type="password" placeholder="Nhập mật khẩu vào đây">
              </div>
              <div class="f fdc mb1">
                  <label class="h7 mb05" for="">Xác nhận lại mật khẩu</label>
                  <input class="h6" type="password" placeholder="Nhập lại mật khẩu">
              </div>
              <button class="w100 h5 pt075 pb075 align-c border-radius bg-brown white">Đăng ký</button>
          </form>
          <div class="mt1 align-c pl05 pr05">
              Bằng việc chọn "Đăng ký", bạn đồng ý với các <a class="blue" href="">Điều khoản và Điều kiện</a>của chúng tôi
          </div>
          <div class="w100 align-c mt15">
              <span class="gray h5">Đã có tài khoản?</span>
              <span @click="handleLogin" class="cursor blue h5">Đăng nhập ngay</span>
          </div>
      </div>

      <div class="hide">
        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="close" d="M5.78516 4.75L8.73828 1.82422C8.90234 1.66016 8.90234 1.35938 8.73828 1.19531L8.05469 0.511719C7.89062 0.347656 7.58984 0.347656 7.42578 0.511719L4.5 3.46484L1.54688 0.511719C1.38281 0.347656 1.08203 0.347656 0.917969 0.511719L0.234375 1.19531C0.0703125 1.35938 0.0703125 1.66016 0.234375 1.82422L3.1875 4.75L0.234375 7.70312C0.0703125 7.86719 0.0703125 8.16797 0.234375 8.33203L0.917969 9.01562C1.08203 9.17969 1.38281 9.17969 1.54688 9.01562L4.5 6.0625L7.42578 9.01562C7.58984 9.17969 7.89062 9.17969 8.05469 9.01562L8.73828 8.33203C8.90234 8.16797 8.90234 7.86719 8.73828 7.70312L5.78516 4.75Z" fill="#757575"/>
        </svg>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        handleClose() {
            var auth = document.querySelector('.auth');
            auth.classList.remove('active')
        },
        handleRegister() {
            var login = document.querySelector('.login');
            login.classList.add('visible');
            var register = document.querySelector('.register');
            register.classList.add('active')
        },
        handleLogin() {
            var login = document.querySelector('.login');
            login.classList.remove('visible');
            var register = document.querySelector('.register');
            register.classList.remove('active')
        },
    }
}
</script>

<style>
.auth {
    position: fixed;
    top: 0;
    left: 0;
    display: none;
   background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(20px);
}

.login {
    width: 378px;
}

.register{
    width: 378px;
    display: none;
}

.visible {
    display: none !important;
}
</style>