import Nerv from "nervjs";
import Taro, { request as _request } from "@tarojs/taro-h5";
import { View, Text, Button, Image } from '@tarojs/components';
import { xiedajiao } from "../../tools/index";

class Blog extends Taro.Component {
  render() {
    const initState = {
      nickname: 'madongmei',
      age: 18
    };

    const [blogTitle, setBlogTitle] = Taro.useState(initState);
    const [articleList, setArticleList] = Taro.useState([]);

    Taro.useEffect(() => {
      xiedajiao();
    }, []);

    const gotoIndex = () => {
      let { nickname, age } = blogTitle;
      Taro.navigateTo({ url: `/pages/index/index?blog=${nickname}&age=${age}` });

      // setBlogTitle(() => {
      //     const params = { ...blogTitle, nickname: 'mmmmm' };
      //     console.log(params)
      //     return params;
      // })
    };

    const getArticleList = () => {
      _request({
        url: 'https://apiblog.jspang.com/default/getArticleList'
      }).then(res => {
        setArticleList(res.data.list);
      });
    };

    return <View>
            <Text>Blog Page</Text>
            <Button onClick={gotoIndex}>我要去Index页面</Button>
            <Image src={require('../../../static/image/test.jpg')} />
            <Button onClick={getArticleList}>加载文章</Button>
            {articleList.map((item, index) => {
        return <View>{item.title}</View>;
      })}
        </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}

export default Blog;