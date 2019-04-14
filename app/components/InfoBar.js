import React  from 'react'

class InfoBar extends React.Component {
    constructor(){
        super()
    }
    counntDone(){
        let num = 0
        this.props.todos.forEach((item)=>{
            item.done && num++
        })
        return num
    }
    render(){
        return (
            <div>
                <p>共{this.props.todos.length}条</p>
                <p>已完成{this.counntDone()}条</p>
                <p>未完成{this.props.todos.length-this.counntDone()}条</p>
                <div>
                    <button onClick={this.props.changeFilter.bind(null,"全部显示")}>所有</button>
                    <button onClick={this.props.changeFilter.bind(null,"显示已做")}>已完成</button>
                    <button onClick={this.props.changeFilter.bind(null,"显示没做")}>未完成</button>
                </div>
            </div>
        )
    }
}
export default InfoBar