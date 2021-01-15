import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import "./style.css"

export class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    

    render() {
        const {onChange, value}=this.props
        return (
            <Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                        >
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Saral
                    </Typography>
                        <div className="search">
                            <div className="searchIcon">
                                <SearchIcon />
                            </div>
                            <div className="searchbox">
                                <Input
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    value={value}
                                    onChange={(e) => {
                                        onChange(e.target.value)
                                    } }
                                />
                            </div>

                        </div>
                    </Toolbar>
                </AppBar>
            <br></br><br></br>
            </Fragment>
        )
    }
}

export default Header