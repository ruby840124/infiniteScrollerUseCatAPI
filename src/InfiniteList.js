import React from 'react';
import './InfiniteList.css';

class InfiniteList extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      img: [],
      setState: []
    };

    //初始貓咪圖片
    this.getData();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollHandle, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollHandle);
  }

   //判斷是否至底部
  onScrollHandle = event => {
    const scrollY = document.documentElement.scrollTop;
    if (parseInt(window.innerHeight + scrollY) + 5 >= document.body.offsetHeight) {
      console.log("bottom");
      this.getData();
    }
  }

    getData(){
        fetch('https://api.thecatapi.com/v1/images/search?limit=10&order=Desc')
        .then(response => response.json())
            .then(res => {
                let img = this.state.img;
                if(img.length === 0) {
                    this.setState({img:res});
                } else {
                    res = JSON.stringify(res);
                    img = JSON.stringify(img);
                    img = JSON.parse(img.substring(0, img.length-1) + "," + res.substring(1, res.length));
                    this.setState({img});
                }
            });
    }

  render() {
  return (
    <ul id = "list">
      {this.state.img.map((img, i) => <li style={{backgroundImage: `url(${img.url})`}} key={i}/>) }
    </ul>
  )
}
}

export default InfiniteList;