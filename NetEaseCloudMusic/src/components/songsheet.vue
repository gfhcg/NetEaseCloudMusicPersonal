<template>
  <div class="sback">
    <div class="sheader" @click="playlist">
          <router-link to="/user"> <svg t="1658628898901" class="sfanhui" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2265" width="24" height="24" ><path d="M729.6 931.2l-416-425.6 416-416c9.6-9.6 9.6-25.6 0-35.2-9.6-9.6-25.6-9.6-35.2 0l-432 435.2c-9.6 9.6-9.6 25.6 0 35.2l432 441.6c9.6 9.6 25.6 9.6 35.2 0C739.2 956.8 739.2 940.8 729.6 931.2z" p-id="2266" fill="#000000" ref="ifanhui"></path></svg></router-link>
        
        渘綪亻以氹170620的歌单</div>


        <router-link to="/sheetdetail">
              <ul class="sgedan" ref="sgedan">
        <li id="0" @click="mmm($event)">
         <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div>
        </li>
        <li id="1" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
        <li id="2" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
        <li id="3" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
        <li id="4" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
        <li id="5" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
        <li id="6" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
        <li id="7" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
        <li id="8" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
        <li id="9" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
        <li id="10" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
        <li id="11" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
        <li id="12" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
        <li id="13" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
        <li id="14" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
        <li id="15" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
        <li id="16" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
        <li id="17" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
        <li id="18" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
        <li id="19" @click="mmm($event)"> <img src="" alt="">
         <div class="sname"></div>
        <div class="splaycount"></div></li>
    </ul>
        </router-link>
          
    <router-view :sid="sid"></router-view>
   
  </div>
</template>

<script>
export default {
    name:'songsheet',
    mounted(){
        this.playlist()
        
    },
    dara(){
       return{
        sid:0,
       }
    },
    methods:{
        mmm(e){
           console.log(153355)
           console.log(e.currentTarget.id)
           this.sid=e.currentTarget.id
        },
      async playlist(){
              const{data:res8}=await this.$ajax.get('/user/playlist?uid=512189031')
              console.log(res8)

               

          let lissongname = this.$refs.sgedan.getElementsByClassName('sname'); 

       let lissongimg = this.$refs.sgedan.getElementsByTagName('img'); 

 let lisplay = this.$refs.sgedan.getElementsByClassName('splaycount'); 
       for(let i=0;i<20;i++)
       {
        lissongname[i].innerHTML=res8.playlist[i].name
        lissongimg[i].src=res8.playlist[i].coverImgUrl
        lisplay[i].innerHTML=res8.playlist[i].trackCount
        lisplay[i].innerHTML+='首，播放'
        lisplay[i].innerHTML+=res8.playlist[i].playCount
        lisplay[i].innerHTML+='次'
       }
        }
    }


}
</script>

<style>
.sback{
    width: 375px;
    height: 1100px;
    background-color: #eeeeec;
    position: absolute;
    top: 0;
    left: 0;
}
.sheader{
    width: 375px;
    height: 50px;
    position: sticky;
    top: 0;
    background-color: #fff;
    line-height: 50px;
    font-size: 20px;
    font-weight: 550;
    letter-spacing: 1px;
    z-index: 99999;
}
.sfanhui{
    position: absolute;
    left: 10px;
    top: 13px;
}
.sgedan{
    position: absolute;
    width: 375px;
    height: 500px;
    left: -10px;
    padding-left: 0;
    top: 40px;
    background-color: #eeeeec;
}
.sgedan li{
    width: 375px;
    height: 50px;
    background-color: #fff;
    margin-top: 1px;
    position: relative;

}
.sname{
    position: absolute;
    width: 300px;
    height: 20px;
    left: 60px;
    top: 5px;
    /* background-color: rgb(155, 88, 88); */
    letter-spacing: 1px;
    color: black;
}
.sgedan li img{
    position: absolute;
    width: 45px;
    top: 3px;
    left: 5px;
    border-radius: 5px;
}
.splaycount{
    position: absolute;
    width: 200px;
    height: 20px;
    /* background-color: #fff; */
    left: 60px;
    top: 25px;
    font-size: 12px;
    color: #a8a8a8;
}
</style>