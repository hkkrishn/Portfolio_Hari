//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the main component that holds all pages.

import React,{Component} from 'react'
import BaseLayout from '@/components/layouts/baselayout'
import { Container, Row, Col } from 'reactstrap';
import BasePage from '@/components/BasePage'
import Typed from 'react-typed'
import {useGetUser} from '@/actions/user';


const Roles = ['Developer','Tech Lover','Bioinformatics',"React.js","Next.js","AWS","Node.js","Python","Rust","Microservices"]
//functional component that holds the base layout component as well as information of page that is passed down as props.children
const Index=()=>{

  const {data,loading} = useGetUser();
    return(
      <BaseLayout

      user = {data}
      loading = {loading}
      className="cover">

          <div className="main-section">
            <div className="background-image">
              <img src="/images/background-index.png" />
            </div>

            <Container>
              <Row>
                <Col md="6">
                  <div className="hero-section">
                    <div className={`flipper`}>
                      <div className="back">
                        <div className="hero-section-content">
                          <h2> Full Stack Software Engineer </h2>
                          <div className="hero-section-content-intro">
                            Have a look at my portfolio and job history.
                          </div>
                        </div>
                        <img className="image" src="/images/section-1.png"/>
                        <div className="shadow-custom">
                          <div className="shadow-inner"> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" className="hero-welcome-wrapper">
                  <div className="hero-welcome-text">
                    <h1 style = {{fontWeight : "bold",fontSize:"40px"}}>
                      Welcome,<br/>I am Harikrishnan and this is my online<br/> portfolio
                    </h1>
                    <br/>
                    <Typed
                    loop
                      strings={Roles}
                          typeSpeed={70}
                          backSpeed={70}
                          backDelay = {1000}
                          loopCount = {0}
                          showCursor
                          className = "self-typed"
                          cursorChar = "|">
                    </Typed>
                    <h1 style = {{marginTop:"40px"}}>
                      <span style = {{fontWeight:"bold",fontStyle: "italic"}}>discover,interact and collaborate on</span>  projects I have worked on!
                    </h1>

                  </div>
                </Col>
              </Row>
            </Container>
          </div>

      </BaseLayout>
    )

}

export default Index;