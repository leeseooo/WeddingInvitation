<template>
    <div class="contact">
          <div class="contact-1">
            <p>신랑 정동현</p>
            <button class="contact-1-call">
              <a href="tel:010-9856-2728"> <i class="fas fa-phone"></i></a>
            </button>

            <button class="contact-1-msg">
              <a href="sms:010-9856-2728"> <i class="fas fa-envelope"></i></a>
            </button>
          </div>
          <div class="contact-2">
            <p>신부 이지은</p>
            <button class="contact-2-call">
              <a href="tel:010-7120-7907"> <i class="fas fa-phone"></i></a>
            </button>
            <button class="contact-2-msg">
              <a href="sms:010-7120-7907"><i class="fas fa-envelope"></i> </a>
            </button>
          </div>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.contact{
  display: flex;
  flex-direction: column;
  align-items: center;
  height:30rem;
}
.contact-1,.contact-2{
  display: flex;

}
.contact-1 p,.contact-2 p{
font-size: 1.4rem;
display: flex;
margin-right: 3rem;
}
.contact button{
  border:none;
  background: none;
  color:rgb(92, 92, 92);
}
.contact-1-call,.contact-2-call{
  margin-right: 1rem;
}

</style>