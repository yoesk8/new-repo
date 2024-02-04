const app = Vue.createApp({
    data(){
        return {
            message: 'Finish the course',
            link: 'https://vuejs.org/'
        }
    },
    methods:{
        changeOutput(){
            const randomNum = Math.random()
            if (randomNum < 0.5){
                return 'Learn Vue'
            }
            else return 'Master Vue'
        }
    }
})

app.mount('#user-goal')