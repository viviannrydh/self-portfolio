import React from 'react';
import {motion} from 'framer-motion';
import{BodyWrapper,HeaderWrapper, StyledButton, SectionWrapper,SectionHeaderStyle, 
  CardsWrapper,Card, CardImg, CardText, ListsWrapper, ListItem, 
  ListImg, ListText, ProjectsWrapper,Project, ProjectImg, 
  ProjectButtons, ProjectContent, SkillsList, ContentWrapper, 
  ProjectIntroduction, Button} from './style-vivian.js';
import Jensen from './images/Jensen-logo.png';
import MasterDegree from './images/mdh-logo.jpeg';
import BachelorDegree from './images/Jinan_University_Logo.png';
import { Wave } from 'react-animated-text';
import HTML from './images/HTML5logo.png';
import CSS from './images/CSS3_logo.png';
import JavaScript from './images/javascript-logo.png';
import ReactLogo from './images/react.png';
import AdvancedJavaScript from './images/advanced-javascript.png';
import Agile from './images/agile.png'
import jQuery from './images/jQuery.png';
import Design from './images/ux-ui.png';
import MovieApi from './images/movie_API.png';
import Figma from './images/figma.png';
import RentingApp from './images/Renting APP.png';
import TrainingApp from './images/training app.png';
import Product from './images/Product_API.png';
import Menu from './images/Menu.png';
import Todo from './images/Todo list.png';
import Task from './images/Task tracker.png'
import daycare from './images/daycare.png'
import Footer from './components/Footer.js';
import Nav from './components/Nav.js';
import Contact from './components/Contact'

