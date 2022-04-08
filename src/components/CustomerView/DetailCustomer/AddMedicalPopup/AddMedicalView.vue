<template>
        <div class="add-medical hide">
            <div class="add-medical__view f jcc aic w100 h100">
                <div class="add-medical__pop-up border-radius">
                    <div class="medical__text w100 f fdc ais mb1">
                        <h5 class="mb05 brown">Bổ sung hồ sơ</h5>
                        <textarea v-model="title" class="medical-title border border-radius w100 h7 pt075 pb 075 pr075 pl075" name="" id="" cols="30" rows="10" placeholder="Giúp bạn chăm sóc khách hàng tốt hơn"></textarea>
                    </div>
                    <div class="medical__img mb15">
                        <div class="w100 f mt05 aic pt1 pb1 pl1 pr1 border-radius bg-gray-2" style="border: 1px dashed #D9DDE8;">
                            <div class="h7 pt05 pb05 pr1 pl1 mr1 border-radius bg-white-1" style="border: 1px solid #D9DDE8;">
                                Tải ảnh lên
                            </div>
                            <div>
                                <p4>Bạn có thể thêm nhiều ảnh cùng lúc(tối đa: 10 ảnh)</p4>
                                <h6 class="gray">Dung lượng ảnh tối đa: 2MB</h6>
                            </div>
                        </div>
                    </div>
                    <div class="f jcc aic">
                        <button @click="handleClose" class="btn btn-close h5 border-radius mr1">Đóng</button>
                        <button @click="handleAdd" class="btn btn-add h5 border-radius">Thêm mới</button>
                    </div>
                </div>
            </div>
      </div>
</template>

<script>
export default {
    data() {
        return {
            title : []
        }
    },
    methods: {
        handleClose() {
            var close = document.getElementsByClassName('add-medical')[0];
            close.classList.add('hide')
        },
        handleAdd() {
            console.log(this.title)
            if(this.title < 1) {
                alert('Hãy bổ sung đầy đủ hồ sơ')
            }
            else {
                var close = document.getElementsByClassName('add-medical')[0];
                close.classList.add('hide')
            }
        }
    }
}
</script>

<style lang="scss">
@import "AddMedical.scss"
</style>