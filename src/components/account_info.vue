<template>
  <div>
     <div class="modal-wrap" v-if="isClicked">
    <div class="modal-box">
      <div class="modal-content">
        <div class="modal-context-m">
          <ul>
            <li>카카오뱅크 1234567890</li>
            <li>예금주: 정동현</li>
            </ul>
        </div>
        <div class="modal-context-w">
           <ul>
            <li>국민 1234567890</li>
            <li>예금주: 이지은</li>
            </ul>
          </div>
      </div>
      <div class="modal-button">
        <button class="btn-confirm" @click="closeModal">확인</button>
        <button class="btn-copy" >복사하기</button>
      </div>
    </div>
  </div>
        <!-- <modal v-if="isClicked" isClicked='isClicked'></modal> -->
    <div class="account-info">
      <p>마음 전하실 곳</p>
      <p>"신랑&신부에게 축하의 마음을 전해주세요"</p>
      <div class="modal">
        <div class="modal-box"></div>
      </div>
      <button class="acc-btn1" @click="handleModal">
        신랑측 계좌번호 보기
      </button>
      <button class="acc-btn2" @click="handleModal">
        신부측 계좌번호 보기
      </button>
    </div>
    <div class="divide-line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    handleModal() {
      this.isClicked = !this.isClicked;
    },
    closeModal(){
      this.isClicked = !this.isClicked;
    },
    // copyInfo(){
     
    // }
  },
};
</script>

<style scoped>

.account-info {
  margin: 5rem 0;
}
.account-info p {
  text-align: center;
  margin: 0;
}
.account-info p:nth-child(1) {
  font-weight: bold;
  font-size: 1.3rem;
}
.account-info p:nth-child(2) {
  font-size: 1.1rem;
  padding-bottom: 3rem;
}
.account-info button {
  display: flex;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: none;
  background: rgb(238, 238, 238);
  font-size: 1.2rem;
  width: 15rem;
  height: 3rem;
}
.acc-btn1,
.acc-btn2 {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
