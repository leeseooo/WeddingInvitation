<template>
  <div class="container">
    <div class="title">
      <p>/2022.2.19/</p>
      <div class="desc">토요일 오후 3시 30분</div>
    </div>
    <div class="divide-line"></div>
    <div>
      <div class="day-row">
        <div class="sun">Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div class="date-column">
        <div class="week1">
          <div class="box holiday">30</div>
          <div class="box holiday" id="newyear">
            <div id="bar">설날연휴</div>
            <div class="num1">31</div>
          </div>
          <div class="box" id="newyear">
            <div id="bar">설날</div>
            <div class="num1">1</div>
          </div>
          <div class="box" id="newyear">
            <div id="bar">설날연휴</div>
            <div class="num1">2</div>
          </div>
          <div class="box">3</div>
          <div class="box">4</div>
          <div class="box">5</div>
        </div>
        <!-- 1주 -->
        <div class="week2">
          <div class="box sun">6</div>
          <div class="box">7</div>
          <div class="box">8</div>
          <div class="box">9</div>
          <div class="box">10</div>
          <div class="box">11</div>
          <div class="box">12</div>
        </div>
        <div class="week3">
          <div class="box sun">13</div>
          <div class="box">14</div>
          <div class="box">15</div>
          <div class="box">16</div>
          <div class="box">17</div>
          <div class="box">18</div>
          <div class="box">
            <div class="num19">
              <span>19</span>
            </div>
          </div>
        </div>
        <div class="week4">
          <div class="box sun">20</div>
          <div class="box">21</div>
          <div class="box">22</div>
          <div class="box">23</div>
          <div class="box">24</div>
          <div class="box">25</div>
          <div class="box">26</div>
        </div>
        <div class="week5">
          <div class="box sun">27</div>
          <div class="box">28</div>
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
        </div>
      </div>
    </div>
    <div class="divide-line"></div>
    <div class="counting">
      동현<span>♥</span>지은의 결혼식이 {{ getDate }}일 남았습니다.
    </div>
    <div class="divide-line"></div>
  </div>
</template>

<script>
export default {
  computed: {
    getDate() {
      let count = new Date().getTime();
      let dday = new Date("february 19, 2022 0:00:00").getTime();
      let gap = dday - count;
      return Math.ceil(gap / (1000 * 60 * 60 * 24));
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  max-width: 768px;
  width: 96%;
  margin: 3rem auto auto auto;
}
.divide-line {
  margin: 3rem 3rem;
  border: 0.7px solid rgb(218, 218, 218);
}
.title p {
  font-size: 1.7rem;
  margin: 0 auto;
  padding-left: 1rem;
  padding-bottom: 1rem;
  letter-spacing: 0.8rem;
  text-align: center;
}
.desc {
  width: 100%;
  font-size: 1.7rem;
  text-align: center;
  margin-bottom: 2rem;
}
.day-row {
  display: flex;
  justify-content: space-evenly;
  font-size: 1.4rem;
}
.date-column {
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
}
.week1,
.week2,
.week3,
.week4,
.week5 {
  display: flex;
  justify-content: space-evenly;
  padding-top: 8%;
}
.box {
  width: 6%;
  text-align: center;
}
#newyear {
  position: relative;
}
#bar {
  position: absolute;
  background: #d1b6e6;
  width: 200%;
  height: 100%;
  transform: translate(0, 2rem);
  color: white;
  font-size: 1.1rem;
  text-align: start;
}
.num19 {
  border-radius: 100px;
  background: #a588bb;
}
.num19 span {
  color: white;
}
.holiday {
  opacity: 0.5;
}
.sun {
  color: rgba(255, 103, 57, 0.76);
  font-weight: bold;
}
.counting {
  text-align: center;
  font-size: 1.5rem;
}
.counting span {
  color: #c3a0df;
}
@media (min-width: 350px) {
  .num19 {
    width: 3rem;
    height: 3rem;
  }
}
@media (min-width: 420px) {
  .num19 {
    width: 3.1rem;
    height: 3.1rem;
  }
}
</style>
