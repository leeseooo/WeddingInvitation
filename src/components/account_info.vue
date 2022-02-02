<template>
  <div>
    <div class="modal-wrap" v-if="isClicked">
      <div class="modal-box">
        <div class="modal-content">
          <div class="modal-context-m" v-if="!acc_w">
            <ul>
              <li>신랑혼주 계좌</li>
              <div class="divide"></div>
              <div class="account-row">
                <div class="account-row-column-text">
                  <li>농협 86501117977</li>
                  <li>예금주: 정양수</li>
                </div>
                <button class="btn-copy" @click="copyInfo" id="groom-m">
                  복사하기
                </button>
              </div>
              <div class="padding"></div>
              <div class="account-row">
                <div class="account-row-column-text">
                  <li>농협 82108656096936</li>
                  <li>예금주: 김미화</li>
                </div>
                <button class="btn-copy" @click="copyInfo" id="groom-w">
                  복사하기
                </button>
              </div>
              <!-- 신랑혼주 -->

              <li class="padding">신랑 계좌</li>
              <div class="divide"></div>
              <div class="account-row">
                <div class="account-row-column-text">
                  <li>농협 3560213809763</li>
                  <li>예금주: 정동현</li>
                </div>
                <button class="btn-copy" @click="copyInfo" id="groom">
                  복사하기
                </button>
              </div>
            </ul>
          </div>
          <!-- 여기까지 신랑측 계좌 -->
          <div class="modal-context-w" v-if="acc_w">
            <ul>
              <li>신부혼주 계좌</li>
              <div class="divide"></div>
              <div class="account-row">
                <div class="account-row-column-text">
                  <li>농협 13004256015272</li>
                  <li>예금주: 이용선</li>
                </div>
                <button class="btn-copy" @click="copyInfo" id="bride-w">
                  복사하기
                </button>
              </div>
              <!-- 신부혼주 계좌 -->
              <li class="padding">신부 계좌</li>
              <div class="divide"></div>
              <div class="account-row">
                <div class="account-row-column-text">
                  <li>국민 97120790768</li>
                  <li>예금주: 이지은</li>
                </div>
                <button class="btn-copy" @click="copyInfo">복사하기</button>
              </div>
            </ul>
          </div>
        </div>
        <div class="modal-button">
          <button class="btn-confirm" @click="handleModal">확인</button>
        </div>
      </div>
    </div>
    <div class="account-info">
      <p>마음 전하실 곳</p>
      <p>"신랑&신부에게 축하의 마음을 전해주세요"</p>
      <button class="acc-btn1" @click="handleModal" id="acc_m">
        신랑측 계좌번호 보기
      </button>
      <button class="acc-btn2" @click="handleModal" id="acc_w">
        신부측 계좌번호 보기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      acc_w: false,
      isClicked: false,
      groom: "농협 3560213809763",
      bride: "국민 97120790768",
      groom_m: "농협 86501117977",
      groom_w: "농협 82108656096936",
      bride_w: "농협 13004256015272",
    };
  },
  methods: {
    handleModal(event) {
      this.isClicked = !this.isClicked;
      const id = event.target.id;
      if (id == "acc_w") {
        this.acc_w = true;
      } else this.acc_w = false;
    },
    copyInfo(event) {
      const buttonId = event.target.id;

      const t = document.createElement("textarea");
      document.body.appendChild(t);

      if (buttonId == "groom-m") {
        t.value = this.groom_m;
        t.select();
        document.execCommand("copy");
      } else if (buttonId == "groom-w") {
        t.value = this.groom_w;
        t.select();
        document.execCommand("copy");
      } else if (buttonId == "groom") {
        t.value = this.groom;
        t.select();
        document.execCommand("copy");
      } else if (buttonId == "bride-w") {
        t.value = this.bride_w;
        t.select();
        document.execCommand("copy");
      } else {
        // this.$copyText(this.bride);
        t.value = this.bride;
        t.select();
        document.execCommand("copy");
      }
      alert("복사되었습니다.");
      document.body.removeChild(t);
      this.handleModal();
    },
  },
};
</script>

<style scoped>
.padding {
  padding-top: 1.5rem;
}
.divide {
  margin: 0.5rem;
  border: 0.5px solid white;
  opacity: 0.4;
  display: flex;
  justify-content: center;
}
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
  font-size: 1.5rem;
}
.account-info p:nth-child(2) {
  font-size: 1.3rem;
  padding-bottom: 3rem;
}
.account-info button {
  display: flex;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: 1.3rem;
  border: none;
  background: #ceb2e4;
  color: white;
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
.account-row {
  display: flex;
  justify-content: space-between;
}
.account-row-column-text {
  float: left;
  text-align: start;
}
.modal-wrap {
  margin: 0 auto;
  display: flex;
  position: relative;
  top: -4rem;
  justify-content: center;
  z-index: 1;
  animation: fadein 200ms ease-in-out forwards;
}
.modal-box {
  position: absolute;
  background: #d0bfdd;
  width: 30rem;
  border-radius: 3rem;
}
.modal-content {
  padding: 1rem;
  word-break: break-all;
  max-height: 30rem;
  font-size: 1.6rem;
  text-align: center;
}
.modal-button {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 1.5rem;
}
.btn-copy {
  border: none;
  font-size: 1.2rem;
  padding: 0.5rem;
  margin: 1rem 1rem;
  background: white;
  border-radius: 1.2rem;
  color: black;
}
.btn-confirm {
  border: none;
  font-size: 1.2rem;
  padding: 1rem 10rem;
  margin: 0 1rem;
  background: white;
  border-radius: 1.2rem;
  color: black;
}
.input1,
.input2 {
  display: none;
}
@media (min-width: 350px) {
  .account-info p:nth-child(1) {
    font-weight: bold;
    font-size: 1.7rem;
  }
  .account-info p:nth-child(2) {
    font-size: 1.5rem;
    padding-bottom: 3rem;
  }
  .account-info button {
    display: flex;
    margin: 0 auto;
    margin-bottom: 1rem;
    border-radius: 1.5rem;
    border: none;
    background: #ceb2e4;
    color: white;
    font-size: 1.4rem;
    width: 17rem;
    height: 4rem;
  }
}
@keyframes fadein {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
</style>
