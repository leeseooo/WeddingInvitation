<template>
  <div>
    <div class="modal-wrap" v-if="isClicked">
      <div class="modal-box">
        <div class="modal-content">
          <div class="modal-context-m" v-if="!acc_w">
            <ul>
              <li>카카오뱅크 1234567890</li>
              <li>예금주: 정동현</li>
            </ul>
          </div>
          <div class="modal-context-w" v-if="acc_w">
            <ul>
              <li>국민 1234567890</li>
              <li>예금주: 이지은</li>
            </ul>
          </div>
        </div>
        <div class="modal-button">
          <button class="btn-confirm" @click="closeModal">확인</button>
          <button class="btn-copy" @click="copyInfo">복사하기</button>
        </div>
      </div>
    </div>
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
    <input class="input1" v-model="inputText" />

    <input class="input2" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false,
      acc_w: false,
      inputText: "카카오뱅크 1234567890",
      inputText2:"국민 1234567890",
    };
  },
  methods: {
    handleModal(event) {
      this.isClicked = !this.isClicked;
      if (event.target.classList.value == "acc-btn1") {
        this.acc_w = false;
      } else {
        this.acc_w = true;
      }
    },
    closeModal() {
      this.isClicked = !this.isClicked;
    },
    copyInfo() {
      if(this.acc_w == false){
         this.$copyText(this.inputText);
      }else{
        this.$copyText(this.inputText2);
      }
      alert('복사되었습니다.');
      this.closeModal();
    },
  },
};
</script>

<style scoped>
ul {
  padding: 0;
}
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
.modal-box {
  position: absolute;
  background: gainsboro;
  width: 30rem;
  border-radius: 3rem;
}
.modal-content {
  padding: 1rem;
  word-break: break-all;
  max-height: 20rem;
  font-size: 1.6rem;
  text-align: center;
}
.modal-button {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 1.5rem;
}
.btn-confirm,
.btn-copy {
  border: none;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin: 0 1rem;
}
.input1,
.input2 {
  display: none;
}
</style>
