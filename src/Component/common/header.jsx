/**
 * Created by zoudonghui on 17/11/27.
 */
import React, {Component, PropTypes} from 'react';
import headStyle from '../../Style/head.css';
import { Link, IndexLink } from 'react-router';
import { Tool } from '../../Config/Tool.jsx';
class Header extends Component{

    constructor(props,context) {
        super(props,context);
        this.state = {
            showHide :'none' // 显示右侧菜单，默认隐藏
        }

        this.showNav = () => { //显示右侧导航栏
            if (this.state.showHide == 'block') {
                this.setState({showHide:'none'})
            }else{
                this.setState({showHide:'block'})
            }
        }
    }

    render() {
         let titleName = this.props.titleName;
         let Nav = this.props.Nav;
         let Goback = this.props.Goback;
         let nav,navState = this.state.showHide;
         if(Nav){
             nav =  <div className={headStyle.headMenu} onClick={this.showNav} >
                         <ul className= {headStyle.headListname}  style={{display:navState}} >
                             <li>
                                 <IndexLink to="/">
                                     <span>index1</span>
                                     <span className={headStyle.headArrow}></span>
                                 </IndexLink>
                             </li>
                             <li>
                                 <Link to='/allDeposit'>
                                     <span>index2</span>
                                     <span className={headStyle.headArrow}></span>
                                 </Link>
                             </li>
                             <li>
                                 <Link to='/helpCenter'>
                                     <span>帮助中心</span>
                                     <span className={headStyle.headArrow}></span>
                                 </Link>
                             </li>
                         </ul>
                    </div>
         }
         if(Goback){
             nav = (<span className={headStyle.headGoback} onClick={() => window.history.back()}>返回</span>)
         }

         return ( <header className={headStyle.headlist}>
                    {nav}
                     <span className={headStyle.headtitle}>{titleName}</span>
                 </header>
           )

    }
}

export  default  Header;
