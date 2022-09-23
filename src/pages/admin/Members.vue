<template>
    <div>
        <Breadcrumbs main="Dashboard" title="Members"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5 class="card-title">Members</h5>
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Names</th>
                                <th>Email</th>
                                <th>Account</th>
                                <th></th>
                            </tr>

                        </thead>
                        <div v-if="loading" style="min-height: 230px; width: 100%;" class="c">
                            <h6 class="text-center pt-5">loading...</h6>
                        </div>
                        <tbody v-else>

                            <tr v-for="user,key in users" :key="key">
                                <td>{{key +1}}</td>
                                <td>
                                    <img
                                    class="b-r-10 shadow"
                                    src="../../assets/images/dashboard/profile.jpg"
                                    alt=""
                                    />
                                    {{user.name}} </td>
                                <td>{{user.email}}</td>
                                <td><span class="badge badge-dark">{{user.role}}</span></td>
                                <td>
                                    <router-link :to="'/admin/member/'+user.usercode" class="btn btn-primary btn-sm" >details</router-link>
                                </td>
                            </tr>

                        </tbody>


                    </table>
                </div>
              </div>

            </div>
        </div>
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>
  import { VueEditor } from 'vue2-editor';
  import axios from 'axios'
  export default {
    components: {
      VueEditor
    },
    data() {
      return {
        content: '<h1>Some initial content</h1>',
        users: [],
        loading: false
      };
    },

    methods: {
      getUsers(){
    
        this.loading = true
                  axios({
                    method: "get",
                    url: process.env.VUE_APP_URL+'/api/users',
                    params: {
                       
                    },
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' +localStorage.getItem('user_token')

                    },

                    })
                    .then( (response) =>{

                      this.loading = false
                        //handle success

                      this.users = response.data

                      console.log(response);


                    })
                    .catch( (response)=> {

                      this.loading = false

                      console.log(response);

                    });
      }
    },

    mounted() {
      this.getUsers()
    },
  };
</script>