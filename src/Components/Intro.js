import {Component} from 'react'
import './Intro.css'
import IconButton from '@mui/material/IconButton'
import BungalowIcon from '@mui/icons-material/Bungalow'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'

class Intro extends Component {
  state = {
    home: true,
    about: false,
    contact: false,
    aboutScroll: 0,
  }

  homeFun = () => {
    const val = this.state
    if (val.home !== true) {
      this.setState(pre => ({
        home: !pre.home,
        about: !pre.about,
        aboutScroll: pre.aboutScroll,
      }))
    }
  }

  aboutUs = () => {
    const val = this.state
    if (val.about !== true) {
      this.setState(pre => ({
        home: !pre.home,
        about: !pre.about,
        contact: !pre.contact,
      }))
    }
  }

  contact = () => {
    const val = this.state
    if (val.about !== true) {
      this.setState(pre => ({
        home: !pre.home,
        about: !pre.about,
        contact: !pre.contact,
      }))
    }
  }

  aboutScroll = e => {
    const element = e.target
    const top = element.scrollTop
    this.setState(pre => ({
      home: pre.home,
      about: pre.about,
      aboutScroll: top,
    }))
  }

  render() {
    const currState = this.state
    const passTop = currState.aboutScroll

    console.log(passTop)

    let animeClass = null

    let animeClass1 = null

    if (currState.about === true) {
      animeClass = 'animeClass'
      console.log('good')
    }
    if (currState.home === true) {
      animeClass1 = 'animeClass1'
      console.log('good')
    }

    console.log(this.aboutScroll.a)

    return (
      <div className="i">
        <div className="Header">
          <div className="stack">
            <IconButton onClick={this.homeFun} aria-label="home">
              <BungalowIcon className="home" />
            </IconButton>
            <IconButton onClick={this.aboutUs} aria-label="about">
              <WorkHistoryIcon className="home" />
            </IconButton>
            <IconButton onClick={this.contact} aria-label="contact">
              <ContactMailIcon className="home" />
            </IconButton>
          </div>
        </div>
        <div className="i-left">
          <div className="codeWrap">
            <div className="print">
              <p>print{`{`}</p>
            </div>
            <div className="aboutCoderLeft">
              <div className="s1">H</div>
              <div className="s2">e</div>
              <div className="s3">l</div>
              <div className="s4">l</div>
              <div className="s5">o</div>
              <div className="space"> </div>
              <div className="s7">o</div>
              <div className="s8">r</div>
              <div className="s9">l</div>
              <div className="s10">d</div>
              <div className="s11">!</div>
            </div>
            <div className="print">
              <p>{`}`}</p>
            </div>
          </div>
          <div className="heading-wrap">
            <div className="i-heading">
              <h2 className="i-h2">Hi, My name is</h2>
              <h1 className="i-h1">Abhijith Mohan</h1>
            </div>
            <div className="i-title-wrapper">
              <div className="i-item">
                <div className="item-title">React Js</div>
                <div className="item-title">Node Js</div>
                <div className="item-title">Python</div>
                <div className="item-title">SQL Lite</div>
                <div className="item-title">Mongoose</div>
                <div className="item-title">JavaScript</div>
                <div className="item-title">HTML</div>
                <div className="item-title">CSS</div>
              </div>
            </div>

            <div className="i-para">
              <p>
                A web app developer who is fond of MERN stack development, proud
                CCBPien. I create stylish, modern websites, web services, and
                websites.
              </p>
            </div>
          </div>
        </div>
        <div className="i-right">
          <div id="i-right-wrapper" className="i-right-wrapper">
            <div className={`home abs ${animeClass1}`}>
              <div>
                <div className="i-r-inside-wrapper">
                  <div className="print">
                    <p>print{`{`}</p>
                  </div>
                  <div className="aboutCoder">
                    <div className="s1">H</div>
                    <div className="s2">e</div>
                    <div className="s3">l</div>
                    <div className="s4">l</div>
                    <div className="s5">o</div>
                    <div className="space" />
                    <div className="s6">W</div>
                    <div className="s7">o</div>
                    <div className="s8">r</div>
                    <div className="s9">l</div>
                    <div className="s10">d</div>
                    <div className="s11">!</div>
                  </div>
                  <div className="print">
                    <p>{`}`}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="aboutUs"
              onScroll={this.aboutScroll}
              className={`aboutUs abs ${animeClass}`}
            >
              <div>
                <h1 id="h1" className="AboutHeading">
                  My sKiLLs!
                </h1>{' '}
              </div>
              <div style={{marginLeft: `${passTop}px`}}>
                <h1 id="h2" className="skills">
                  Reac <span className="jumb">t</span>
                </h1>
              </div>
              <div style={{marginRight: `${passTop}px`}}>
                <h1 id="h3" className="Nodeskills">
                  N<span className="jumb">O</span>deJS
                </h1>
              </div>
              <div>
                <h1 id="h4" className="sql">
                  SQL
                </h1>
              </div>
              <div>
                <h1 className="skills">
                  HTM<span className="Htmljumb">L</span>
                </h1>
              </div>
              <div style={{marginRight: `${passTop + 1000}px`}}>
                <h1 className="javascript">jAVAsCRIPT</h1>
              </div>
            </div>
            <div className="contact">
              <h2>coms</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro
