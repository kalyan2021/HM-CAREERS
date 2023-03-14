import React from 'react'
import fileUpload from '../images/fileUpload.svg'

export default function JobRecommend() {
  return (
    <div>
        <div className='job-recommend-container'>
            <div className='pt-4 pb-4'>
                <h3 className='job-recommend-matter'>Upload your resume and let our recommender engine suggest jobs from current openings.</h3>
            </div>
            <div className='pt-4 pb-4 row'>
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                <div className='job-recommend-Openingblock'>
                  <div className='job-recommender-block'>
                    <h3 className='undefined' style={{color:'#202020',fontWeight:'400',marginTop:'0'}}>Job Recommender</h3>
                  </div>
                    <div>
                      <form>
                        <div style={{position:"relative"}}>
                          <input type='text' name='fileUploadJob' className='job-recommender-formcontrol'></input>
                          <div className='job-recommender-fileUploadButton'>
                            <label for="upload-button">
                              <img src={fileUpload} alt=''></img>
                            </label>
                            <input type="file" id='upload-button' className='d-none' accept='.doc,.docx,.pdf,.txt'></input>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div style={{textAlign:"left",fontSize:"10px",color:"rgb(39,39,39)"}}>
                    For best results, upload *.doc/*.docx/*.pdf/*.txt format files only (file size should be less than 2MB)
                    </div>
                    <div className='job-recommender-recBlock col-md-12 mt-20'>
                      <button type='button' disabled className='job-recommender-applyBtn btn btn-primary'>Recommend</button>
                    </div>
                </div>
              </div>
              <div className='job-recommender-contentReco mt-5 mt-sm-0 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                <div className='job-recommender-contentTitle'>How Job Recommender Works?</div>
                <p className='job-recommender-content'>The job recommender is an AI powered feature which suggests job opportunities based on your resume.</p>
                <p className='job-recommender-content'>You just need to upload your resume and our recommender engine will scan your resume and suggest suitable job opportunities for you.</p>
              </div>
            </div>
        </div>
    </div>
  )
}
