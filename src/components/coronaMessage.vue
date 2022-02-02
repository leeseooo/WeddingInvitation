<template>
  <div class="container">
    <div class="leaf"><img :src="require('@/assets/images/leaf.png')" /></div>
    <div class="text">
      <p>코로나19 확산으로 인해</p>
      <p>어려운 시기를 보내고 있는 요즘,</p>
      <p>잠잠해질 날이 언제일지 누구도 예측할 수 없기에</p>
      <p>결혼식을 미루지 않고</p>
      <p>예정대로 진행하기로 결정하였습니다.</p>
      <p>결혼식 참석에 대한 부담은 갖지 마시고</p>
      <p>축하해주시는 마음 예쁘게 간직하겠습니다.</p>
      <p>부디 저희 결혼 소식이 불편한 마음으로 머물지 않고</p>
      <p>좋은 소식이 되길 바랍니다.</p>
    </div>
    <div class="from">동현 & 지은 올림</div>
    <div class="leaf"><img :src="require('@/assets/images/leaf.png')" /></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  max-width: 768px;
  width: 96%;
  margin:0 auto;
  font-size: 1.3rem;
  height: 50rem;
  text-align: center;
}
.text {
  text-align: center;
}
.from {
  padding-top: 3rem;
  text-align: center;
}
.leaf {
  margin-top: 3rem;
}
.leaf img {
  width: 5rem;
}
@media (min-width: 350px) {
  .container {
    padding:0 2rem;
  font-size: 1.4rem;
}
}
@media (min-width: 380px) {
  .container {
    padding:0 2rem;
  font-size: 1.5rem;
  height: 55rem;
}
}
</style>