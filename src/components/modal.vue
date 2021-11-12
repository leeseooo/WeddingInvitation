<template>
  <div class="modal-wrap">
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
        <button class="btn-copy" @click="copyInfo">복사하기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['isClicked'],
  methods:{
    closeModal(){
      this.isClicked = !this.isClicked;
    },
    copyInfo(){

    }
  }
};
</script>

<style scoped>
.modal-wrap{
  background: rgba(0,0,0,0.3);
  justify-content: center;
   position: fixed; 
  align-items:center;
  top:0;
  left:0;
  right:0;
  bottom:0;
  display: flex;
  padding: 1.5rem;
}
.modal-box{
  width:100%;
  max-width:40rem;
  border-radius: 1rem;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 5px 10px 10px 1px rgba(0,0,0,0.3);
}
.modal-content{
  width:100%;
  padding:2rem;
  word-break: break-all;
  max-height: 20rem;
  font-size: 1.6rem;
}
/* .modal-context-m{}
.modal-context-w{} */
.modal-button{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width:100%;
  padding-bottom: 1rem;
}
.btn-confirm, .btn-copy{
  background: rgba(0,0,0,0.2);
  border: 1px;
  border-radius: 1rem;
  padding:1rem 2rem;
}
</style>