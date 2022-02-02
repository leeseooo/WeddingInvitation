<template>
  <div class="contact">
    <div class="contact-1">
      <p>신랑에게 연락하기</p>
      <div class="buttons">
        <div class="contact-1-call">
          <a href="tel:010-9856-2728"
            ><img :src="require('@/assets/images/phone.svg')"
          /></a>
        </div>

        <div class="contact-1-msg">
          <a href="sms:010-9856-2728"
            ><img :src="require('@/assets/images/envelope.svg')"
          /></a>
        </div>
      </div>
    </div>
    <!-- 신랑에게 연락하기 -->
    <div class="contact-2">
      <p>신부에게 연락하기</p>
      <div class="buttons">
        <div class="contact-2-call">
          <a href="tel:010-7120-7907"
            ><img :src="require('@/assets/images/phone.svg')"
          /></a>
        </div>
        <div class="contact-2-msg">
          <a href="sms:010-7120-7907"
            ><img :src="require('@/assets/images/envelope.svg')"
          /></a>
        </div>
      </div>
    </div>
    <!-- 신부에게 연락하기 -->

    <!-- 토글 -->
    <div v-if="!toggle" >
      <button @click="handleToggleButton">
        <i class="fas fa-sort-down fa-2x"></i>
      </button>
    </div>
    <div v-else class="toggle-button">
      <button @click="handleToggleButton">
        <i class="fas fa-caret-up fa-2x"></i>
      </button>
    </div>

    <!-- 토글버튼 -->
    <div class="toggle-box" v-if="toggle">
      <div class="grooms">
        <p>신랑측 혼주</p>
        <div class="grooms-contact">
          <div>
            <p>아버지 정양수</p>
            <div class="buttons parents">
              <div class="contact-1-call">
                <a href="tel:010-6753-2728">
                  <div class="icon">
                    <img :src="require('@/assets/images/phone.svg')" /></div
                ></a>
              </div>
              <div class="contact-1-msg">
                <a href="sms:010-6753-2728"
                  ><div class="icon">
                    <img :src="require('@/assets/images/envelope.svg')" /></div
                ></a>
              </div>
            </div>
          </div>
          <p>어머니 김미화</p>
          <div class="buttons parents">
            <div class="contact-1-call">
              <a href="tel:010-3017-2728">
                <div class="icon">
                  <img :src="require('@/assets/images/phone.svg')" /></div
              ></a>
            </div>
            <div class="contact-1-msg">
              <a href="sms:010-3017-2728">
                <div class="icon">
                  <img :src="require('@/assets/images/envelope.svg')" /></div
              ></a>
            </div>
          </div>
        </div>
      </div>
      <!-- 신랑측 혼주 -->
      <div class="brides">
        <p>신부측 혼주</p>
        <div class="grooms-contact">
          <div>
            <p>아버지 이영재</p>
            <div class="buttons parents">
              <div class="contact-1-call">
                <a href="tel:010-5342-7907">
                  <div class="icon">
                    <img :src="require('@/assets/images/phone.svg')" /></div
                ></a>
              </div>
              <div class="contact-1-msg">
                <a href="sms:010-5342-7907">
                  <div class="icon">
                    <img :src="require('@/assets/images/envelope.svg')" /></div
                ></a>
              </div>
            </div>
          </div>
          <p>어머니 이용선</p>
          <div class="buttons parents">
            <div class="contact-1-call">
              <a href="tel:010-2067-6907"
                ><div class="icon">
                  <img :src="require('@/assets/images/phone.svg')" /></div
              ></a>
            </div>
            <div class="contact-1-msg">
              <a href="sms:010-2067-6907">
                <div class="icon">
                  <img :src="require('@/assets/images/envelope.svg')" /></div
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 신부측 혼주 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    handleToggleButton() {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style scoped>
.toggle-button {
  animation: rotateX 300ms ease-in-out forwards;
}
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 47rem;
}
.contact-1,
.contact-2 {
  display: flex;
}
.contact-1 p,
.contact-2 p {
  font-size: 1.6rem;
  display: flex;
  margin: 0;
  padding-top: 3rem;
  padding-right: 3rem;
}
.contact button {
  border: none;
  background: none;
  color: #a88bbe;
}
.contact-1-call img,
.contact-2-call img,
.contact-1-msg img,
.contact-2-msg img {
  margin-right: 1rem;
  width: 1.5rem;
}
.buttons {
  display: flex;
  padding-top: 3.4rem;
  justify-content: space-around;
  width: 8rem;
  opacity: 0.6;
}
.parents {
  padding: 1rem 0 1rem 1.5rem;
}
.toggle-box {
  display: flex;
  font-size: 1.5rem;
  text-align: center;
  animation: fadein 300ms ease-in-out forwards;
}
.grooms,
.brides {
  margin: 0 3rem;
}

#rotate-btn {
  transform: rotate(180deg);
}
@media (min-width: 350px) {
  .contact-1 p,
  .contact-2 p {
    font-size: 1.7rem;
    display: flex;
    margin: 0;
    padding-top: 3rem;
    padding-right: 3rem;
  }
  .contact-1-call img,
  .contact-2-call img,
  .contact-1-msg img,
  .contact-2-msg img {
    margin-right: 1rem;
    width: 1.6rem;
  }
  .parents {
    padding: 1rem 0 1rem 1.5rem;
  }
  .grooms p,
  .brides p {
    font-size: 1.6rem;
  }
}
@media (min-width: 420px) {
  .contact-1 p,
  .contact-2 p {
    font-size: 1.8rem;
    display: flex;
    margin: 0;
    padding-top: 3.2rem;
    padding-right: 3rem;
  }
  .contact-1-call img,
  .contact-2-call img,
  .contact-1-msg img,
  .contact-2-msg img {
    margin-right: 1rem;
    width: 1.8rem;
  }
  .grooms p,
  .brides p {
    font-size: 1.8rem;
  }
}
@keyframes fadein{
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@keyframes rotateX {
  0% {
    transform: rotateX(-90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
</style>