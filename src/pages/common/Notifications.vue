<template>
    <div>
        <Breadcrumbs main="Dashboard" title="Notifications"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">

            <div class="card">
                <div class="card-body">

                    
                    <div v-if="notifications.length != 0" class="list-group ">
                        <a v-for="notification in notifications" :key="notification.index" href="#" class="list-group-item list-group-item-action  mb-3 ">
                            <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1 text-warning">🔔 {{notification.title}}</h5>
                        
                            </div>
                            <p class="mb-1">{{notification.message}}</p>
                            <small class="badge badge-dark">{{notification.created_at}}</small>
                        </a>
                    
                    </div>

                <div v-else class="list-group ">
                        <a  href="#" class="list-group-item list-group-item-action  mb-3 ">
                            <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1 text-warning">No messages yet.</h5>
                        
                            </div>
                          
                        </a>
                    
                    </div>
                </div>
            </div>



    
        </div>
        <!-- Container-fluid Ends-->
    </div>
</template>
<script>
import axios from 'axios'
export default {

    data() {
        return {
            notifications: []
        }
    },
    methods: {
        getNotifications(){

            axios({
                url: process.env.VUE_APP_URL +'/api/notifications',
                method: 'get',
                params:{
                    read: 1
                },
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                },


            })
            .then((response)=>{
                this.notifications = response.data
                console.log(response)
            })
            .catch((response)=>{
                console.log(response)
            })

        }
    },
    mounted() {
        this.getNotifications()
    },
}
</script>