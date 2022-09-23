<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-7 b-center bg-size" :style="{ backgroundImage: 'url('+ require('../assets/images/login/2.jpg') +')' }"
          style="background-size: cover; background-position: center center; display: block;">
        <img
          class="bg-img-cover bg-center"
          src="../assets/images/login/2.jpg"
          alt="looginpage"
          style="display: none;"
        />
      </div>
      <div class="col-xl-5 p-0">
        <div class="login-card">
          <div>
            <div>
              <a class="logo text-left">
                <img
                  class="img-fluid for-light"
                  src="../assets/images/logo/login.png"
                  alt="looginpage"
                />
                <img
                  class="img-fluid for-dark"
                  src="../assets/images/logo/logo_dark.png"
                  alt="looginpage"
                />
              </a>
            </div>
            <div class="login-main login-form-card login-res">
              <div class="theme-form">
                <h4>Sign in to account</h4>
                <p>Enter your email & password to login</p>
                <div class="form-group">
                  <label class="col-form-label">Email Address</label>
                  <input
                    class="form-control"
                    type="email"
                    required=""
                    placeholder="Test@gmail.com"
                    v-model="email"
                  />
                </div>
                <div class="form-group">
                  <label class="col-form-label">Password</label>
                  <input
                    class="form-control"
                    type="password"
                    name="login[password]"
                    required=""
                    placeholder="*********"
                    v-model="password"
                  />
                  <div class="show-hide"><span class="show"> </span></div>
                </div>
                <div class="form-group mb-0">
                  <div class="checkbox p-0">
                    <input id="checkbox1" type="checkbox" />
                    <label class="text-muted" for="checkbox1"
                      >Remember password</label
                    >
                  </div>
                  <button @click="login()" class="btn btn-primary btn-block" type="submit" >
                    {{loading?'Signing you in...':'Sign in'}}
                  </button>
                </div>
                <h6 class="text-muted mt-4 or">Or Sign in with</h6>
                <div class="social mt-4 d-none">
                  <div class="btn-showcase">
                    <a class="btn btn-light">
                      <i class="fa fa-google txt-linkedin"></i>
                      Google
                    </a>
                    <a class="btn btn-light">
                      <feather type="twitter" class="txt-twitter"></feather
                      >twitter</a
                    >
                    <a class="btn btn-light">
                      <feather type="facebook" class="txt-fb"></feather
                      >facebook</a
                    >
                  </div>
                </div>
                <p class="mt-4 mb-0">
                  Don't have account?
                  <router-link class="ml-2" tag="a" to="/auth/register">
                    Create Account
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        loading: false,
        email:'',
        password:''
      }
    },

    methods: {
          login(){

            this.loading = true

                    axios({
                    method: "post",
                    url: process.env.VUE_APP_URL+'/api/login',
                    data: {
                        email: this.email,
                        password: this.password
                    },
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-type': 'application/json',
                        'Accept': 'application/json',
                    },
                    
                    })
                    .then( (response) =>{

                      this.loading = false
                        //handle success

                        console.log(response)

                        localStorage.setItem('user_role', response.data.user_data.role)
                        localStorage.setItem('user_token', response.data.access_token)
                        localStorage.setItem('user_data', JSON.stringify(response.data.user_data))
                        


                        return this.$router.push('/'+response.data.user_data.role)
                          


                    })
                    .catch( (response)=> {

                      this.loading = false

                        console.log(response);

                    });
              
          
          }
    },
  }
</script>
