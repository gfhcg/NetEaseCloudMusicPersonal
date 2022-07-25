<template>
  <div class="basinfo" @click="abc">
    <div class="title">基本信息</div>

     <ul class="perinfo">
      <li>村龄：{{createDays}}天</li>
      <li>性别：{{gender}}</li>
      <li>地区：山西  太原</li>
     </ul>



    <div class="more">查看全部

        <svg t="1658541356457" class="infoight" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2521" width="10" height="10"><path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z" p-id="2522" fill="#a8a8a8"></path></svg>
    </div>

  </div>

  <div class="taste">
    <div class="title">音乐品味</div>
    <div class="list">
      <svg t="1658622305679" class="paihang" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5597" width="50" height="50"><path d="M225.63636348 70.18181826h572.72727304A155.45454521 155.45454521 0 0 1 953.81818174 225.63636348v572.72727304a155.45454521 155.45454521 0 0 1-155.45454522 155.45454522H225.63636348A155.45454521 155.45454521 0 0 1 70.18181826 798.36363652V225.63636348A155.45454521 155.45454521 0 0 1 225.63636348 70.18181826z m-1e-8 65.45454522A90 90 0 0 0 135.63636347 225.63636348v572.72727304A90 90 0 0 0 225.63636348 888.36363653h572.72727304a90 90 0 0 0 90-90V225.63636348A90 90 0 0 0 798.36363652 135.63636347H225.63636348z" p-id="5598" fill="#d5443c"></path><path d="M285.36363652 491.54545479v222.42272695a32.72727305 32.72727305 0 1 0 65.45454522 0V491.54545479a32.72727305 32.72727305 0 1 0-65.45454522 0zM683.81818174 491.54545479v211.21363652a32.72727305 32.72727305 0 1 0 65.45454521 0V491.54545479a32.72727305 32.72727305 0 1 0-65.45454521 0zM479.27272695 327.90909131v384.21818174a32.72727305 32.72727305 0 1 0 65.4545461 0V327.90909131a32.72727305 32.72727305 0 1 0-65.4545461 0z" p-id="5599" fill="#d5443c"></path></svg>
      
      听歌排行
       <div class="many">累计听歌{{listenSongs}}首</div>
    </div>
  </div>

    <div class="cresongsheet">
    <div class="title" @click="abc">创建的歌单</div>

    <ul class="gedan5" ref="cgedan5">
      <li>
         <img src="" alt="">
         <div class="gedanname"></div>
        <div class="playcount"></div>
      </li>
      <li>
         <img src="" alt="">
         <div class="gedanname"></div>
       <div class="playcount"></div>
      </li>
    <li>
         <img src="" alt="">
         <div class="gedanname"></div>
      <div class="playcount"></div>
      </li>
  <li>
         <img src="" alt="">
         <div class="gedanname"></div>
      <div class="playcount"></div>
      </li>
   <li>
         <img src="" alt="">
         <div class="gedanname"></div>
       <div class="playcount"></div>
      </li>
    </ul>

    <router-link to="/songsheet"> <div class="more">查看全部

        <svg t="1658541356457" class="infoight" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2521" width="10" height="10"><path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z" p-id="2522" fill="#a8a8a8"></path></svg>
    </div></router-link>
   
  </div>

  
  <div class="comment">
    <div class="title">我的评论</div>
   
    <div class="more">发布评论

        <svg t="1658541356457" class="infoight" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2521" width="10" height="10"><path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z" p-id="2522" fill="#a8a8a8"></path></svg>
    </div>
  </div>

  <div class="wish">  
     <div class="title">愿望清单</div>
    <div class="more">发布愿望

        <svg t="1658541356457" class="infoight" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2521" width="10" height="10"><path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z" p-id="2522" fill="#a8a8a8"></path></svg>
    </div></div>
</template>

