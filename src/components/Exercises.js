import React, { Component,Fragment } from 'react'
import Header from "./Header"
// import { Grid, Container, Paper, Typography } from "@material-ui/core"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import history from "./history"
import "./style.css"
export class Exercises extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             content:"",
        }
    }
    
    handlerForData=(each)=>{
        const {state}=this.props.location
        console.log(each.slug);
        console.log(state["id"])
        fetch(`https://saral.navgurukul.org/api/courses/${state["id"]}/exercise/getBySlug?slug=${each.slug}`)
        .then((response) => { return response.json(); })
        .then((data) => {
           
            this.setState({
                content: data["content"]
            })
            // console.log(this.state.content);
            history.push("./ContentExercises",this.state.content)
        })
        
    }
    render() {
        const { state } = this.props.location
        // console.log(state["id"],"i am in exercises")
        const onselect =this.handlerForData
        return (
            <Fragment>
            <Header></Header>
                {state ?
                    
                    state["data"].map((eachExercise) => 
                        <Fragment>
                            <List  component="nav" aria-label="secondary mailbox folders" key={eachExercise.id}>
                                <ListItem  button>
                                    <ListItemText 
                                    className="exer"
                                    primary={eachExercise.name} 
                                    onClick={() => onselect(eachExercise)}
                                    />
                                </ListItem>
                            </List> 
                        </Fragment>
                    ) 
                    : "null"}

                {/*<Fragment>
                {this.state.content}
                </Fragment>*/}
            </Fragment>
        )
    }
}

export default Exercises;