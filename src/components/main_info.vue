<template>
  <div>
    <div class="main-picture">
      <img src="@/assets/images/img4.jpg" />
    </div>
    <div class="main-info">
      <div class="main-info-title">
        <p>The Marriage Of</p>
        <p>/ 이지은 & 정동현 /</p>
      </div>
      <div class="main-info-location">
        <p>2022년 2월 19일 토요일 오후 3시</p>
        <p>서울특별시 영등포구 양평로 58 그랜드컨벤션센터</p>
      </div>
      <div class="divide-line"></div>
      <div class="main-greeting">
        <div class="main-greeting-title">
          2월 19일 이지은, 정동현의 결혼식에
          <p>초대합니다</p>
        </div>
        <div class="main-greeting-text">
          <p>약속했습니다.</p>
          <p>사랑의 이름으로 서로</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-picture {
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-picture img {
  width: 100%;
}
.main-info {
  width: 100%;
  height: 100rem;
  margin: 0;
  padding: 0;
}
.main-info-title p {
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 1.8rem;
  letter-spacing: 0.8rem;
}
.main-info-location p {
  font-size: 1.4rem;
  text-align: center;
  margin: 0;
}
.divide-line {
  margin: 3rem 3rem;
  border: 0.7px solid rgb(218, 218, 218);
}
.main-greeting {
  margin: 0 auto;
  padding-left: 3rem;
}
.main-greeting-title {
  font-size: 1.7rem;
}
.main-greeting-title p {
  letter-spacing: 3.2rem;
  font-size: 1.7rem;
}
.main-greeting-text p {
  font-size: 1.4rem;
  margin: 0;
}
</style>