<script>
export default {
  name:'basicinfo',
  props:['createDays','gender','listenSongs','playlist'],
  Update(){
    this.abc()
  
  },
  methods:{   
    abc(){
         let lisimg = this.$refs.cgedan5.getElementsByTagName('img');
     // console.log(lis[0]) 
      for(let i=0;i<5;i++)
      {
        lisimg[i].src=JSON.parse(JSON.stringify(this.playlist))[i].coverImgUrl
      }
       let lisname = this.$refs.cgedan5.getElementsByClassName('gedanname'); 
       
        for(let i=0;i<5;i++)
      {
        lisname[i].innerHTML=JSON.parse(JSON.stringify(this.playlist))[i].name
      }

             /*   console.log(JSON.parse(JSON.stringify(this.playlist))) */

     let lisplaycount = this.$refs.cgedan5.getElementsByClassName('playcount'); 
  for(let i=0;i<5;i++)
      {
        lisplaycount[i].innerHTML+=JSON.parse(JSON.stringify(this.playlist))[i].trackCount
         lisplaycount[i].innerHTML+='首，播放'
        lisplaycount[i].innerHTML+=JSON.parse(JSON.stringify(this.playlist))[i].playCount
        lisplaycount[i].innerHTML+='次'
      }

    }
    
  }

}
</script>

<style>
.basinfo{
    position: absolute;
    top: 460px;
    left: 18px;
    width: 340px;
    height: 150px;
    background-color: #fff;
    border-radius: 15px;
}
.perinfo{
  position: absolute;
  top: 20px;
  padding-left: 0;
  color: #5d5d5d;
  padding-left: 6px;
}
.perinfo li{
  margin-top: 5px;
}
.title{
  text-align-last: left;
  /* background-color: rgb(158, 108, 108); */
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 18px;
  letter-spacing: 2px;
  color: #000;
}
.list{
  width:290px;
  height: 43px;
  position: absolute;
  top: 40px;
  left: 50px;
  color: #000;
  font-size: 18px;
  text-align-last: left;
  text-indent: 10px;
  padding-top: 7px;
}
.list .many{
  font-size: 12px;
  color: #a8a8a8;
  margin-top: 2px;
}
.paihang{
  position: absolute;
  left: -46px;
  top: 5px;
}
.more{
  width: 340px;
  height: 30px;
  line-height: 30px;
  /* background-color: #fff; */
  border-top: 1px solid #f3f3f3;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  font-size: 12px;
  color: #a8a8a8;
}
.taste{
    position: absolute;
    top: 630px;
    left: 18px;
    width: 340px;
    height: 100px;
    background-color: #fff;
    border-radius: 15px;
}
.cresongsheet{
    position: absolute;
    top: 750px;
    left: 18px;
    width: 340px;
    height: 400px;
    background-color: #fff;
    border-radius: 15px;
}
.gedan5{
  /* background-color: rgb(166, 137, 137); */
  position: absolute;
  top: 25px;
  padding-left: 50px;
}
.gedan5 li{
  width: 280px;
  height: 50px;
  /* background-color: rgb(182, 75, 75); */
   margin-top: 15px;
   position: relative;
}
.gedan5 img{
  width: 50px;
  position: absolute;
  left: -50px;
  top: -5px;
  border-radius: 10px;
}
.gedan5 li .gedanname
{
    width: 280px;
    height: 30px;
    /* background-color: rgb(52, 206, 62); */
    position: absolute;
    top: -5px;
    text-indent: 5px;
    letter-spacing: 1px;
    line-height: 30px;
    font-size: 16px;
}
.gedan5 li .playcount{

  position: absolute;
  bottom: 5px;
  color: #a8a8a8;
  font-size: 12px;
  text-indent: 5px;
  
}

.comment{
    position: absolute;
    top: 1170px;
    left: 18px;
    width: 340px;
     height: 80px;
    background-color: #fff;
    border-radius: 15px;
}
.wish{
   position: absolute;
    top: 1270px;
    left: 18px;
    width: 340px;
     height: 80px;
    background-color: #fff;
    border-radius: 15px;
}
</style>