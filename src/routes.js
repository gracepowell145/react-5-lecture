///this file is basically like a directory. Think crazy road sign on a trail where each sign is a componenet and the direction points 
import React from 'react'
import Home from './components/Home'
import About from './components/About'
import AlbumList from './components/AlbumList'
import SingleAlbum from './components/SingleAlbum'
import NotFound from './components/NotFound'
import { Switch, Route } from 'react-router-dom'

//MEMORIZE-Route and Switch have children.
export default (
    <Switch>
            <Route exact path = "/" component = {Home} />
{/* ^this is an exact path */}
            <Route path ="/about" component = {About}/>
            <Route path = "/albums" component = {AlbumList}/>
            <Route exact path="/album/:albumId" component={SingleAlbum} />
            <Route component = {NotFound} />
    </Switch>
)
