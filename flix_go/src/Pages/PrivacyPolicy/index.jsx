import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function PrivacyPolicy() {

  return (
    <>
    {/* header start */}
    <div className="background-container"> 
      <div className='container '>
            <div className='row h-100 py-3'>
                <div className='col-12'>
                    <div className="contentt h-100 w-100 d-flex flex-">
                        <h1 className='tittle'>Privacy Policy</h1>
                        <ul className='d-flex list m-0'>
                            <li className='l-design'>
                              <Link to="/home">Home</Link>
                            </li>
                            <li>
                            <i class="fa-solid fa-arrow-right"></i>
                            </li>
                            <li >privacy policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div> 
        <div className='line'></div>
        {/* header end */}

        <section className='section'>
          <div className='container'>
          <div class="row">

				{/* section text  */}
				<div class="col-12">
					<p class="section__text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

					<p class="section__text">Many desktop publishing packages and <a href="#" style={{color : '#ff568e'}}>web page</a> editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

					<p class="section__text">All the Lorem Ipsum generators on the <b>Internet</b> tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

          <div class="section__list">
						<ol>
							<li>
								<h4 className='mb-5'>Determination of personal information of users</h4>
								<ol>
									<li>If you are going to use a passage of Lorem Ipsum:
										<ol>
											<li>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</li>
											<li>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</li>
										</ol>
									</li>
									<li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</li>
									<li>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</li>
								</ol>
							</li>

							<li>
								<h4>Reasons for collecting and processing user personal information</h4>
								<ol>
									<li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</li>
									<li>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet:
										<ol>
											<li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged;</li>
											<li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages;</li>
											<li>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like);</li>
											<li>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text;</li>
										</ol>
									</li>
								</ol>
							</li>
						</ol>
					</div>
				</div>
        </div>
          </div>
        </section>
        
    </>
  )
}