function App() {
  const variants = {
    hidden: {
      opacity: 0,
      transition: { duration: 1 },
    },
    visible: { opacity: 1 },
  }
  return (
    <BodyWrapper>
      <Nav />
      <HeaderWrapper id="header">
          <Wave 
            text="Viviann Wang Rydh" 
            effectChange={2.2}  
            effect="verticalFadeIn"
            effectDirection="left" 
            iterations={1}/>
          <motion.span 
            style={{fontSize:'0.5em'}}
            initial="hidden"
            animate="visible"
            variants={variants}> 
            Front-end web developer
          </motion.span>
          <br/>
          <br/>
          <StyledButton>
          <a href="#contact" style={{color:'white',textDecoration:'none'}}>
          About me &#8594;</a>
          </StyledButton>
      </HeaderWrapper>
      <br/>
      <br/>
      <br/>
      <br/>
      <hr style={{color:'rgb(121, 64, 121)'}}/>

      <SectionWrapper id="education">
          <SectionHeaderStyle><a href="#header" style={{color:'white', textDecoration:'none'}}>.Eduction=&#123; &#125;</a></SectionHeaderStyle>
          <CardsWrapper>
              <Card whileHover={{ backgroundColor: 'rgb(160, 202, 238)' }}>
                  <CardImg src={Jensen} alt="Jensen logo"/>
                  <CardText>
                    <h4>Front-end Web Development</h4>
                    <p style={{fontWeight:'bold', color:'darkblue'}}>Yrkesutbildning</p>
                    <span>2020.8--2022.7</span>
                  </CardText>
                  
              </Card>
              <Card whileHover={{ backgroundColor: 'rgb(160, 202, 238)' }}>
                  <CardImg src={MasterDegree} alt="MDH"/>
                  <CardText>
                    <h4>International Marketing</h4>
                    <p style={{fontWeight:'bold', color:'orangered'}}>Master Degree</p>
                    <span>2008.8--2009.8</span>
                  </CardText>
              </Card>
              <Card whileHover={{ backgroundColor: 'rgb(160, 202, 238)'}}>
                  <CardImg src={BachelorDegree} alt="Jinan University"/>
                  <CardText>
                    <h4>Tourism Management</h4>
                    <p style={{fontWeight:'bold', color:'rgb(3, 75, 57)'}}>Bachelor Degree</p>
                    <span>2003.6--2007.7</span>
                  </CardText>
              </Card>
          </CardsWrapper>
      </SectionWrapper>
      <SectionWrapper id="skills">
            <SectionHeaderStyle><a href="#header" style={{color:'white', textDecoration:'none'}}>.Skills=&#123; &#125;</a></SectionHeaderStyle>
            <img src="" alt=""/>
            <ListsWrapper>
             {/* <ListItem>
                <ListImg src={HTML} alt="HTML" />
                <ListText>HTML</ListText>
              </ListItem>*/}
              <ListItem>
                <ListImg src={Figma} alt="Figma"/>
                <ListText>Figma</ListText>
              </ListItem>
              <ListItem>
                <ListImg src={JavaScript} alt="JavaScript" />
                <ListText>JavaScript</ListText>
              </ListItem>
              <ListItem>
                <ListImg src={ReactLogo} alt="React" />
                <ListText>React</ListText>
              </ListItem>
              <ListItem>
                <ListImg src={AdvancedJavaScript} alt="Advanced JavaScript"/>
                <ListText>Advanced JavaScript</ListText>
              </ListItem>
              <ListItem>
                <ListImg src={Design} alt="Design"/>
                <ListText>UX/UI</ListText>
              </ListItem>
              <ListItem>
                <ListImg src={Agile} alt="Agile"/>
                <ListText>Agile Project Management</ListText>
              </ListItem>
              <ListItem>
                <ListImg src={jQuery} alt="jQuery"/>
                <ListText>jQuery</ListText>
              </ListItem>
            </ListsWrapper>
      </SectionWrapper>
      <SectionWrapper id="projects">
            <SectionHeaderStyle><a href="#header" style={{color:'white', textDecoration:'none'}}>.Projects=&#123; &#125;</a></SectionHeaderStyle>
            <ProjectsWrapper>
                <Project>
                    <ProjectImg src={MovieApi} alt="Movie_API"/>
                    <ContentWrapper>
                        <ProjectButtons>
                          <Button style={{marginTop:'10px'}}>View on Github</Button>
                          <Button>View Live Version</Button>
                        </ProjectButtons>
                        <ProjectContent>
                          <ProjectIntroduction>
                            <p><strong>Movie Search</strong>--site that allows the user to search movies from the IMDB API</p>
                          </ProjectIntroduction>
                          <SkillsList>
                            <span><strong>Skills: </strong></span>
                            <li>IMDB API</li>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>CSS Module</li>
                            <li>HTML</li>
                          </SkillsList>
                        </ProjectContent>
                    </ContentWrapper>
                </Project> 
                <Project>
                    <ProjectImg src={RentingApp} alt='Renting APP'/>
                    <ContentWrapper>
                        <ProjectButtons>
                          <Button style={{marginTop:'10px'}}>View on Github</Button>
                          <Button>View Live Version</Button>
                        </ProjectButtons>
                        <ProjectContent>
                          <ProjectIntroduction>
                            <p><strong>Seconde hand renting website</strong>--site that allows the user to rent machines from others</p>
                          </ProjectIntroduction>
                          <SkillsList>
                            <span><strong>Skills:</strong></span>
                            <li>Figma</li>
                          </SkillsList>
                        </ProjectContent>
                    </ContentWrapper>
                </Project> 
                <Project>
                    <ProjectImg src={daycare} alt='dog-daycare'/>
                    <ContentWrapper>
                        <ProjectButtons>
                          <Button style={{marginTop:'10px'}}>View on Github</Button>
                          <Button>View Live Version</Button>
                        </ProjectButtons>
                        <ProjectContent>
                          <ProjectIntroduction>
                            <p><strong>Dog's daycare website</strong>-A dog dagis website.</p>
                          </ProjectIntroduction>
                          <SkillsList>
                            <span><strong>Skills: </strong></span>
                            <li>HTML</li>
                            <li>CSS</li>
                          </SkillsList>
                        </ProjectContent>
                    </ContentWrapper>
                </Project> 
                <Project>
                    <ProjectImg src={Product} alt="Product APP"/>
                    <ContentWrapper>
                        <ProjectButtons>
                          <Button style={{marginTop:'10px'}}>View on Github</Button>
                          <Button>View Live Version</Button>
                        </ProjectButtons>
                        <ProjectContent>
                          <ProjectIntroduction>
                            <p><strong>Product APP</strong>--A product catelog website</p>
                          </ProjectIntroduction>
                          <SkillsList>
                            <span><strong>Skills: </strong></span>
                            <li>Node.js</li>
                            <li>React</li>
                            <li>Mongo DB</li>
                            <li>Framer motion</li>
                            <li>Styled Components</li>
                          </SkillsList>
                        </ProjectContent>
                    </ContentWrapper>
                </Project> 
                <Project>
                    <ProjectImg src={TrainingApp} alt="Trainning App"/>
                    <ContentWrapper>
                        <ProjectButtons>
                          <Button style={{marginTop:'10px'}}>View on Github</Button>
                          <Button>View Live Version</Button>
                        </ProjectButtons>
                        <ProjectContent>
                          <ProjectIntroduction>
                            <p><strong>Training App</strong>--A spcial designed trainning App to encourage users to train more</p>
                          </ProjectIntroduction>
                          <SkillsList>
                            <span><strong>Skills: </strong></span>
                            <li>Figma</li>
                          </SkillsList>
                        </ProjectContent>
                    </ContentWrapper>
                </Project> 
                <Project>
                    <ProjectImg src={Task} alt='Task Track'/>
                    <ContentWrapper>
                        <ProjectButtons>
                          <Button>View on Github</Button>
                          <Button style={{marginTop:'10px'}}>View Live Version</Button>
                        </ProjectButtons>
                        <ProjectContent>
                          <ProjectIntroduction>
                            <p><strong>Task Management</strong>--site that helps the user to manage their tasks</p>
                          </ProjectIntroduction>
                          <SkillsList>
                            <span><strong>Skills: </strong></span>
                            <li>React</li>
                          </SkillsList>
                        </ProjectContent>
                    </ContentWrapper>
                </Project> 
                <Project>
                    <ProjectImg src={Menu} alt='Menu'/>
                    <ContentWrapper>
                        <ProjectButtons>
                          <Button style={{marginTop:'10px'}}>View on Github</Button>
                          <Button>View Live Version</Button>
                        </ProjectButtons>
                        <ProjectContent>
                          <ProjectIntroduction>
                            <p><strong>Meal Search</strong>--site that allows the user to search for different meals based on categories, areas, or ingredients.</p>
                          </ProjectIntroduction>
                          <SkillsList>
                            <span><strong>Skills:</strong></span>
                            <li>TheMealDB API</li>
                            <li>React</li>
                          </SkillsList>
                        </ProjectContent>
                    </ContentWrapper>
                </Project> 
                <Project>
                    <ProjectImg src={Todo} alt='Todo list'/>
                    <ContentWrapper>
                        <ProjectButtons>
                          <Button>View on Github</Button>
                          <Button>View Live Version</Button>
                        </ProjectButtons>
                        <ProjectContent>
                          <ProjectIntroduction>
                            <p><strong>Todo Lists</strong>--site that allows the user to manager their todo lists and change the todo lists' status</p>
                          </ProjectIntroduction>
                          <SkillsList>
                            <span><strong>Skills:</strong></span>
                            <li>React</li>
                          </SkillsList>
                        </ProjectContent>
                    </ContentWrapper>
                </Project> 
            </ProjectsWrapper>
      </SectionWrapper>
      <Contact />
      <Footer />
    </BodyWrapper>
  );
}

export default App;
