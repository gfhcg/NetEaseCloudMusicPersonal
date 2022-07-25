import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './components/router'
import axios from 'axios'

/* document.cookie = ''
document.cookie = '_ntes_nnid=56993a46358bdc19dd2436c9c4a2ff35,1645314327818; '
document.cookie =
    '_ntes_nuid=56993a46358bdc19dd2436c9c4a2ff35;'

document.cookie = 'NMTID=00OOXFsDsRxVGwp4kdUqMpKfoXylzsAAAF_FGBJcg; '
document.cookie = 'NTES_P_UTID=vDAQADeZtskYyUxDRBZgavfRCKyIIMCt|1646534437;'
document.cookie = 'P_INFO=m13700549165@163.com|1646534437|0|mail163|00&99|chq&1646531433&caldav#chq&null#10#0#0|137165&0|mailmaster_win&mailmaster_ios|13700549165@163.com; '
document.cookie = 'nts_mail_user=m13700549165@163.com:-1:1; '
document.cookie = 'WEVNSM=1.0.0;'
document.cookie = ' WNMCID=atynqa.1646534444726.01.0;'

document.cookie = 'UM_distinctid=17fa24e4be79fb-0ae24c7c9ac3b1-977173c-1bcab9-17fa24e4be82e; '
document.cookie = '_iuqxldmzr_=33; '
document.cookie = 'MUSIC_U=96bf100a1d91713ec15fbb7d6306add320ed0d8d990cd393056c9b9bc57e37a1519e07624a9f0053fce2a0e8b09b0517f6715ced9e302d33866245fcb8380800daf233d4650950b0a0d2166338885bd7; '
document.cookie = '__csrf=93887edc5cf23ca443469f0ae89d9a4a; '
document.cookie = 'ntes_kaola_ad=1; '
document.cookie = 'JSESSIONID-WYYY=vR5csWX8EoS3gnROA7K9iVgrr%2F3TjU%2Bj%2F4zBcyeAMIBIganFazkc66S30i2DR3WapaH9whV8iQSMONCprD%2F0cyXQfGb%2B%2BQ2F7V0JUm5kil6Bm5lGanr80Ca%2BI%2FN3el0Nl%2FOMzCbvREk1cCUqtqn7njYvlcEhnUSuqf4XqxK0v2A5Qdrk%3A1658565359578' */

//基于设计图的rem布局
function remSize() {
    //获取设备宽度
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth
    if (deviceWidth >= 750) {
        deviceWidth = 750
    }
    if (deviceWidth <= 320) {
        deviceWidth = 320
    }
    //750px下 1rem=100px,375px下 1rem=50px
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
    //设置字体大小
    document.querySelector('body').style.fontSize = 0.3 + 'rem'
}
remSize()
//当窗口发生变化时调用
window.onresize = function () {
    remSize();
}


const app = createApp(App)
//挂载路由写法
app.use(router)

axios.defaults.baseURL = 'http://localhost:3000'

app.config.globalProperties.$ajax = axios

app.mount('#app')


