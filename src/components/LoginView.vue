<template>
  <div class="auth f aic jcc w100 h100vh">
      <div class="login relative f fdc jcb pt2 pb1 pl1 pr1 border-radius bg-white-1">
        <div>
            <svg @click="handleClose" class="absolute cursor" style="top: 2em; right: 1em" viewBox="0 0 18 16" width="18" height="16">
                <use xlink="http://www.w3.org/2000/svg" href="#close" x="0" y="0"></use>
            </svg>
            <div class="align-c mt2 mb2">
                <img src="../assets/LogoDrMom.png" alt="">
            </div>
            <div class="title h2 w100 mb1">Đăng nhập</div>
            <form action="">
                <div class="f fdc mb1">
                    <label class="h7 mb05" for="">Số điện thoại</label>
                    <input class="h6" type="text" placeholder="Nhập số điện thoại vào đây">
                </div>
                <div class="f fdc mb1">
                    <label class="h7 mb05" for="">Mật khẩu</label>
                    <input class="h6" type="password" placeholder="Nhập mật khẩu vào đây">
                </div>
                <div class="f jcb aic mb4">
                    <div class="f aic">
                        <input type="checkbox" name="" id="">
                        <p class="ml05 h6">Nhớ tài khoản</p>
                    </div>
                    <div class="cursor" style="text-decoration-line:underline" @click="handleForgot">
                        <p class="h6 gray">Quên mật khẩu</p>
                    </div>
                </div>
                <button class="w100 h5 pt075 pb075 align-c border-radius bg-brown white" style="margin-top: 3em  ">Đăng nhập</button>
            </form>
        </div>
          <div class="w100 align-c mt15">
              <span class="gray h5">Chưa có tài khoản?</span>
              <span @click="handleRegister" class="cursor blue h5">Đăng ký ngay</span>
          </div>
      </div>

      <div class="register relative f fdc jcb pt2 pb1 pl1 pr1 border-radius bg-white-1">
        <div>
            <svg @click="handleClose" class="absolute cursor" style="top: 2em; right: 1em" viewBox="0 0 18 16" width="18" height="16">
                <use xlink="http://www.w3.org/2000/svg" href="#close" x="0" y="0"></use>
            </svg>
            <div class="align-c mt2 mb2">
                <img src="../assets/LogoDrMom.png" alt="">
            </div>
            <div class="title h2 w100 mb1">Đăng ký</div>
            <form action="">
                <div class="f fdc mb1">
                    <label class="h7 mb05" for="">Số điện thoại</label>
                    <input class="h6" type="text" placeholder="Nhập số điện thoại vào đây">
                </div>
                <div class="f fdc mb1">
                    <label class="h7 mb05" for="">Mật khẩu</label>
                    <input class="h6" type="password" placeholder="Nhập mật khẩu vào đây">
                </div>
                <div class="f fdc mb4">
                    <label class="h7 mb05" for="">Xác nhận lại mật khẩu</label>
                    <input class="h6" type="password" placeholder="Nhập lại mật khẩu">
                </div>
                <button class="w100 h5 pt075 pb075 align-c border-radius bg-brown white">Đăng ký</button>
            </form>
        </div>
          <div class="mt1 align-c pl05 pr05">
              Bằng việc chọn "Đăng ký", bạn đồng ý với các <a class="blue" href="">Điều khoản và Điều kiện</a>của chúng tôi
          </div>
          <div class="w100 align-c mt15">
              <span class="gray h5">Đã có tài khoản?</span>
              <span @click="handleLogin" class="cursor blue h5">Đăng nhập ngay</span>
          </div>
      </div>

      <div class="forgot-password relative f fdc pt2 pb1 border-radius bg-white-1">
            <svg @click="handleClose" class="absolute cursor" style="top: 2em; right: 1em" viewBox="0 0 18 16" width="18" height="16">
                <use xlink="http://www.w3.org/2000/svg" href="#close" x="0" y="0"></use>
            </svg>
            <div class="align-c pl1 pr1 mt2 mb15 border-bottom">
                <img class="mb2" src="../assets/LogoDrMom.png" alt="">
                <div @click="handleBack" class="f aic mb05 align-l cursor">
                    <svg class="mr025" viewBox="0 0 7 10" width="7" height="10">
                        <use xlink="http://www.w3.org/2000/svg" href="#back" x="0" y="0"></use>
                    </svg>
                    <p4 class="blue">Quay lại</p4>
                </div>
            </div>
            <div class="pl1 pr1">
                <h2 class="mb15 ">Quên mật khẩu</h2>
                <div class="step relative f jcb aic mb2">
                    <div class="step-line"></div>
                    <div class="f fdc aic" style="height: 100px">
                        <div class="step-circle step-control f jcc aic h3 mb05 border bg-white-1">1</div>
                        <div class="step-title brown">Xác thực <br> thông tin</div>
                    </div>
                    <div class="f fdc aic" style="height: 100px">
                        <div class="step-circle f jcc aic h3 mb05 border bg-white-1">2</div>
                        <div class="step-title">Tạo mật khẩu mới</div>
                    </div>
                    <div class="f fdc aic" style="height: 100px">
                        <div class="step-circle f jcc aic h3 mb05 border bg-white-1">3</div>
                        <div class="step-title">Hoàn thành</div>
                    </div>
                </div>
                <form class="auth-info" action="">
                    <div class="f fdc mb1">
                        <label class="h7 mb05" for="">Số điện thoại</label>
                        <input class="h6" type="text" placeholder="Nhập số điện thoại của bạn">
                    </div>
                    <div class="f fdc mb2">
                        <label class="h7 mb05" for="">Mã OTP</label>
                        <input class="h6" type="type" placeholder="Nhập mã OTP đã gửi về số điện thoại của bạn">
                    </div>
                    <button class="w100 h5 pt075 pb075 align-c border-radius bg-brown white" @click="handleToNewPassword">Xác nhận mã OTP</button>
                </form>
                <form class="new-password hide" action="">
                    <div class="f fdc mb1">
                        <label class="h7 mb05" for="">Mật khẩu mới</label>
                        <input class="h6" type="text" placeholder="Nhập mật khẩu mới của bạn">
                    </div>
                    <div class="f fdc mb2">
                        <label class="h7 mb05" for="">Xác nhận mật khẩu mới của bản</label>
                        <input class="h6" type="password" placeholder="Nhập mật khẩu vào đây">
                    </div>
                    <button class="w100 h5 pt075 pb075 align-c border-radius bg-brown white" @click="handleToComplate">Tạo mật khẩu mới</button>
                </form>
                <div class="complate hide">
                    <div class="f fdc aic">
                        <img class="mb1" src="../assets/complate.png" alt="">
                        <h2 class="mb2 align-c gray">Quý khách đã tạo mật khẩu<br>mới thành công! </h2>
                        <button class="w100 h5 pt075 pb075 align-c border-radius bg-brown white">Xác nhận mã OTP</button>
                    </div> 
                </div>
            </div>
      </div>

      <div class="hide">
        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="close" d="M5.78516 4.75L8.73828 1.82422C8.90234 1.66016 8.90234 1.35938 8.73828 1.19531L8.05469 0.511719C7.89062 0.347656 7.58984 0.347656 7.42578 0.511719L4.5 3.46484L1.54688 0.511719C1.38281 0.347656 1.08203 0.347656 0.917969 0.511719L0.234375 1.19531C0.0703125 1.35938 0.0703125 1.66016 0.234375 1.82422L3.1875 4.75L0.234375 7.70312C0.0703125 7.86719 0.0703125 8.16797 0.234375 8.33203L0.917969 9.01562C1.08203 9.17969 1.38281 9.17969 1.54688 9.01562L4.5 6.0625L7.42578 9.01562C7.58984 9.17969 7.89062 9.17969 8.05469 9.01562L8.73828 8.33203C8.90234 8.16797 8.90234 7.86719 8.73828 7.70312L5.78516 4.75Z" fill="#757575"/>
        </svg>
        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="back" d="M1.13672 4.53125L5.15625 0.484375C5.32031 0.320312 5.47526 0.320312 5.62109 0.484375L6.16797 1.00391C6.3138 1.16797 6.3138 1.32292 6.16797 1.46875L2.91406 4.75L6.16797 8.03125C6.3138 8.17708 6.3138 8.33203 6.16797 8.49609L5.62109 9.01562C5.47526 9.17969 5.32031 9.17969 5.15625 9.01562L1.13672 4.96875C0.990885 4.82292 0.990885 4.67708 1.13672 4.53125Z" fill="#2577C9"/>
        </svg>

      </div>
  </div>
