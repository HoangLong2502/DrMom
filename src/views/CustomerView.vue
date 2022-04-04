<template>
  <div class="Cus-container h100vh w100 bg-gray-2">
    <HeaderView></HeaderView>
    <div class="f">
      <SidebarView></SidebarView>
      <div class="container w85 pt1 pb1 pl4 pr4">
        <div class="container-header f aic mb2">
          <div class="h2 pr1 border-right">
            Khách hàng
          </div>
          <div class="h5 pr1 pl1 brown">
            Khách hàng
          </div>
        </div>
        <div class="container-nav f jcb">
          <input type="text" style="width: 417px" placeholder="Nhập họ tên, số điện thoại khách hàng">
          <div class="f">
            <button class="f aic pt075 pb075 pr1 pl1 mr1 border-radius white bg-black">
              <svg width="16" height="16" viewBox="0 0 16 16" class="mr05">
                <use xlink="http://www.w3.org/2000/svg" href="#user" x="0" y="0"></use>
              </svg>
              <h5>Chăm sóc khách hàng</h5>  
            </button>
            <button class="f aic pt075 pb075 pr1 pl1 border-radius white bg-brown">
              <svg width="14" height="15" viewBox="0 0 14 15" class="mr05">
                <use xlink="http://www.w3.org/2000/svg" href="#more" x="0" y="0"></use>
              </svg>
              <h5>Thêm khách hàng</h5>
            </button>
          </div>
        </div>
        <div class="container-body" style="width: 705px; margin: 20px auto">
          <h3 class="gray">Tổng số lượng khách hàng (30)</h3>
          <div v-for="item in data" :key="item" class="card w100 mt1 border-radius bg-white-1">
            <div class="f jcb aic border-bottom pt1 pb1 pr1 pl1">
              <div>
                <h3 class="brown">0123456789</h3>
                <h5 class="gray">nguyenthibillxinhgai@gmail.com</h5>
              </div>
              <div class="p4 blue">
                Xem chi tiết
              </div>
            </div>
            <div class="f fdc mb1 pt1 pr1 pl1">
              <div class="f jcb aic mb1">
                <h6 class="gray">Tên khách hàng</h6>
                <p4 class="black">{{item.name}}</p4>
              </div>
              <div class="f jcb aic mb1">
                <h6 class="gray">Ghi chú</h6>
                <p4 class="black">{{item.note}}</p4>
              </div>
              <div class="f jcb aic mb1">
                <h6 class="gray">Địa chỉ dặt hàng</h6>
                <p4 class="black">{{item.adress}}</p4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Login></Login>

    <div class="hide">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="user" d="M12 10.5C10.7188 10.5 10.5 10.4688 9.71875 10.7188C9.1875 10.9062 8.59375 11 8 11C7.375 11 6.78125 10.9062 6.25 10.7188C5.46875 10.4688 5.25 10.5 4 10.5C1.78125 10.5 0 12.3125 0 14.5V15C0 15.5625 0.4375 16 1 16H15C15.5312 16 16 15.5625 16 15V14.5C16 12.3125 14.1875 10.5 12 10.5ZM14.5 14.5H1.5C1.5 13.8438 1.75 13.2188 2.21875 12.75C2.6875 12.2812 3.3125 12 4 12C5.28125 12 5.28125 11.9688 5.75 12.1562C6.46875 12.375 7.21875 12.5 8 12.5C8.75 12.5 9.5 12.375 10.2188 12.1562C10.7188 11.9688 10.6875 12 12 12C13.375 12 14.5 13.125 14.5 14.5ZM8 10C10.75 10 13 7.78125 13 5C13 2.25 10.75 0 8 0C5.21875 0 3 2.25 3 5C3 7.78125 5.21875 10 8 10ZM8 1.5C9.90625 1.5 11.5 3.09375 11.5 5C11.5 6.9375 9.90625 8.5 8 8.5C6.0625 8.5 4.5 6.9375 4.5 5C4.5 3.09375 6.0625 1.5 8 1.5Z" fill="white"/>
      </svg>
      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="more" d="M10.5 7.3125C10.5 7.14844 10.3359 6.98438 10.1719 6.98438H7.76562V4.57812C7.76562 4.41406 7.60156 4.25 7.4375 4.25H6.5625C6.37109 4.25 6.23438 4.41406 6.23438 4.57812V6.98438H3.82812C3.63672 6.98438 3.5 7.14844 3.5 7.3125V8.1875C3.5 8.37891 3.63672 8.51562 3.82812 8.51562H6.23438V10.9219C6.23438 11.1133 6.37109 11.25 6.5625 11.25H7.4375C7.60156 11.25 7.76562 11.1133 7.76562 10.9219V8.51562H10.1719C10.3359 8.51562 10.5 8.37891 10.5 8.1875V7.3125ZM13.7812 7.75C13.7812 4.00391 10.7461 0.96875 7 0.96875C3.25391 0.96875 0.21875 4.00391 0.21875 7.75C0.21875 11.4961 3.25391 14.5312 7 14.5312C10.7461 14.5312 13.7812 11.4961 13.7812 7.75ZM12.4688 7.75C12.4688 10.7852 10.0078 13.2188 7 13.2188C3.96484 13.2188 1.53125 10.7852 1.53125 7.75C1.53125 4.74219 3.96484 2.28125 7 2.28125C10.0078 2.28125 12.4688 4.74219 12.4688 7.75Z" fill="white"/>
      </svg>
    </div>
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import SidebarView from '@/components/SidebarView.vue'
import Login from '@/components/LoginView.vue'

export default {
  components: {
    HeaderView,
    SidebarView,
    Login,
  },
  data() {
    return {
      data: [
        {
          name: "Lê Bá Hoàng Long",
          note: "Gọi điện cho khách",
          adress: "Mễ Trì Hà Nội"
        },
        {
          name: "Nguyễn Thị Bill",
          note: "Không có ghi chú nào",
          adress: "Tòa nhà ABC đường XYZ, Phường AAA, Quận BBB, Hà Nội"
        }
      ]
    }
  }
}
</script>

<style>
.card {
  box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16);
}

.active {
  display: flex;
}
</style>