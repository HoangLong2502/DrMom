<template>
    <div class="container f fdc">
        <div class="container-header f aic mb2">
          <div class="h2 pr1 border-right">
            Quà tặng
          </div>
          <div class="h5 pr1 pl1 brown">
            Quà tặng
          </div>
        </div>
        <div class="container-nav relative f jcb mb2">
            <svg class="absolute" style="top: 33%; left: 0.8%" width="14" height="15" viewBox="0 0 14 15">
                <use xlink="http://www.w3.org/2000/svg" href="#search" x="0" y="0"></use>
            </svg>
          <input class="pl2" type="text" style="width: 417px" placeholder="Nhập tên quà tặng">
          <div class="f">
            <router-link to="/customer/add">
              <button class="f aic pt075 pb075 pr1 pl1 border-radius white bg-brown">
                <svg width="14" height="15" viewBox="0 0 14 15" class="mr05">
                  <use xlink="http://www.w3.org/2000/svg" href="#more" x="0" y="0"></use>
                </svg>
                <h5>Thêm quà tặng</h5>
              </button>
            </router-link>
          </div>
        </div>
        <div class="body w100 f jcc aic">
            <div class="body__content">
                <div class="content__select f aic mb2">
                    <div class="mr05" v-for="item in select" :key="item">
                        <div @click="handleFilter" class="select__item cursor pt05 pb05 pl075 pr075 h7 border-radius bg-brown-1 brown">
                            {{item.type}}
                        </div>
                    </div>
                </div>
                <div class="content__header f aic mb1">
                    <p3 class="gray mr025">Tổng số lượng quà tặng</p3>
                    <p3 class="red">(3)</p3>
                </div>
                <div class="content__list">
                     <CardView :titleSelect="selectTitle" />
                </div>
            </div>
        </div>

        <div class="hide">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="more" d="M10.5 7.3125C10.5 7.14844 10.3359 6.98438 10.1719 6.98438H7.76562V4.57812C7.76562 4.41406 7.60156 4.25 7.4375 4.25H6.5625C6.37109 4.25 6.23438 4.41406 6.23438 4.57812V6.98438H3.82812C3.63672 6.98438 3.5 7.14844 3.5 7.3125V8.1875C3.5 8.37891 3.63672 8.51562 3.82812 8.51562H6.23438V10.9219C6.23438 11.1133 6.37109 11.25 6.5625 11.25H7.4375C7.60156 11.25 7.76562 11.1133 7.76562 10.9219V8.51562H10.1719C10.3359 8.51562 10.5 8.37891 10.5 8.1875V7.3125ZM13.7812 7.75C13.7812 4.00391 10.7461 0.96875 7 0.96875C3.25391 0.96875 0.21875 4.00391 0.21875 7.75C0.21875 11.4961 3.25391 14.5312 7 14.5312C10.7461 14.5312 13.7812 11.4961 13.7812 7.75ZM12.4688 7.75C12.4688 10.7852 10.0078 13.2188 7 13.2188C3.96484 13.2188 1.53125 10.7852 1.53125 7.75C1.53125 4.74219 3.96484 2.28125 7 2.28125C10.0078 2.28125 12.4688 4.74219 12.4688 7.75Z" fill="white"/>
            </svg>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="search" d="M13.8906 13.5742C14.0547 13.7201 14.0547 13.875 13.8906 14.0391L13.2891 14.6406C13.125 14.8047 12.9701 14.8047 12.8242 14.6406L9.51562 11.332C9.44271 11.2591 9.40625 11.1862 9.40625 11.1133V10.7305C8.33073 11.6602 7.09115 12.125 5.6875 12.125C4.11979 12.125 2.77995 11.569 1.66797 10.457C0.55599 9.34505 0 8.00521 0 6.4375C0 4.86979 0.55599 3.52995 1.66797 2.41797C2.77995 1.30599 4.11979 0.75 5.6875 0.75C7.25521 0.75 8.59505 1.30599 9.70703 2.41797C10.819 3.52995 11.375 4.86979 11.375 6.4375C11.375 7.84115 10.9102 9.08073 9.98047 10.1562H10.3633C10.4544 10.1562 10.5273 10.1927 10.582 10.2656L13.8906 13.5742ZM2.59766 9.52734C3.45443 10.3841 4.48438 10.8125 5.6875 10.8125C6.89062 10.8125 7.92057 10.3841 8.77734 9.52734C9.63411 8.67057 10.0625 7.64062 10.0625 6.4375C10.0625 5.23438 9.63411 4.20443 8.77734 3.34766C7.92057 2.49089 6.89062 2.0625 5.6875 2.0625C4.48438 2.0625 3.45443 2.49089 2.59766 3.34766C1.74089 4.20443 1.3125 5.23438 1.3125 6.4375C1.3125 7.64062 1.74089 8.67057 2.59766 9.52734Z" fill="#6F382B"/>
            </svg>

        </div>
  </div>
</template>

<script>
import CardView from '@/components/CardView/CardView.vue'

export default {
    components: {
        CardView
    },
    data() {
        return {
            select: [
                {type: "Tất cả"},
                {type: "Đang chạy"},
                {type: "Chưa chạy"},
                {type: "Đã dừng"}
            ],
            selectTitle : '',
        }
    },
    methods: {
      handleFilter(event) {
            var select = document.getElementsByClassName('select');
            for(let i = 0; i < select.length; i++) {
              select[i].classList.remove('select')
            }
            var button = event.target;
            button.classList.add('select');
            console.log(button.innerText);
            this.selectTitle = button.innerText;

      }
    },
    created() {
      setTimeout(() => {
        var button = document.getElementsByClassName('select__item')[0];
        console.log(button)
        button.classList.add('select')
      }, 100)
    }
}
</script>

<style scoped lang="scss">
@import "Gift.scss";
</style>