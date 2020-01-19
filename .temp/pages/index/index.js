import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import Child from './child';
import './index.less';

class Index extends Taro.Component {
  render() {
    const [userName, setUserName] = Taro.useState('madongdong');

    Taro.useEffect(() => {
      console.log(this);
      setUserName(this.$router.params.blog);
    }, []);

    return <View>
			<Text>{userName}</Text>
			<Child userName={userName}></Child>
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

export default Index;