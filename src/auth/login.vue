<template>
  <div>
    <!-- page-wrapper Start-->
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
              <div class="login-main">
                <b-card no-body>
                  <b-tabs pills vertical>
                    <b-tab active>
                      <template #title>
                        <img
                          src="../assets/images/login/firebase.svg"
                          id="firebase-tooltip"
                        />
                        <span>Firebase Login</span>
                      </template>
                      <b-card-text>
                        <form class="theme-form">
                          <h4>Sign in to account</h4>
                          <p>Enter your email & password to login</p>
                          <div class="form-group">
                            <label class="col-form-label">Email Address</label>
                            <input
                              v-model="email"
                              class="form-control"
                              type="email"
                              required=""
                              placeholder="Test@gmail.com"
                              :class="{
                                'is-invalid': submitted && !email,
                              }"
                            />
                            <div
                              v-show="submitted && !email"
                              class="invalid-feedback"
                            >
                              Email is required
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-form-label">Password</label>
                            <input
                              v-model="password"
                              autocomplete=""
                              class="form-control"
                              :type="type"
                              name="login[password]"
                              required=""
                              placeholder="*********"
                              :class="{
                                'is-invalid': submitted && !email,
                              }"
                            />
                            <div
                              v-show="submitted && !password"
                              class="invalid-feedback"
                            >
                              Email is required
                            </div>
                            <div class="show-hide" @click="showPassword">
                              <span class="show"></span>
                            </div>
                          </div>
                          <div class="form-group mb-0">
                            <div class="checkbox p-0">
                              <input id="checkbox1" type="checkbox" />
                              <label class="text-muted" for="checkbox1"
                                >Remember password</label
                              >
                            </div>
                            <button
                              class="btn btn-primary btn-block"
                              type="button"
                              @click="signUp"
                            >
                              Login
                            </button>
                          </div>
                          <h6 class="text-muted mt-4 or">Or Sign in with</h6>
                          <div class="social mt-4 d-none">
                            <div class="btn-showcase">
                              <a class="btn btn-light" @click="socialLogin">
                                <i class="fa fa-google txt-linkedin"></i>
                                Google
                              </a>
                              <a
                                class="btn btn-light"
                                @click="socialLoginTwitter"
                              >
                                <feather
                                  type="twitter"
                                  class="txt-twitter"
                                ></feather
                                >twitter</a
                              >
                              <a
                                class="btn btn-light"
                                @click="socialLoginFacebook"
                              >
                                <feather
                                  type="facebook"
                                  class="txt-fb"
                                ></feather
                                >facebook</a
                              >
                            </div>
                          </div>
                          <p class="mt-4 mb-0">
                            Don't have account?
                            <router-link
                              class="ml-2"
                              tag="a"
                              to="/auth/register"
                            >
                              Create Account
                            </router-link>
                          </p>
                        </form>
                      </b-card-text>
                    </b-tab>
                    <b-tab>
                      <template #title>
                        <img src="../assets/images/login/auth0.svg" />
                        <span>Auth0</span>
                      </template>
                      <b-card-text>
                        <form class="theme-form">
                          <img src="../assets/images/login/auth-img.svg" />
                          <h4>Sign in to Auth0 account</h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy.
                          </p>
                          <div class="form-group mt-3 mb-0">
                            <button
                              @click="login"
                              class="btn btn-secondary btn-block"
                              type="button"
                            >
                              Login With Auth0
                            </button>
                          </div>
                          <p class="mt-4 mb-0">
                            Don't have account?<router-link
                              class="ml-2"
                              tag="a"
                              to="/auth/register"
                            >
                              Create Account
                            </router-link>
                          </p>
                        </form>
                      </b-card-text>
                    </b-tab>
                    <b-tab>
                      <template #title>
                        <img src="../assets/images/login/jwt.svg" />
                        <span>JWT</span>
                      </template>
                      <b-card-text>
                        <div class="alert alert-info">
                          Username: test<br />
                          Password: test
                        </div>
                        <form class="theme-form" @submit.prevent="handleSubmit">
                          <div class="form-group">
                            <label for="username">Username</label>
                            <input
                              type="text"
                              v-model="username"
                              name="username"
                              class="form-control"
                              :class="{ 'is-invalid': submitted && !username }"
                            />
                            <div
                              v-show="submitted && !username"
                              class="invalid-feedback"
                            >
                              Username is required
                            </div>
                          </div>
                          <div class="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                              type="password"
                              v-model="passwordjwt"
                              name="password"
                              class="form-control"
                              :class="{
                                'is-invalid': submitted && !passwordjwt,
                              }"
                            />
                            <div
                              v-show="submitted && !passwordjwt"
                              class="invalid-feedback"
                            >
                              Password is required
                            </div>
                          </div>
                          <div class="form-group mt-3 mb-0">
                            <button
                              class="btn btn-primary btn-block"
                              :disabled="loggingIn"
                            >
                              Login
                            </button>
                          </div>
                          <p class="mt-4 mb-0">
                            Don't have account?
                            <router-link
                              class="ml-2"
                              tag="a"
                              to="/auth/register"
                            >
                              Create Account
                            </router-link>
                          </p>
                        </form>
                      </b-card-text>
                    </b-tab>
                  </b-tabs>
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- latest jquery-->
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
                            console.log(response);


                    })
                    .catch( (response)=> {

                      this.loading = false

                        console.log(response);

                    });
              
          
          }
    },
  }
</script>

