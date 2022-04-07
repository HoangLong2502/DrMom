<template>
    <div class="container w85">
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
            <router-link to="/customer/add">
              <button class="f aic pt075 pb075 pr1 pl1 border-radius white bg-brown">
                <svg width="14" height="15" viewBox="0 0 14 15" class="mr05">
                  <use xlink="http://www.w3.org/2000/svg" href="#more" x="0" y="0"></use>
                </svg>
                <h5>Thêm khách hàng</h5>
              </button>
            </router-link>
          </div>
        </div>
        <div class="container-body" style="width: 705px; margin: 20px auto">
          <h3 class="gray">
            <span>Tổng số lượng khách hàng </span>
            <span style="color: #FF8A00;">(30)</span>
          </h3>
          <router-link :to="{ name: 'customerdetail', params: { id: item.id} }" v-for="item in data" :key="item">
            <div class="card w100 mt1 border-radius bg-white-1">
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
          </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { 
                id: "2502",
                name: "Lê Bá Hoàng Long",
                note: "Gọi điện cho khách",
                adress: "Mễ Trì Hà Nội"
                },
                { id: "0303",
                name: "Nguyễn Thị Bill",
                note: "Không có ghi chú nào",
                adress: "Tòa nhà ABC đường XYZ, Phường AAA, Quận BBB, Hà Nội"
                }
            ]
        }
    }
}
</script>

<style scoped>
.container {
  width: 85%;
  padding: 2em 7em; ;
}
</style>