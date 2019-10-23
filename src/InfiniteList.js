import React, { useState } from 'react';

class InfiniteList extends React.Component{
  constructor(props) {
    super(props);
    this.state={img:[],setState:[]};
    //初始圖片
    this.getData();
  }

  //將事件加入window中
  componentDidMount() {
    window.addEventListener('scroll', this.onScrollHandle, true);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollHandle);
  }

  onScrollHandle = event => {
    const list = document.getElementById('list');
    //判斷是否至底部
    if (window.scrollY + window.innerHeight === list.clientHeight + list.offsetTop) {
        console.log("底部");
        this.getData();
    }
  }

    getData(){
        fetch('https://api.thecatapi.com/v1/images/search?limit=10&order=Desc')
        .then(response => response.json())
            .then(res => {
                let img = this.state.img;
                if(img.length==0){
                    this.setState({img:res});
                }else{
                    res = JSON.stringify(res);
                    img = JSON.stringify(img);
                    img = JSON.parse(img.substring(0,img.length-1)+","+ res.substring(1,res.length));
                    this.setState({img});
                }
            });
    }

  render() {
  return (
    <ul id="list">
      {this.state.img.map((img, i) => <li style={{backgroundImage: `url(${img.url})`}} key={i}/>) }
    </ul>
  )
}
}

export default InfiniteList;