<template>
    <div class="w85 pt2 mb2">
        <div class="f aic ml2 mb2">
            <div class="pr1 h2 border-right">Khách hàng</div>
            <div class="p5 pr05 pl1 gray">Khách hàng</div>
            <div class="f aic">
                <svg width="8" height="12" viewBox="0 0 8 12" class="mr05">
                    <use xlink="http://www.w3.org/2000/svg" href="#next" x="0" y="0"></use>
                </svg>
                <h5 class="brown pl05">Thêm mới khách hàng</h5>
            </div>
        </div>
        <div class="container jcc pt1 pb1 pr1 pl1 bg-white-1">
            <div class="container__header mb1">
                <h4 class="brown">Thêm mới khách hàng</h4>
            </div>
            <form class="form f fdc w100" action="">
                <div class="info-basic w100 mb1">
                    <div class="form__label h4 mb1">Thông tin cơ bản</div>
                    <div class="f fdc ais mb1">
                        <label class="h7 mb025" for="">Tên khách hàng</label>
                        <input class="w100 pt075 pb075 pr075 pl075" type="text" placeholder="Nhập vào đây">
                    </div>
                    <div class="f jcb aic">
                        <div class="f fdc">
                            <label class="h7 mb025" for="">Email khách hàng</label>
                            <input class="pt075 pb075 pr075 pl075" type="text" placeholder="Nhập vào đây">
                        </div>
                        <div class="f fdc">
                            <label class="h7 mb025" for="">Số điện thoại khách hàng</label>
                            <input class="pt075 pb075 pr075 pl075" type="text" placeholder="Nhập vào đây">
                        </div>
                    </div>
                </div>
                <div class="info-address mb1">
                    <h5 class="mb1">Địa chỉ khách hàng</h5>
                    <div class="f fdc aic mb1">
                        <div class="w100 f jcb aic mb05">
                            <label class="h7" for="">Địa chỉ 1</label>
                            <div class="f aic">
                                <h7 class="mr05">Mặc định</h7>
                                <input type="radio">
                            </div>
                        </div>
                        <input class="w100 pt075 pb075 pr075 pl075" type="text" placeholder="Nhập địa chỉ">
                    </div>
                    <div class="f fdc aic">
                        <div class="f jcb aic w100 mb05">
                            <label class="h7" for="">Địa chỉ 2</label>
                            <h7 class="blue cursor">Đặt địa chỉ này làm mặc định</h7>
                        </div>
                        <input class="w100 pt075 pb075 pr075 pl075" type="text" placeholder="Nhập địa chỉ">
                    </div>
                </div>
                <div class="info-social mb1">
                    <h5 class="mb1">Mạng xã hội</h5>
                    <div class="f jcb aic mb1">
                        <img class="mr1" src="../../../assets/AddCustomerPNG/facebook.png" alt="">
                        <input class="w90" type="text" placeholder="Nhập địa chỉ Facebook của khách hàng">
                    </div>
                    <div class="f jcb aic">
                        <img class="mr1" src="../../../assets/AddCustomerPNG/zalo.png" alt="">
                        <input class="w90" type="text" placeholder="Nhập địa chỉ Facebook của khách hàng">
                    </div>
                </div>
                <div class="info-note f fdc mb1">
                    <h7 class="mb05">Ghi chú</h7>
                    <textarea class="border h6 pt075 pb075 pr075 pl075 border-radius" name="" id="" cols="30" rows="10" placeholder="Nhập ghi chú"></textarea>
                </div>
                <div class="info-related mb1">
                    <div class="info-related__header w100 f jcb aic mb1">
                        <h5>Thông tin người liên quan</h5>
                        <div class="f aic">
                            <svg width="14" height="15" viewBox="0 0 14 15" class="mr05 blue">
                                <use xlink="http://www.w3.org/2000/svg" href="#more" x="0" y="0"></use>
                            </svg>
                            <h5 class="blue">Thêm thông tin</h5>
                        </div>
                    </div>
                    <div class="info-related__list mb1">
                        <div class="info-related__item f jcb aic">
                            <div>
                                <p4 class="mb025">
                                    <span class="brown mr05">Nguyễn Văn A</span>
                                    <span class="gray">(Bố/con)</span>
                                </p4>
                                <h6 class="gray">
                                    0123456789
                                </h6>
                            </div>
                            <div class="f aic">
                                <svg width="18" height="15" viewBox="0 0 19 17" class="mr05">
                                    <use xlink="http://www.w3.org/2000/svg" href="#note" x="0" y="0"></use>
                                </svg>
                                <svg width="14" height="15" viewBox="0 0 14 16" class="mr05">
                                    <use xlink="http://www.w3.org/2000/svg" href="#bin" x="0" y="0"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="info-medical">
                        <h5 class="mb1">Hồ sơ bệnh lý</h5>
                        <div class="medical__img mb1">
                            <h7>Ảnh bệnh lý</h7>
                            <div class="w100 f mt05 aic pt1 pb1 pl1 pr1 border-radius bg-gray-2" style="border: 1px dashed #D9DDE8;">
                                <div class="h7 pt05 pb05 pr1 pl1 mr1 border-radius" style="border: 1px solid #D9DDE8;">
                                    Tải ảnh lên
                                </div>
                                <div>
                                    <p4>Bạn có thể thêm nhiều ảnh cùng lúc(tối đa: 10 ảnh)</p4>
                                    <h6 class="gray">Dung lượng ảnh tối đa: 2MB</h6>
                                </div>
                            </div>
                        </div>
                        <div class="medical__text w100 f fdc ais">
                            <h7 class="mb05">Bổ sung hồ sơ</h7>
                            <textarea class="border border-radius w100 h7 pt075 pb 075 pr075 pl075" name="" id="" cols="30" rows="10" placeholder="Giúp bạn chăm sóc khách hàng tốt hơn"></textarea>
                        </div>
                    </div>
                </div>
                <div class="f jce">
                    <button class="pt075 pb075 pl1 pr1 mr1 border-radius brown" style="border: 1px solid #6F382B">Hủy bỏ</button>
                    <button class="pt075 pb075 pl1 pr1 border-radius white bg-brown">Thêm mới</button>
                </div>
            </form>
        </div>

        <div class="hide">
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="next" d="M6.90625 6.25L2.3125 10.875C2.125 11.0625 1.94792 11.0625 1.78125 10.875L1.15625 10.2812C0.989583 10.0938 0.989583 9.91667 1.15625 9.75L4.875 6L1.15625 2.25C0.989583 2.08333 0.989583 1.90625 1.15625 1.71875L1.78125 1.125C1.94792 0.9375 2.125 0.9375 2.3125 1.125L6.90625 5.75C7.07292 5.91667 7.07292 6.08333 6.90625 6.25Z" fill="#BABABA"/>
            </svg>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="bin" d="M8.375 13H9.125C9.3125 13 9.5 12.8438 9.5 12.625V5.875C9.5 5.6875 9.3125 5.5 9.125 5.5H8.375C8.15625 5.5 8 5.6875 8 5.875V12.625C8 12.8438 8.15625 13 8.375 13ZM13.5 2.5H10.9062L9.84375 0.75C9.59375 0.3125 9.09375 0 8.5625 0H5.40625C4.875 0 4.375 0.3125 4.125 0.75L3.0625 2.5H0.5C0.21875 2.5 0 2.75 0 3V3.5C0 3.78125 0.21875 4 0.5 4H1V14.5C1 15.3438 1.65625 16 2.5 16H11.5C12.3125 16 13 15.3438 13 14.5V4H13.5C13.75 4 14 3.78125 14 3.5V3C14 2.75 13.75 2.5 13.5 2.5ZM5.34375 1.59375C5.375 1.5625 5.4375 1.5 5.5 1.5C5.5 1.5 5.5 1.5 5.53125 1.5H8.46875C8.53125 1.5 8.59375 1.5625 8.625 1.59375L9.15625 2.5H4.8125L5.34375 1.59375ZM11.5 14.5H2.5V4H11.5V14.5ZM4.875 13H5.625C5.8125 13 6 12.8438 6 12.625V5.875C6 5.6875 5.8125 5.5 5.625 5.5H4.875C4.65625 5.5 4.5 5.6875 4.5 5.875V12.625C4.5 12.8438 4.65625 13 4.875 13Z" fill="#1A1A1A"/>
            </svg>
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="note" d="M12.5625 11.7812C12.5 11.8438 12.5 11.9062 12.5 11.9688V15.5H1.5V4.5H9.03125C9.09375 4.5 9.15625 4.5 9.21875 4.4375L10.2188 3.4375C10.375 3.28125 10.25 3 10.0312 3H1.5C0.65625 3 0 3.6875 0 4.5V15.5C0 16.3438 0.65625 17 1.5 17H12.5C13.3125 17 14 16.3438 14 15.5V10.9688C14 10.75 13.7188 10.625 13.5625 10.7812L12.5625 11.7812ZM17.4375 5.5C18.1562 4.78125 18.1562 3.625 17.4375 2.90625L16.0938 1.5625C15.375 0.84375 14.2188 0.84375 13.5 1.5625L5.3125 9.75L5 12.5938C4.90625 13.4062 5.59375 14.0938 6.40625 14L9.25 13.6875L17.4375 5.5ZM14.375 6.4375L8.5625 12.25L6.5 12.5L6.75 10.4375L12.5625 4.625L14.375 6.4375ZM16.375 3.96875C16.5312 4.09375 16.5312 4.28125 16.4062 4.4375L15.4375 5.40625L13.625 3.5625L14.5625 2.625C14.6875 2.46875 14.9062 2.46875 15.0312 2.625L16.375 3.96875Z" fill="#1A1A1A"/>
            </svg>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="more" d="M10.5 7.3125C10.5 7.14844 10.3359 6.98438 10.1719 6.98438H7.76562V4.57812C7.76562 4.41406 7.60156 4.25 7.4375 4.25H6.5625C6.37109 4.25 6.23438 4.41406 6.23438 4.57812V6.98438H3.82812C3.63672 6.98438 3.5 7.14844 3.5 7.3125V8.1875C3.5 8.37891 3.63672 8.51562 3.82812 8.51562H6.23438V10.9219C6.23438 11.1133 6.37109 11.25 6.5625 11.25H7.4375C7.60156 11.25 7.76562 11.1133 7.76562 10.9219V8.51562H10.1719C10.3359 8.51562 10.5 8.37891 10.5 8.1875V7.3125ZM13.7812 7.75C13.7812 4.00391 10.7461 0.96875 7 0.96875C3.25391 0.96875 0.21875 4.00391 0.21875 7.75C0.21875 11.4961 3.25391 14.5312 7 14.5312C10.7461 14.5312 13.7812 11.4961 13.7812 7.75ZM12.4688 7.75C12.4688 10.7852 10.0078 13.2188 7 13.2188C3.96484 13.2188 1.53125 10.7852 1.53125 7.75C1.53125 4.74219 3.96484 2.28125 7 2.28125C10.0078 2.28125 12.4688 4.74219 12.4688 7.75Z" fill="#2577C9"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import 'AddCustomer';
</style>
