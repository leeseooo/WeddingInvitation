<template>
  <div>
    <div class="wedding-gallery">
      <p>웨딩갤러리</p>
      <div class="gallery-box">
        <button class="btn1">
          <i class="fas fa-chevron-left"></i>
        </button>
        <img src="@/assets/images/img2.jpg" />
        <button class="btn2">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
    <div class="wedding-map">
      <img src="@/assets/images/map.jpg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wedding-gallery {
  padding: 5rem 0;
  margin-top: 5rem;
  background: rgb(238, 238, 238);
}
.wedding-gallery p {
  font-size: 1.5rem;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-bottom: 3rem;
  letter-spacing: 2rem;
}
.gallery-box {
  margin: 0 auto;
  border: 1px solid black;
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.gallery-box img {
  max-width: 100%;
  max-height: 100%;
  z-index: 0;
}
.gallery-box button {
  background: none;
  border: none;
  position: absolute;
  z-index: 1;
  color: white;
}
.gallery-box button:hover {
  cursor: pointer;
}
.btn1 {
  left: 0;
}
.btn2 {
  right: 0;
}
.wedding-map img {
  width: 100%;
  height: 100%;
}
</style>
