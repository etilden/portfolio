import React from 'react';
import './App.css';
import image from './square_.png'
import ahoyImg from "./ahoy.png";
import cubeClickerImg from "./cubeClicker.png"
import markdownEditorImg from "./markdownEditor.png"
import omnivoreStoreImg from "./omnivoreStore.png"
import Project from "./project"
import { IoIosArrowDown } from "react-icons/io"
import {GoMarkGithub} from 'react-icons/go'
import {FaLinkedin} from "react-icons/fa"

import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.projects = [
      {
        id: 1,
        name: "Ahoy!", 
        image: ahoyImg,
        description: 'A mobile app that uses photo recognition, geolocation, and push notifications to create a shared network of scavenger hunts, clues, and games that users can play with their friends.', 
        github: 'https://github.com/MERV-spice/basic-merv',
        deploy: false,
        video: 'https://www.youtube.com/watch?v=8kqbZ2NJA1A&list=PLx0iOsdUOUmkGPFdAt5kHKxGQw_YseAQI&index=2&t=0s'
      },
      {
        id: 2,
        name: "Markdown Editor", 
        image: markdownEditorImg,
        description: 'Markdown Editor converts standard markdown into its final product and renders in real time on the same page. ', 
        github: 'https://github.com/etilden/2020-04-11-Markdown-Editor',
        deploy: "https://etilden.github.io/2020-04-11-Markdown-Editor"
      },
      {
        id: 3,
        name: "CubeClicker", 
        image: cubeClickerImg,
        description: 'A three-dimensional game in which a user clicks moving cubes to keep them in the field of play.', 
        github: 'https://github.com/etilden/CubeClicker',
        deploy: 'https://etilden.github.io/CubeClicker',
        video: false
      },
      {
        id: 4,
        name: "Omnivore Store", 
        image: omnivoreStoreImg,
        description: 'An e-commerce website developed over 8 days in partnership with 2 peer developers, Omnivore Store offers a member or guest users a secure and intuitive purchasing experience.', 
        github: 'https://github.com/Banyan-Omnivore-Store/grace-shopper',
        deploy: 'https://omnivore-store.herokuapp.com/',
        video: false, 
      }
    ]
  }

  componentDidMount() {
    AOS.init({
      duration: 2500
    }); 
  };


  
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <div className="row">
            <div className="col">
              <img src={image} className="left" alt="logo" />
            </div>
            <div className="col">
              <div className="right">
                <h1>Hello...</h1>
                <h2>My name is Emma. </h2>
                <h3>I am a full stack developer <br/>based in Chicago, IL. </h3>
              </div>
            </div>
        </div>
          <div className="scroller">
            <p>scroll down to see <br /> my projects...</p>
            <IoIosArrowDown />
          </div>
          </div>
        <div className="projects">
          {this.projects.map(project => { 
          return <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          
          className={project.id%2===0 ? 'even': 'odd'}><Project key={project.id} project={project}/></div>
          })}
        </div>
        <div className="contact">
          <br />
          <h4>contact me at e.k.tilden@gmail.com</h4>
          <br />
          <div> .  .  .</div>
          <br />
          <h4>or check out more of my previous work:</h4>
          <a href={"http://linkedin.com/in/emma-tilden/"}><FaLinkedin /></a><a href={"http://github.com/etilden"}><GoMarkGithub /></a>
        </div>

      </div>
    );
  }
}

export default App;
