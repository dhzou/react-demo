import React, {Component, PropTypes} from 'react';
import Header from  './common/header.jsx';
import HomeIndex from  './home/homeIndex.jsx';
import NewsIndex from  './home/newsIndex.jsx';
import MyIndex from  './home/myIndex.jsx';
import indexStyle from '../Style/index.css';
import '../Style/index.css'
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs:[
                {tabName:"首页",id:1,component:<HomeIndex/>},
                {tabName:"发现",id:2,component:<NewsIndex/>},
                {tabName:"我的",id:3,component:<MyIndex/>}
            ],
            currentIndex:1,
        };
        this.tabChoiced=(id)=>{// tab切换的方法
            this.setState({
                currentIndex:id
            });
        }
    }

    render() {
        var _this=this;
        var tabList= this.state.tabs.map(function(res,index) {
            var tabStyle=res.id==this.state.currentIndex;
            return  <a key={index} className={indexStyle.boxcolumn} onClick={this.tabChoiced.bind(_this,res.id)}>
                        <div />
                     {res.tabName}
                    </a>

        }.bind(_this));

        let homeContent = this.state.tabs[this.state.currentIndex-1].component;

        return (
            <div className={indexStyle.indexModule}>
                <Header titleName = "首页" Nav/>
                <div className={indexStyle.contant}>
                    {homeContent}
                </div>
                <div className = {indexStyle.tabList + " "+indexStyle.box} >
                    {tabList}
                </div>

            </div>
        )
    }

}

export default Main;
