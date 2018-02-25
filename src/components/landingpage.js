import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA1WAAAAJDA5ODhjNjRhLTlhYjYtNDcyYi04YWVjLTMxYTM1ZjAzNzRlYw.jpg"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>HTML/CSS | JavaScript | React | React-Native | Node | MongoDB</p>
              <div className="social-links">
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                </a>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing
