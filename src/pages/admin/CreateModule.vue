<template>
    <div>
        <Breadcrumbs main="Dashboard" title="Module"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">

                       <div>
                    <b-tabs
                        active-nav-item-class="h4 font-weight-bold text-uppercase text-danger"
                        active-tab-class="h4 font-weight-bold text-success"
                        content-class="mt-3" align="center"
                    >
                        <b-tab title="Create Course" class="text-dark" active>

                            <div class="card">
                                <div class="card-body">
                                    <label for="">Module Title</label>
                                    <input type="text" style="font-size: 20pt;" placeholder="Enter Module title" class="form-control">
                                </div>
                            </div>
                            
                            <div class="card">
                                <div class="card-header d-none">
                                <h5 class="card-title">Create Module</h5>
                                </div>
                                <div class="card-body">
                                <h5  class="card-title pt-2 pb-3">Description</h5>
                                <vue-editor v-model="description"></vue-editor>

                            
                                <h5 class="card-title pt-5 pb-3">Module Body</h5>
                                 <vue-editor v-model="course_body"></vue-editor>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-body">
                                    <div class="row">

                                        <div class="col-md-6">
    
                                            <div class="form-group pt-md-5 col-md-9">
                                                <label for="">Select Session</label>
                                                <select name="" id="" class="form-control">
                                                    <option value="">Sesson 1</option>
                                                    <option value="">Sesson 2</option>

                                                </select>
                                            </div>
    
                                        </div>
                                        <div class="col-md-6">
    
                                            <div class="">
                                                <div class="form-group mx-auto text-center">
                                                <img v-if="avatar"
                                                onclick="document.getElementById('customFile').click()" 
                                                id="previewImg" 
                                                style="height: 200px; width: 100%; object-fit: cover;" 
                                                class="shadow" 
                                                :src="avatar" >
    
                                                <img v-else
                                                onclick="document.getElementById('customFile').click()" 
                                                id="previewImg" 
                                                style="height: 200px; width: 100%; object-fit: cover;" 
                                                class="shadow" 
                                                src="" >
    
                                                </div> 
                                                <div class="text-center d-none">
                                                    <input @change="previewFile4" ref="file" type="file" id="customFile"  >
                                                    
                                                </div>
    
                                                <div class="form-group text-center">
                                                    <button @click="uploadAvatar()" class="btn btn-primary btn-sm">Upload</button>
                                                </div>
                                            </div>
    
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-body text-center">
                                    <button class="col-md-4  btn-lg btn btn-primary">Create Module</button>
                                </div>
                            </div>
                        
                        </b-tab>

                        <b-tab title="Create Quiz">
                            
                            <div class="card">
                                <div class="card-body">
                                    <div class="col-md-6 mx-auto">
                                        <select name="" id="" class="form-control">
                                            <option value="">Module 1</option>
                                            <option value="">Module 2</option>

                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-body">
                                    <label for="">Questions</label>
                                    <vue-editor v-model="question"></vue-editor>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-body">

                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="">Option A</label>
                                            <vue-editor v-model="question"></vue-editor>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="">Option B</label>
                                            <vue-editor v-model="question"></vue-editor>
                                        </div>
                                                                                <div class="col-md-6">
                                            <label for="">Option C</label>
                                            <vue-editor v-model="question"></vue-editor>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="">Option D</label>
                                            <vue-editor v-model="question"></vue-editor>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="">Option E</label>
                                            <vue-editor v-model="question"></vue-editor>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                        
                        </b-tab>

                        <b-tab title="Create Worksheet">
                            
                            <p>I'm the second tab</p>
                        
                        </b-tab>

                        <b-tab title="All Modules">
                            
						<div class="col-xl-4 col-sm-4 box-col-4" >
							<div class="card">
								<div class="blog-box blog-grid text-center product-box">
									<div class="product-img"><img class="img-fluid top-radius-blog" src="https://vue.pixelstrap.com/cuba/img/1.be9e44f2.jpg" alt="">
										<div class="product-hover">
											<ul>
												<li>
													<router-link to="/jkl" > <i class="icon-link"></i> </router-link>													
												</li>
												<li><i class="icon-import"></i></li>
											</ul>
										</div>
									</div>
									<div class="blog-details-main">
										<ul class="blog-social">
											<li class="digits" >kjkj</li>
											<li class="digits">kjkj</li>
											<li class="digits" >kjkj</li>
										</ul>
										<hr>
										<h6 class="blog-bottom-details" >klkl</h6>
									</div>
								</div>
							</div>
						</div>
                        
                        </b-tab>




                    </b-tabs>
                </div>

        </div>
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>
  import { VueEditor } from 'vue2-editor';
  
  export default {
    components: {
      VueEditor
    },
    data() {
      return {
        description: '',
        course_body: '',
        avatar: ''
      };
    },

    methods: {
                previewFile4(event){


            console.log(event)

               if(event.target.files.length > 0){
                 var preview = document.getElementById("previewImg");
                var src = URL.createObjectURL(event.target.files[0]);

                console.log(preview.src)
                preview.src = src;

                 console.log(src)

                // preview.style.display = "block";
            }

             this.avatar = this.$refs.file.files[0];

            //  console.log(this.avatar)

        },

        uploadAvatar(){

            let formData = new FormData();

            formData.append('avatar', this.avatar);
            formData.append('type', 'avatar');

            this.axios({
                url: process.env.VUE_APP_URL + '/api/profiles',
                method: 'post',
                data: formData,
                headers: {
                    'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                }
            })
            .then((response) =>{

                toast.success('Profile picture Updated');

                console.log(response)
            })
            .catch((response) =>{

                console.log(response)
            })


        },
    },
  };
</script>