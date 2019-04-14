import React  from 'react'
import {connect} from 'react-redux'
import Item from './Item'
import InfoBar from './InfoBar'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions'

class Main extends React.Component {
    constructor(){
        super()

        this.state= {
            "filter" : "全部显示"
        }
    }

    changeFilter(txt){
        this.setState({"filter":txt})
    }
    
    render(){

        let filteredTods= (function(){
            if(this.state.filter=="全部显示"){
                return this.props.todos
            }else if(this.state.filter=="显示已做"){
                return  this.props.todos.filter((item)=>{
                    return item.done
                })
            }else if(this.state.filter=="显示没做"){
                return this.props.todos.filter((item)=>{
                    return !item.done
                })
            }
        }).call(this)

        return (
            <div>
                <p>
                    {JSON.stringify(this.props.todos)}
                </p>
                <ul>
                    {
                        filteredTods.map((item,index)=>{
                            return <Item key={index} item={item} actions={this.props.actions}/>
                        })
                    }
                </ul>
                <InfoBar todos={this.props.todos} changeFilter={(this.changeFilter).bind(this)}></InfoBar>
            </div>  
        )
    }
}
export default connect(
    (state)=>{
        return {
            "todos":state.todoReducer
        }
    },
    (dispatch)=>{
        return {
            "actions":bindActionCreators(actions,dispatch)
        }
    }
)(Main)