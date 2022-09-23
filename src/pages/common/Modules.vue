<template>
	<div>
		<Breadcrumbs main="Learning" title="Learning List"/>

		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-9 xl-60">
					<div class="row">
					

						<div v-for="mod,index in modules" :key="index.id" class="col-xl-4 xl-50 col-sm-6 box-col-6" >
							<div class="card">
								<div class="blog-box blog-grid text-center product-box">
									<div class="product-img"><img style="object-fit: cover; height: 230px;" class="img-fluid top-radius-blog" :src="mod.featured_image" alt="">
										<div class="product-hover">
											<ul>
												<li>
													<router-link :to="'/admin/module/'+mod.module_code" > <i class="icon-link"></i> </router-link>													
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
										<h6 class="blog-bottom-details" >{{mod.title}}</h6>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div class="col-xl-3 xl-40">
					<div class="default-according style-1 faq-accordion job-accordion" id="accordionoc">
						<div class="row">

							<div class="col-xl-12">
								<b-card no-body>
									<b-card-header header-tag="div" role="tab">
										<h5 class="mb-0">
											<b-button class="btn btn-link pl-0" block v-b-toggle.collapseicon>Find Course</b-button>
										</h5>
									</b-card-header>
									<b-collapse id="collapseicon" visible role="tabpanel">
										<b-card-body class="filter-cards-view animate-chk">
											<div class="job-filter">
												<div class="faq-form">
													<input class="form-control" type="text" placeholder="Search.."><feather class="search-icon" type="search"></feather>
												</div>
											</div>
											<div class="checkbox-animated">
												<div class="learning-header"><span class="f-w-600">Categories</span></div>
												<label class="d-block" for="chk-ani">
													<input class="checkbox_animated" id="chk-ani" type="checkbox">Accounting
												</label>
												<label class="d-block" for="chk-ani0">
													<input class="checkbox_animated" id="chk-ani0" type="checkbox">Design
												</label>
												<label class="d-block" for="chk-ani1">
													<input class="checkbox_animated" id="chk-ani1" type="checkbox">Development
												</label>
												<label class="d-block" for="chk-ani2">
													<input class="checkbox_animated" id="chk-ani2" type="checkbox">Management
												</label>
											</div>
											<div class="checkbox-animated mt-0">
												<div class="learning-header"><span class="f-w-600">Duration</span></div>
												<label class="d-block" for="chk-ani6">
													<input class="checkbox_animated" id="chk-ani6" type="checkbox">0-50 hours
												</label>
												<label class="d-block" for="chk-ani7">
													<input class="checkbox_animated" id="chk-ani7" type="checkbox">50-100 hours
												</label>
												<label class="d-block" for="chk-ani8">
													<input class="checkbox_animated" id="chk-ani8" type="checkbox">100+ hours
												</label>
											</div>
											<div class="checkbox-animated mt-0">
												<div class="learning-header"><span class="f-w-600">Price</span></div>
												<label class="d-block" for="edo-ani">
													<input class="radio_animated" id="edo-ani" type="radio" name="rdo-ani" checked="">All Courses
												</label>
												<label class="d-block" for="edo-ani1">
													<input class="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" checked="">Paid Courses
												</label>
												<label class="d-block" for="edo-ani2">
													<input class="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" checked="">Free Courses
												</label>
											</div>
											<div class="checkbox-animated mt-0">
												<div class="learning-header"><span class="f-w-600">Status</span></div>
												<label class="d-block" for="chk-ani3">
													<input class="checkbox_animated" id="chk-ani3" type="checkbox">Registration
												</label>
												<label class="d-block" for="chk-ani4">
													<input class="checkbox_animated" id="chk-ani4" type="checkbox">Progress
												</label>
												<label class="d-block" for="chk-ani5">
													<input class="checkbox_animated" id="chk-ani5" type="checkbox">Completed
												</label>
											</div>

											<button class="btn btn-primary text-center" type="button">Filter</button>
										</b-card-body>
									</b-collapse>
								</b-card>
							</div>



						</div>
					</div>
				</div>

			</div>

			<div class="cd">

				    <div title="Create Course" class="text-dark" active>

                            <div class="card">
                                <div class="card-body">
                                    <label for="">Module Title</label>
                                    <input type="text" v-model="title" style="font-size: 20pt;" placeholder="Enter Module title" class="form-control">
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
                                                <select v-model="session" id="" class="form-control">
                                                    <option :value="'Season 1'">Sesson 1</option>
                                                    <option :value="'Season 2'">Sesson 2</option>

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
    
                                                <div class="form-group text-center d-none">
                                                    <button @click="uploadAvatar()" class="btn btn-primary btn-sm">Upload</button>
                                                </div>
                                            </div>
    
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-body text-center">
                                    <button v-if="loading" class="col-md-4  btn-lg btn btn-primary">⌛️ </button>
									 <button v-else @click="createModule" class="col-md-4  btn-lg btn btn-primary">Create Module</button>
                                </div>
                            </div>
                        
                    </div>

			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';

import { VueEditor } from 'vue2-editor';

import axios from 'axios'


export default{

	components: {
      VueEditor
    },

    data() {
      return {
		title: '',
        description: '',
        course_body: '',
        avatar: '',
		session:'',
		featured_image:'',

		modules: [],

		loading: false,

		loadingx: false

      };
    },

    name:'Learninglist',

    computed: {
      ...mapGetters({
        specialcourses:'courses/specialcourses',
        normalcourses:'courses/normalcourses'
      })
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

             this.featured_image = this.$refs.file.files[0];

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

		createModule(){


			this.loading = true

		let formData = new FormData();

		formData.append('featured_image', this.featured_image)
		formData.append('type', 'avatar')
		formData.append('title', this.title)
        formData.append('description', this.description)
        formData.append('course_body', this.course_body)
        formData.append('avatar', this.avatar)
		formData.append('session', this.session)
		formData.append('featured_image', this.featured_image)

		axios({
			url: process.env.VUE_APP_URL + '/api/modules',
			method: 'post',
			data: formData,
			headers: {
				'Authorization': 'Bearer ' +localStorage.getItem('user_token')
			}
		})
		.then((response) =>{



			this.loading = false

                      this.$toasted.show(' Module Created!!', { theme: 'outline',position: 'top-right', type: 'success', duration: 2000 });

			this.getModules()

			console.log(response)
		})
		.catch((response) =>{

			this.loading = false

			console.log(response)
		})

		},

		getModules(){

			this.loadingx = true
			
			axios({
			url: process.env.VUE_APP_URL + '/api/modules',
			method: 'get',
			// data: formData,
			headers: {
				'Authorization': 'Bearer ' +localStorage.getItem('user_token')
			}
		})
		.then((response) =>{

			this.loadingx = false

			this.modules = response.data

			console.log(response)

		})
		.catch((response) =>{

			this.loadingx = false

			console.log(response)
		})
		}
    },

	mounted(){
		this.getModules()
	}
  };
</script>