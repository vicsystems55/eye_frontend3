<template>
  <div>
    <div class="container-fluid p-0">
      <div class="row m-0">
        <div class="col-12 p-0">
          <div class="login-card">
            <div>
              <div>
                <a class="logo">
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
              <div class="login-main login-form-card">
                <div class="theme-form">
                  <h4>Create your account</h4>
                  <p>Enter your personal details to create account</p>
                  <div class="form-group">
                    <label class="col-form-label pt-0">Your Name</label>
                    <div class="form-row">
                      <div class="col-12">
                        <input
                          class="form-control"
                          type="text"
                          required=""
                          placeholder="Fullname"

                          v-model="name"

                        />
                      </div>

                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Email Address</label>
                    <input
                      class="form-control"
                      type="email"
                      required=""
                      placeholder="Test@gmail.com"

                      v-model="email"
                    />
                    <div id="" class="text-danger">
                      {{email_error}}
                    </div>
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
                    <div class="show-hide"><span class="show"></span></div>
                  </div>
                  <div class="form-group">
                    <label class="">Account Type</label> <br>

                    <div class="custom-control custom-radio custom-control-inline btn btn-outline-dark btn-sm btn-block">
                      <input type="radio" id="customRadioInline1" v-model="role" :value="'participant'" class="custom-control-input">
                      <label class="custom-control-label" for="customRadioInline1">Participant</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline btn btn-outline-dark btn-sm btn-block">
                      <input type="radio" id="customRadioInline2" v-model="role" :value="'mentor'" class="custom-control-input">
                      <label class="custom-control-label" for="customRadioInline2">Mentor</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline btn btn-outline-dark btn-sm btn-block">
                      <input type="radio" id="customRadioInline3" v-model="role" :value="'judge'" class="custom-control-input">
                      <label class="custom-control-label" for="customRadioInline3">Judge</label>
                    </div>
                  
                  </div>
                  <div class="form-group mb-0">
                    <div class="checkbox p-0">
                      <input id="checkbox1" type="checkbox" />
                      <label class="text-muted" for="checkbox1"
                        >Agree with<a class="ml-2" href="#"
                          >Privacy Policy</a
                        ></label
                      >
                    </div>
                    <button v-if="loading"  class="btn btn-primary btn-block" disabled>
                      Creating Account...
                    </button>
                    <button v-else @click="register()" class="btn btn-primary btn-block" >
                      Create Account
                    </button>
                  </div>
                  <h6 class="text-muted mt-4 or d-none">Or signup with</h6>
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
                    Already have an account?
                    <router-link class="ml-2" tag="a" to="/auth/login">
                      Login
                    </router-link>
                  </p>
                </div>
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
        name: '',
        email:'',
        role: '',
        password:'',
        email_error: ''
      }
    },

    methods: {
          register(){

            this.loading = true

                    axios({
                      method: "post",
                      url: process.env.VUE_APP_URL+'/api/register',
                      data: {
                          name: this.name,
                          role: this.role,
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
                        if (response.data.email) {
                     
                          this.email_error = response.data.email[0]
                        }

                        
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
