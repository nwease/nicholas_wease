import React, { Component } from 'react'
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from 'react-mdl'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 }
  }

  toogleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* PROJECT 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://reactjs.org/logo-og.png) center / cover'
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
              voluptatibus, placeat omnis delectus quae a.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* PROJECT 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://reactjs.org/logo-og.png) center / cover'
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
              voluptatibus, placeat omnis delectus quae a.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* PROJECT 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://reactjs.org/logo-og.png) center / cover'
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
              voluptatibus, placeat omnis delectus quae a.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is React</h1>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is React-Native</h1>
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is JavaScript</h1>
        </div>
      )
    } else if (this.state.activeTab === 4) {
      return (
        <div>
          <h1>Node</h1>
        </div>
      )
    } else if (this.state.activeTab === 5) {
      return (
        <div>
          <h1>MongoDB</h1>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>HTML/CSS</Tab>
          <Tab>React</Tab>
          <Tab>React-Native</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Node</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toogleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects
