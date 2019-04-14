import React  from 'react'


class Item extends React.Component {
    constructor(){
        super()

        this.state={
            onEdit:false
        }
    }


    showContent(){
        if(this.state.onEdit){
            return <input type="text" ref="txt" autoFocus onBlur={(this.blurhandler).bind(this)}></input>
        }else{
            return <b>{this.props.item.content}</b>
        }
    }

    changeState(){
        this.setState({onEdit:!this.state.onEdit})

    }
    changeItem(){
        this.props.actions.changeItem(this.props.item.id)
    }
    blurhandler(){
        this.setState({onEdit:false})

        //发送action
        this.props.actions.updataItem(this.refs.txt.value,this.props.item.id)
    }
    removeItem(){
        if(confirm("真的要删除吗")){
            this.props.actions.removeItem(this.props.item.id)
        }
    }

    render(){
        return (
            <div>
                <input type="checkbox" checked={this.props.item.done?"checked":""} onChange={(this.changeItem).bind(this)}/>
                <span onDoubleClick={(this.changeState).bind(this)} className={this.props.item.done ? "done":""}>{this.showContent()}</span>
                {""}
                <input type="button" value="删除" onClick={(this.removeItem).bind(this)}/>
            </div>
        )
    }
}
export default Item