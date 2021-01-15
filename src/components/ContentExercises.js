import React, { Component , Fragment} from 'react'
import Header from "./Header"
import "./style.css"
import Container from '@material-ui/core/Container';
const blockEmbedPlugin = require('markdown-it-block-embed');
const md = require('markdown-it')({
        html: true,
        linkify: true,
        breaks: true,
        typographer: true,
        })
.enable(['link'])
.enable('image')
.use(require('markdown-it-highlightjs'));

md.use(blockEmbedPlugin, {
    containerClassName: 'video-embed',
    });
export class ContentExercises extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            content:""
        }
    }
    updateLinks = htmlFromServer => {
        const courseDetail = new DOMParser().parseFromString(
          htmlFromServer,
          'text/html',
        );
          const anchorList = courseDetail.querySelectorAll('a');
          anchorList.forEach(anchor => {
            if (anchor.innerText === 'Saral') {
              return false;
            } else {
              anchor.setAttribute('target', '_blank');
            }
          });
          return courseDetail.body.innerHTML;
        };
    
    


    render() {
        const {state} =this.props.location
   
        return (
            <Fragment>
            <Header />
            <Container maxWidth="md" className="kk">
            <div id="course" dangerouslySetInnerHTML={{ __html: this.updateLinks(md.render(state)),}}/> 
            </Container>
            </Fragment>
        )
    }
}

export default ContentExercises