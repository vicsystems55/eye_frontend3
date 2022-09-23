<template>
	<div>
		<Breadcrumbs main="Learning" title="Detailed Course"/>

		<div class="container-fluid">
           <div>
                    <b-tabs
                        active-nav-item-class="h4 font-weight-bold text-uppercase text-danger"
                        active-tab-class="h4 font-weight-bold text-success"
                        content-class="mt-3" align="center"
                    >
                        <b-tab title="Course" active>
							<div class="row">
								<div class="col-xl-12 ">
									<div>
										
									<b-button v-b-modal.modal-1>Edit Course</b-button>

									<b-modal id="modal-1" size="xl" modal-footer="no" title="Edit Module"
										:footer-class="'d-none'"
									>
										<div class="card card-body">

												<div title="Create Course" class="text-dark" active>

														<div class="car">
															<div class="card-bod">
																<label for="">Module Title</label>
																<input type="text" v-model="title" style="font-size: 20pt;" placeholder="Enter Module title" class="form-control">
															</div>
														</div>
														
														<div class="car">
															<div class="card-header d-none">
															<h5 class="card-title">Create Module</h5>
															</div>
															<div class="card-bod">
															<h5  class="card-title 3">Description</h5>
															<vue-editor v-model="description"></vue-editor>

														
															<h5 class="card-title ">Module Body</h5>
															<vue-editor v-model="course_body"></vue-editor>
															</div>
														</div>

														<div class="car">
															<div class="card-bod">
																<div class="row">

																	<div class="col-md-6">
								
																		<div class="form-group pt-md-5 ">
																			<label for="">Select Session..</label>
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
																			:src="featured_image_url" >
								
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

														<div class="car">
															<div class="card-bod text-center">
																<button v-if="loading" class="col-md-6  btn-lg btn btn-primary">⌛️ </button>
																<button v-else @click="updateModule" class="col-md-6  btn-lg btn btn-primary">Update Module</button>
															</div>
														</div>
													
												</div>

										</div>
									</b-modal>
									</div>
									<div class="blog-single">
									<div class="blog-box blog-details"><img style="max-height: 300px;" class="img-fluid " :src="mod.featured_image" alt="blog-main">
										<div class="blog-details">
										<ul class="blog-social">
											<li class="digits">89889</li>
											<li><i class="icofont icofont-user"></i> jkjk</li>
											<li class="digits"><i class="icofont icofont-thumbs-up"></i>jkjk<span>Hits</span></li>
											<li class="digits"><i class="icofont icofont-ui-chat"></i>jkjk Comments</li>
										</ul>
										<h4 >{{mod.title}}</h4>
										<div class="single-blog-content-top">
											<p v-html="mod.course_body" ></p>
										</div>
										</div>
									</div>
						
									</div>
								</div>

								<div class="col-xl-3 xl-40 d-none">
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

											<div class="col-xl-12">
												<b-card no-body>
													<b-card-header header-tag="div" role="tab">
														<h5 class="mb-0">
															<b-button class="btn btn-link pl-0" block v-b-toggle.collapseicon1>Categories</b-button>
														</h5>
													</b-card-header>
													<b-collapse id="collapseicon1" visible role="tabpanel">
														<div class="categories">
															<div class="learning-header"><span class="f-w-600">Design</span></div>
															<ul>
																<li><a href="#">UI Design </a><span class="badge badge-primary pull-right">28</span></li>
																<li><a href="#">UX Design </a><span class="badge badge-primary pull-right">35</span></li>
																<li><a href="#">Interface Design </a><span class="badge badge-primary pull-right">17</span></li>
																<li><a href="#">User Experience </a><span class="badge badge-primary pull-right">26</span></li>
															</ul>
														</div>
														<div class="categories pt-0">
															<div class="learning-header"><span class="f-w-600">Development</span></div>
															<ul>
																<li><a href="#">Frontend Development</a><span class="badge badge-primary pull-right">48</span></li>
																<li><a href="#">Backend Development</a><span class="badge badge-primary pull-right">19</span></li>
															</ul>
														</div>
													</b-collapse>
												</b-card>
											</div>

											<div class="col-xl-12">
												<b-card no-body>
													<b-card-header header-tag="div" role="tab">
														<h5 class="mb-0">
															<b-button class="btn btn-link pl-0" block v-b-toggle.collapseicon2>Upcoming Courses</b-button>
														</h5>
													</b-card-header>
													<b-collapse id="collapseicon2" visible role="tabpanel">
														<div class="upcoming-course card-body">
															<div class="media">
																<div class="media-body"><span class="f-w-600">UX Development</span><span class="d-block">Course By <a href="#"> Lorem ipsum</a></span><span class="d-block"><i class="fa fa-star font-warning"></i><i class="fa fa-star font-warning"></i><i class="fa fa-star font-warning"></i><i class="fa fa-star font-warning"></i><i class="fa fa-star-half-o font-warning"></i></span></div>
																<div>
																	<h5 class="mb-0 font-primary">18</h5><span class="d-block">Dec</span>
																</div>
															</div>
															<div class="media">
																<div class="media-body"><span class="f-w-600">Business Analyst</span><span class="d-block">Course By <a href="#">Lorem ipsum </a></span><span class="d-block"><i class="fa fa-star font-warning"></i><i class="fa fa-star font-warning"></i><i class="fa fa-star font-warning"></i><i class="fa fa-star font-warning"></i><i class="fa fa-star font-warning"></i></span></div>
																<div>
																	<h5 class="mb-0 font-primary">28</h5><span class="d-block">Dec</span>
																</div>
															</div>
															<div class="media">
																<div class="media-body"><span class="f-w-600">Web Development</span><span class="d-block">Course By <a href="#">Lorem ipsum </a></span><span class="d-block"><i class="fa fa-star font-warning"></i><i class="fa fa-star font-warning"></i><i class="fa fa-star font-warning"></i><i class="fa fa-star font-warning"></i><i class="fa fa-star-o font-warning"></i></span></div>
																<div>
																	<h5 class="mb-0 font-primary">5</h5><span class="d-block">Jan</span>
																</div>
															</div>
														</div>
													</b-collapse>
												</b-card>
											</div>

										</div>
									</div>
								</div>
							</div>
						</b-tab>
                        <b-tab title="Quiz">
									<b-modal id="modal-10" size="xl" :footer-class="'d-none'" title="BootstrapVue">
										<div class="card">
											<div class="card-bod">
												<label for="">Questions</label>
												<vue-editor v-model="edit_question"></vue-editor>
											</div>
										</div>

										<div class="card">
											<div class="card-bod">

												<div class="row">
													<div class="col-md-6">
														<label for="">Option A</label>
														<vue-editor v-model="edit_optiona"></vue-editor>
													</div>
													<div class="col-md-6">
														<label for="">Option B</label>
														<vue-editor v-model="edit_optionb"></vue-editor>
													</div>
																							<div class="col-md-6">
														<label for="">Option C</label>
														<vue-editor v-model="edit_optionc"></vue-editor>
													</div>
													<div class="col-md-6">
														<label for="">Option D</label>
														<vue-editor v-model="edit_optiond"></vue-editor>
													</div>
													<div class="col-md-6">
														<label for="">Option E</label>
														<vue-editor v-model="edit_optione"></vue-editor>
													</div>
												</div>
				
											</div>
											<div class="col-md-12 mx-auto  py-3 ">
												<div class="col-md-6 mx-auto text-center">
													<button class="btn bt-lg btn-primary">Update Quiz</button>

												</div>
											</div>
										</div>
									</b-modal>

									<b-button class="d-none" id="mod" v-b-modal.modal-10>Edit Quiz</b-button>
							<div v-for="quiz,key in quizes" :key="quiz.index" class="card">
								<div class="card-body">
								


									
									<div v-html="quiz.question" class="c"></div>

									<div class="container">
										<div class="row">
											<div class="col-md-4">
												
												<input type="radio" :id="(quiz.id)+'ans'" v-model="q[key]" :value="resolveAnswer(userData.id, quiz.id, quiz.a)"  class="form-check-input">
												<h6>A. <div v-html="quiz.a"></div></h6>
											</div>
											<div class="col-md-4">
												
												<input type="radio" :id="(quiz.id)+'ans'" v-model="q[key]" :value="resolveAnswer(userData.id, quiz.id, quiz.b)"  class="form-check-input">
												<h6>B. <div v-html="quiz.b"></div></h6>
											</div>
											<div class="col-md-4">
												
												<input type="radio" :id="(quiz.id)+'ans'" v-model="q[key]" :value="resolveAnswer(userData.id, quiz.id, quiz.c)"  class="form-check-input">
												<h6>C. <div v-html="quiz.c"></div></h6>	
											</div>
											<div class="col-md-4">
												
												<input type="radio" :id="(quiz.id)+'ans'" v-model="q[key]" :value="resolveAnswer(userData.id, quiz.id, quiz.d)"  class="form-check-input">
												<h6>D. <div v-html="quiz.d"></div></h6>
											</div>
											<div class="col-md-4">
												
												<input type="radio" :id="(quiz.id)+'ans'" v-model="q[key]" :value="resolveAnswer(userData.id, quiz.id, quiz.e)"  class="form-check-input">
												<h6>E. <div v-html="quiz.e"></div></h6>
												
											</div>
										</div>

									</div>

									
									<button @click="showModal(quiz.id)" :class="'btn btn-warning '+userData.role=='admin'?'':'d-none'">Edit</button>

									
								</div>
							</div>

							<button @click="answerQuiz()" class="'btn btn-primary ">Submit</button>



							
							<div class="card d-none">
                                <div class="card-body">
                                    <div class="col-md-6 mx-auto">
                                        <select name="" id="" class="form-control">
                                            <option value="">Module 1</option>
                                            <option value="">Module 2</option>

                                        </select>
                                    </div>
                                </div>
                            </div>

							<div :class="userData.role=='admin'?'':'d-none'">
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
												<vue-editor v-model="optiona"></vue-editor>
											</div>
											<div class="col-md-6">
												<label for="">Option B</label>
												<vue-editor v-model="optionb"></vue-editor>
											</div>
																					<div class="col-md-6">
												<label for="">Option C</label>
												<vue-editor v-model="optionc"></vue-editor>
											</div>
											<div class="col-md-6">
												<label for="">Option D</label>
												<vue-editor v-model="optiond"></vue-editor>
											</div>
											<div class="col-md-6">
												<label for="">Option E</label>
												<vue-editor v-model="optione"></vue-editor>
											</div>
										</div>

										<div class="col-md-12 mx-auto  py-3 ">
											<div class="col-md-6 mx-auto text-center">
												<button v-if="loadingq" class="btn bt-lg btn-primary" disabled>Creating Quiz...</button>

												<button v-else @click="createQuiz()" class="btn bt-lg btn-primary">Create Quiz</button>

											</div>
										</div>
		
									</div>
								</div>
							</div>
							
						</b-tab>
                        <b-tab title="Worksheet">

									<b-modal id="modal-2" size="md" :footer-class="'d-none'" title="BootstrapVue">
										<div class="card">
											<div class="card-body">
												<label for="">Questions</label>
												<textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
											</div>
										</div>


									</b-modal>
									<b-button v-b-modal.modal-2>Edit Quiz</b-button>

							<div v-for="worksheet in worksheets" :key="worksheet.id" class="card">
								<div class="card-body">
								


									<h6>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</h6>
									
									
								</div>
							</div>
							
							<div class="card">
								<div class="card-body col-md-12 mx-auto">


									<div class="form-group">
										<textarea v-model="question" id="" cols="30" rows="5" placeholder="Enter question" class="form-control"></textarea>

									</div>

									<div class="form-group">
										<input type="text" class="form-control" v-model="prefered_answer">
									</div>

									<div class="row">
										<div class="col-md-6">
											<select v-model="theme" id="" class="form-control">
												<option :value="'theme1'">theme 1</option>
												<option :value="'theme2'">theme 2</option>
												<option :value="'theme3'">theme 3</option>
											</select>
										</div>
										<div class="col-md-6">
											<select v-model="exercise" id="" class="form-control">
												<option value="'1'">Exercise 1</option>
												<option value="'2'">Excercise 2</option>
												<option :value="'3'">Excercise 3</option>
											</select>
										</div>
										<div class="col-md-6">
											<select v-model="category" id="" class="form-control">
												<option value="'1'">Category 1</option>
												<option value="'2'">Category 2</option>
												<option :value="'3'">Category 3</option>
											</select>
										</div>

									</div>

									<div class="form-group py-2">
										<select name="" id="" class="form-control">
											<option value="">Type A</option>
											<option value="">Type B</option>
										</select>
									</div>

									

									<div class="py-2">
										<button @click="createWorksheet" class="btn btn-primary">Create Question</button>
									</div>
								</div>
							</div>



						</b-tab>


                    </b-tabs>
                </div>

          </div>
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

		loadingq: false,
		title: '',
        description: '',
        course_body: '',
        avatar: '',
		mod: '',
		session: '',

		quizes: [],

		worksheets: [],

		question: '',

		featured_image: '',

		module_code: '',

		featured_image_url: '',

		loading: false,
		
		loadingw: false,

		optiona: '',
		optionb: '',
		optionc: '',
		optiond: '',
		optione: '',

		edit_question: '',

		edit_questionx: '',


		edit_optiona: '',

		edit_optionb: '',

		edit_optionc: '',

		edit_optiond: '',

		edit_optione: '',


		theme: '',
		exercise: '',
		category: '',
		question_type: '',
		question: '',
		description: '',
		prefered_answer: '',

		userDatax: [],
		userData: [],

		q: [],
		a: []

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

	updateModule(){


		this.loading = true

		let formData = new FormData();

		formData.append('featured_image', this.featured_image)
		formData.append('type', 'avatar')
		formData.append('title', this.title)
        formData.append('description', this.description)
        formData.append('course_body', this.course_body)
        formData.append('avatar', this.avatar)
        formData.append('module_code', this.module_code)
		formData.append('session', this.session)


		axios({
			url: process.env.VUE_APP_URL + '/api/update_module',
			method: 'post',
			data: formData,
			headers: {
				'Authorization': 'Bearer ' +localStorage.getItem('user_token'),
				'Content-Type': 'multipart/form-data'
			}
		})
		.then((response) =>{

			console.log(response)

			this.loading = false

            this.$toasted.show(' Module Updated!!', { theme: 'outline',position: 'top-right', type: 'success', duration: 2000 });

                if (localStorage.getItem('reloadedx')) {
                    // The page was just reloaded. Clear the value from local storage
                    // so that it will reload the next time this page is visited.
                    localStorage.removeItem('reloadedx');
                    } else {
                        // Set a flag so that we know not to reload the page twice.9989887
                        localStorage.setItem('reloadedx', '1');
                        location.reload();
                    }

		})
		.catch((response) =>{

			this.loading = false

			console.log(response)
		})

	},

	getModule(){

		axios({
			url: process.env.VUE_APP_URL + '/api/modules',
			method: 'get',
			params: {
				module_code: this.$route.params.id
			},
			headers: {
				'Authorization': 'Bearer ' +localStorage.getItem('user_token')
			}
		})
		.then((response) =>{

			// toast.success('Profile picture Updated');

			this.mod = response.data

			this.course_body = response.data.course_body

			this.description = response.data.description

			this.title = response.data.title

			this.session = response.data.session

			this.featured_image_url = response.data.featured_image

			this.module_code = response.data.module_code


			console.log(response)
		})
		.catch((response) =>{

			console.log(response)
		})

	},

	getQuiz(){

		axios({
			url: process.env.VUE_APP_URL + '/api/quizes',
			method: 'get',
			params: {
		
			},
			headers: {
				'Authorization': 'Bearer ' +localStorage.getItem('user_token')
			}
		})
		.then((response) =>{

			// toast.success('Profile picture Updated');

			this.quizes = response.data

			console.log(response)
		})
		.catch((response) =>{

			console.log(response)
		})
	},

	createQuiz(){

		this.loadingq = true

		axios({
			url: process.env.VUE_APP_URL + '/api/create_quiz',
			method: 'post',
			data: {
				question: this.question,
				optiona: this.optiona,
				optionb: this.optionb,
				optionc: this.optionc,
				optiond: this.optiond,
				optione: this.optione,
			},
			headers: {
				'Authorization': 'Bearer ' +localStorage.getItem('user_token'),

			}
		})
		.then((response) =>{

			this.loadingq = false

			console.log(response)

			this.loading = false

            this.$toasted.show(' Quiz Created!!', { theme: 'outline',position: 'top-right', type: 'success', duration: 2000 });

			this.getQuiz()

		})
		.catch((response) =>{

			this.loading = false

			console.log(response)
		})

	},

	showModal(mode_id){
		document.getElementById('mod').click()

		this.edit_questionx = 
                    this.quizes.filter(element => 
                                        (element.id == mode_id))
		console.log(this.edit_questionx[0])

		this.edit_question = this.edit_questionx[0].question




	},

	createWorksheet(){

		this.loadingw = true

		axios({
			url: process.env.VUE_APP_URL + '/api/worksheets',
			method: 'post',
			data: {
				module_id: this.route.params.id,
				theme: this.theme,
				exercise: this.exercise,
				category: this.category,
				question_type: this.question_type,
				question: this.question,
				description: this.description,
				prefered_answer: this.prefered_answer,
			},
			headers: {
				'Authorization': 'Bearer ' +localStorage.getItem('user_token'),

			}
		})
		.then((response) =>{

			this.loadingw = false

			console.log(response)

			this.loading = false

            this.$toasted.show(' Worksheet Created!!', { theme: 'outline',position: 'top-right', type: 'success', duration: 2000 });

			this.getWorksheets()

		})
		.catch((response) =>{

			this.loadingw = false

			console.log(response)
		})

	},

	getWorksheets(){


		this.loadingw = true

		axios({
			url: process.env.VUE_APP_URL + '/api/worksheets',
			method: 'get',
			params: {
				module_code: this.$route.params.id,
			},
			headers: {
				'Authorization': 'Bearer ' +localStorage.getItem('user_token'),

			}
		})
		.then((response) =>{

			this.loadingw = false,

			worksheets

			console.log(response)

			this.loading = false

		})
		.catch((response) =>{

			this.loadingw = false

			console.log(response)
		})

	},
	getUser(){

		this.userDatax = JSON.parse(localStorage.getItem('user_data'));

		axios({
			url: process.env.VUE_APP_URL + '/api/users',
			method: 'get',
			params: {
				usercode: this.userDatax.usercode,
			},
			headers: {
				'Authorization': 'Bearer ' +localStorage.getItem('user_token'),

			}
		})
		.then((response) =>{

			this.userData = response.data

			alert(this.userData.role)

			console.log(response)


		})
		.catch((response) =>{

			this.loadingw = false

			console.log(response)
		})
	},

	answerQuiz(){
		
		axios({
			url: process.env.VUE_APP_URL + '/api/submit_answer',
			method: 'post',
			data: {
				answers: this.q
			},
			headers: {
				'Authorization': 'Bearer ' +localStorage.getItem('user_token'),

			}
		})
		.then((response) =>{

			console.log(response)


		})
		.catch((response) =>{

			console.log(response)
		})
	},

	resolveAnswer(user_id, quiz_id, quiz_answer){


		const myObject = {};

		Object.assign(myObject, {
			user_id: user_id,
			quiz_id: quiz_id,
			quiz_answer: quiz_answer,

		});

		return myObject;
	}




    },

	mounted() {
		this.getModule()
		this.getQuiz()
		this.getWorksheets()
		this.getUser()
	},
  };
</script>