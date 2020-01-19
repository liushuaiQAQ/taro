import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { xiedajiao, liuying } from '../../tools';


function Blog(){
    const initState = {
        nickname: 'madongmei',
        age: 18
    }

    const [blogTitle, setBlogTitle] = useState(initState);
    const [articleList, setArticleList] = useState([])

    useEffect(() => {
        xiedajiao();
    }, [])

    const gotoIndex=()=>{
        let { nickname, age } = blogTitle;
        Taro.navigateTo({url:`/pages/index/index?blog=${nickname}&age=${age}`})

        // setBlogTitle(() => {
        //     const params = { ...blogTitle, nickname: 'mmmmm' };
        //     console.log(params)
        //     return params;
        // })
    }

    const getArticleList = () => {
        Taro.request({
            url: 'https://apiblog.jspang.com/default/getArticleList'
        }).then(res => {
            setArticleList(res.data.list);
        })
    }


    return (
        <View>
            <Text>Blog Page</Text>
            <Button onClick={gotoIndex}>我要去Index页面</Button>
            <Image src={require('../../../static/image/test.jpg')} />
            <Button onClick={getArticleList}>加载文章</Button>
            {
                articleList.map((item, index) => {
                    return (<View>{item.title}</View>)
                })
            }
        </View>
    )
}
export default Blog