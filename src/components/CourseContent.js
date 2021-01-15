import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
export class CourseContent extends Component {
    
    render() {
        const { dataOfCourses, onSelect, value } = this.props
        const hasValue= dataOfCourses.filter((course) => course.name.toLowerCase().includes(value.toLowerCase()))
        // console.log(dataOfCourses,"i am in coursecontent js file")
        return (
            <div >
                <Grid container spacing={2} >
                
                    {dataOfCourses.length  
                        ? 
                        <Fragment>
                        { !value.length ? 
                            dataOfCourses.map((course) =>

                            <Fragment key={course.id} >
                                <Grid item   xs={6} md={4}   style={{ marginBottom: 30 }}  > 
                                
                                <Button onClick={() => onSelect(course.id)}>
                                <Paper >
                                <div className="grids">
                                    <ButtonBase className="">
                                        <img className="logo" alt="complex" src={course.logo} />
                                    </ButtonBase>
                                    <Typography >{course.name}</Typography>
                                    <Typography variant="caption" className="description">{course.shortDescription}</Typography>
                                </div>
                                </Paper>
                                </Button>
                               
                                </Grid>
                            </Fragment>
                        )
                        : 
                        
                        hasValue.map((course) => 
                        <Fragment key={course.id} style={{ marginBottom: 30}}>
                            <Grid item  xs={6} md={4} button    > 
                            <Button onClick={() => onSelect(course.id)}>
                            <Paper >
                                <ButtonBase className="">
                                    <img className="logo" alt="complex" src={course.logo} />
                                </ButtonBase>
                                <Typography >{course.name}</Typography>
                                <Typography variant="caption">{course.shortDescription}</Typography>
                            </Paper>
                            </Button>
                            </Grid>
                        </Fragment>

                        )}
                        </Fragment>
                        : null}
                        
                </Grid>
            </div>
        )
    }
}

export default CourseContent;