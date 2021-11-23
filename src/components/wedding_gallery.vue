<template>
  <div>
    <p>웨딩갤러리</p>

    <div class="wedding-bg">
      <img :src="images[current]" />
    </div>
    <div class="thumbnail-bar">
      <li>
        <div v-for="(image, idx) in images" :key="idx" @click="current = idx">
          <img :src="images[idx]" />
        </div>
      </li>
    </div>
    <div class="wedding-map">
      <img src="@/assets/images/map.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require("@/assets/images/img1.jpg"),
        require("@/assets/images/img2.jpg"),
        require("@/assets/images/img4.jpg"),
        require("@/assets/images/img5.jpg"),
        require("@/assets/images/img6.jpg"),
        require("@/assets/images/img7.jpg"),
        require("@/assets/images/img8.jpg"),
        require("@/assets/images/img9.jpg"),
        require("@/assets/images/img10.jpg"),
        require("@/assets/images/img11.jpg"),
        require("@/assets/images/img12.jpg"),
        require("@/assets/images/img13.jpg"),
      ],
      current: 0,
    };
  },
  methods: {
    handleBtn1() {
      if (this.current == 0) {
        this.current = this.images.length - 1;
      } else this.current -= 1;
    },
    handleBtn2() {
      if (this.current == this.images.length - 1) {
        this.current = 0;
      } else this.current += 1;
    },
  },
};
</script>

<style scoped>
.wedding-bg {
  position: relative;
  display: flex;
  justify-content: center;
}
.wedding-bg img {
  width:100%;
  height:50rem;
  object-fit: cover;
}
.thumbnail-bar{
  overflow: hidden;
  height:13rem;
}
.thumbnail-bar li{
  overflow-x: scroll;
  width:100%;
  /* white-space: nowrap; */
  display: flex;
  flex-wrap: nowrap;
}
.thumbnail-bar img {
  width: 10rem;
  cursor: pointer;
}
p {
  font-size: 1.8rem;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-bottom: 3rem;
  letter-spacing: 2rem;
}
.wedding-map{
  margin-top: 5rem;
}
.wedding-map img {
  width: 100%;
  height: 100%;
}
</style>
