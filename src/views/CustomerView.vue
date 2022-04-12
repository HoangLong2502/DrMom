<template>
  <div class="Cus-container h100vh w100 bg-gray-2">
    <HeaderView></HeaderView>
    <div class="f">
      <SidebarView></SidebarView>
      <router-view/>
    </div>

    <Login></Login>
    <AddMedicalView></AddMedicalView>

    <div class="hide">
      
    </div>
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderView/HeaderView.vue'
import SidebarView from '@/components/SideBarView/SidebarView.vue'
import Login from '@/components/LoginView/LoginView.vue'
import AddMedicalView from "@/components/CustomerView/DetailCustomer/AddMedicalPopup/AddMedicalView.vue"

export default {
  components: {

    HeaderView,
    SidebarView,
    Login,
    AddMedicalView,

  },
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

<style>
.card {
  box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16);
}

.active {
  display: flex;
}
</style>