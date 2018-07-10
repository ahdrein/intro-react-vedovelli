import React, { Component } from 'react';
import {fetchRepos} from '../../services/repos-api'
import ReposList from './ReposList'

class ReposContainer extends Component {
   constructor(props){
    super(props)
    this.state = {
        repos : [],
        username: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
}

   componentDidMount() {
    //fetchRepos('vedovelli').then(res => window.console.log(res.data))
    fetchRepos('vedovelli').then(res => this.setState({repos: res.data}))
   }

   changeHandler(ev){
       //debugger
        window.console.log(ev.target.value)
        this.setState({username: ev.target.value})
   }

   submitHandler(ev){
       ev.preventDefault()
       //this.setState({username: ev.target.value})
       fetchRepos(this.state.username).then(res => this.setState({repos: res.data}))
   }

   render() {
       return (
           <div>
               <h1>Repos</h1>
               <form action="#" onSubmit={this.submitHandler}>
                    <input 
                    onChange={this.changeHandler}
                    style={{width:'250px'}}
                    type="search" 
                    placeholder="Informe o usuario e tecla ENTER"/>
               </form>

               <ReposList repos={this.state.repos}></ReposList>
           </div>
       )
   }

  }

  export default ReposContainer;