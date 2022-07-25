<template>

  <div class="back">
    <div class="fanhui">
        <router-link to="/HomePage"> <svg t="1658628898901" class="ifanhui" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2265" width="24" height="24" ><path d="M729.6 931.2l-416-425.6 416-416c9.6-9.6 9.6-25.6 0-35.2-9.6-9.6-25.6-9.6-35.2 0l-432 435.2c-9.6 9.6-9.6 25.6 0 35.2l432 441.6c9.6 9.6 25.6 9.6 35.2 0C739.2 956.8 739.2 940.8 729.6 931.2z" p-id="2266" fill="#ffffff" ref="ifanhui"></path></svg></router-link>
       
    </div>
   
    <div class="threepoint">
         <router-link to="/editor"> <svg t="1658628994672" class="ithreepoint" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2137" width="32" height="32" ><path d="M512 704c35.2 0 64 28.8 64 64s-28.8 64-64 64-64-28.8-64-64 28.8-64 64-64z m-64-192c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m0-256c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z" p-id="2138" fill="#ffffff" ref="ithreepoint"></path></svg></router-link>
       
    </div>

  

    <div class="backimg">
        <img :src="backgroundUrl" alt="">
    </div>
    <div class="info" ref="info">


      <transition name="run">

          <div class="headimg" ref="headimg" v-if="isshow">
            <img :src="avatarUrl" alt="">
        </div>
      </transition>
          
      
        <transition name="run"> <div class="name" @mousemove="send"
        v-if="isshowname">{{nickname}}</div></transition>
       

        <ul class="info1" ref="info1">
            <li>{{follows}}关注</li>
            <li>{{followeds}}粉丝</li>
            <li>Lv.{{level}}</li>
        </ul>
 <router-link to="/editor"><div class="edit">编辑资料</div></router-link>
        
    </div>

    <ul class="nav">
       <router-link to="/user/basicinfo"><li>主页</li></router-link> 
       <router-link to="/user/dynamic"> <li>动态</li></router-link>
       <router-link to="/user/podcast"><li>关注</li></router-link> 
    </ul>

    <router-view :createDays="createDays" :gender="gender" :listenSongs="listenSongs"
    :playlist="playlist" :dynamic=" dynamic"
    :avatarUrl="avatarUrl"
    :nickname="nickname"></router-view>

  </div>
</template>

<script>


export default {
    name:'user',
    // props:['nickname'],
    mounted(){
 window.addEventListener('scroll', this.handleScroll, true);
 this.send()
    },

    data(){
        return {
            nickname:'',
            backgroundUrl:'',
            avatarUrl:'',
            follows:'',
            followeds:'',
            level:'',
            createDays:'',
            gender:'',
            listenSongs:'',
            isshow:true,
            isshowname:true,
            playlist:[],
            dynamic:[],
        }
    },
  /*   created(){
        
        
    const a=axios.get('/user/detail?uid=512189031')
     console.log(a)
    }, */
    methods:{
        handleScroll() {
			
          /*   console.log(this.$refs.info.getBoundingClientRect().top) */
    
            if(this.$refs.info.getBoundingClientRect().top<85)
              this.isshow=false
             else{
               /*  this.$refs.headimg.style.display='block' */
               this.isshow=true
             }
             // console.log(this.isshow)
            //  if(this.$refs.info.getBoundingClientRect().top<45)
            //  console.log(123)

            if(this.$refs.info.getBoundingClientRect().top<30)
             { this.isshowname=false
              
            /*  this.$refs.ithreepoint.attributes.fill="#000000" */
             this.$refs.ifanhui.setAttribute("style", "fill:black")

              this.$refs.ithreepoint.setAttribute("style", "fill:black")
             }
             else{
               /*  this.$refs.headimg.style.display='block' */
               this.isshowname=true
                 this.$refs.ifanhui.setAttribute("style", "fill:white")

              this.$refs.ithreepoint.setAttribute("style", "fill:white")
             }
			},

          async send(){
        
        const{data:res}=await this.$ajax.get('/user/detail?uid=512189031')
           /*   console.log(res)
             console.log(res.profile)
             console.log(res.profile.nickname) */
             this.nickname=res.profile.nickname
             this.avatarUrl=res.profile.avatarUrl
             this.backgroundUrl=res.profile.backgroundUrl
             this.level=res.level
             this.follows=res.profile.follows
             this.followeds=res.profile.followeds
             this.createDays=res.createDays
             this.listenSongs=res.listenSongs

             if(res.profile.gender==1)
             this.gender='男'
             else
             this.gender='女'
       
                const{data:res2}=await this.$ajax.get('/user/subcount')
             

               const{data:res3}=await this.$ajax.get('/user/playlist?uid=512189031')
               this.playlist=res3.playlist

                    const{data:res4}=await this.$ajax.get('/user/event?uid=512189031')
                 this.dynamic=res4.events
               /* console.log(JSON.parse(res4.events[0].json)) */

                const{data:res5}=await this.$ajax.get('/user/follows?uid=512189031')
               /* console.log(res5) */
            
        }, 
    }
    }
</script >

<style >
.back{
    position: absolute;
    top: 0;
    left: 0;
    width: 375px;
    height:1380px;
    background-color: #f6f6f6;
}
.fanhui{
    position: sticky;
    right: 0;
    top:0;
    z-index: 99;
    background-color: rgb(181, 89, 89);
}
.ifanhui{
    position: absolute;
    left: 5px;
    top: 10px;
}
.threepoint{
     position: sticky;
    right: 0;
    top:0;
       z-index: 99;
}
.ithreepoint{
    position: absolute;
    right: 0;
    top:5px;
}

.info{
    position: absolute;
    top: 250px;
    left: 18px;
    width: 340px;
    height: 150px;
     background-color: #fefeff;
     border-radius: 15px;
}
.backimg{
    width: 375px;
    height: 280px;
    background-color: #fff;
    overflow: hidden;
}
.backimg img{
    width: 375px;
}
.info1{
    width:200px;
    height: 20px;
    background-color: #fff;
    position: absolute;
    top: 70px;
    left: 40px;
}
.info1 li{
    width: 50px;
    height: 20px;
    float: left!important;
    margin-left: 5px;
    margin-top: 0;
    line-height: 20px;
    color: #9a9898;
}
.headimg{
    width: 80px;
    height: 80px;
    background-color: rgb(126, 78, 78);
    position: relative;
    top: -40px;
    left: 130px;
    border-radius: 50%;
    overflow: hidden;
     
}


.headimg img{
    width: 80px;
}



.run-enter-from,
.run-leave-to {
  opacity: 0;
}

.run-enter-to,
.run-leave-from {
  opacity: 1;
}

.run-enter-active,
.run-leave-active {

  transition: opacity 0.3s linear 0s;
}

.name{
    width: 200px;
    height: 30px;
    position: absolute;
    top: 50px;
    left: 70px;
    text-align: center;
    line-height: 30px;
    color: black;
    letter-spacing: 2px;
    font-weight: 550;
    font-size: 17px;
}
.edit{
    width: 70px;
    height: 20px;
    position: absolute;
    top: 115px;
    left:134px;
    border: 1px solid #9a9898;
    border-radius: 10px;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: #000;
}
.nav{
    width: 300px;
    height:35px;
    position: absolute;
    top: 400px;
    left: 10px;
}
.nav li{
    width: 50px;
    height: 20px;
    float: left;
    margin-left: 30px;
    margin-top: 0;
    padding-top: 5px;
    color: #676767;
    text-align: center;
}
</style>