import React  from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions'

class Header extends React.Component {
    constructor(){
        super()
    }

    addItem(){
        this.props.actions.addItem(this.refs.addc.value)
        this.refs.addc.value=""
    }
    keydownhandler(event){
        if(event.keyCode==13){
            this.addItem()
        }
    }

    render(){
        return (
            <div>
                待做事项：
                <input type="text" onKeyDown={(this.keydownhandler).bind(this)} ref="addc"/>
                {" "}
                <input type="button" onClick={(this.addItem).bind(this)} value="添加"/>
            </div>
        )
    }
}
export default connect(
    null,
    (dispatch)=>{
        return {
            "actions":bindActionCreators(actions,dispatch)
        }
    }
)(Header)