</template>

<script>
export default {
    methods: {
        handleClose() {
            document.querySelector('.auth').classList.remove('active');
            this.handleLogin();
            var forgot = document.querySelector('.forgot-password');
            forgot.classList.remove('active')
            this.handleBack();
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
        handleForgot() {
            var login = document.querySelector('.login');
            login.classList.add('visible');
            var register = document.querySelector('.forgot-password');
            register.classList.add('active')
        },
        handleBack() {
            var login = document.querySelector('.login');
            login.classList.remove('visible');
            var register = document.querySelector('.forgot-password');
            register.classList.remove('active');
            var hide = document.querySelector('.new-password');
            hide.classList.add('hide')
            var hide1 = document.querySelector('.complate');
            hide1.classList.add('hide');
            var visible = document.querySelector('.auth-info');
            console.log(visible)
            visible.classList.remove('hide');
            var circle1 = document.querySelectorAll('.step-circle')[1];
            circle1.classList.remove('step-control')
            var title1 = document.querySelectorAll('.step-title')[1];
            title1.classList.remove('brown')
            var circle2 = document.querySelectorAll('.step-circle')[2];
            circle2.classList.remove('step-control')
            var title2 = document.querySelectorAll('.step-title')[2];
            title2.classList.remove('brown')
            var circle = document.querySelectorAll('.step-circle')[0];
            circle.classList.add('step-control')
            var title = document.querySelectorAll('.step-title')[0];
            title.classList.add('brown')
        },
        handleToNewPassword(evt) {
            evt.preventDefault()
            var hide = document.querySelector('.auth-info');
            hide.classList.add('hide')
            var visible = document.querySelector('.new-password');
            visible.classList.remove('hide')
            var circle1 = document.querySelectorAll('.step-circle')[0];
            circle1.classList.remove('step-control')
            var title1 = document.querySelectorAll('.step-title')[0];
            title1.classList.remove('brown')
            var circle = document.querySelectorAll('.step-circle')[1];
            circle.classList.add('step-control')
            var title = document.querySelectorAll('.step-title')[1];
            title.classList.add('brown')
        },
        handleToComplate(evt) {
            evt.preventDefault()
            var hide = document.querySelector('.new-password');
            hide.classList.add('hide')
            var visible = document.querySelector('.complate');
            visible.classList.remove('hide');
            var circle1 = document.querySelectorAll('.step-circle')[1];
            circle1.classList.remove('step-control')
            var title1 = document.querySelectorAll('.step-title')[1];
            title1.classList.remove('brown')
            var circle = document.querySelectorAll('.step-circle')[2];
            circle.classList.add('step-control')
            var title = document.querySelectorAll('.step-title')[2];
            title.classList.add('brown')
        }
    },
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
    height: 678px;
}

.register{
    width: 378px;
    height: 678px; 
    display: none;
}

.forgot-password {
    width: 378px;
    height: 678px; 
    display: none;
}

.visible {
    display: none !important;
}

.step-circle {
    width: 48px;
    height: 48px;
    border-radius: 100px;
    border: 1px solid #D9DDE8;
    z-index: 0;
}

.step-line {
    position: absolute;
    top: 25%;
    left: 50px;
    width: 272px;
    height: 1px;
    background: #D9DDE8;

}

.step-control {
    background-color: #6F382B;
    color: white;
}

input {
    padding: 0.75em;
    
}

::placeholder {
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
}
</style>