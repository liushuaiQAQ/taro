import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Child from './child';
import './index.less'


function Index() {
	const [userName, setUserName] = useState('madongdong');

	useEffect(() => {
		console.log(this)
		setUserName(this.$router.params.blog)
	}, [])

	return (
		<View>
			<Text>{userName}</Text>
			<Child userName={userName}></Child>
		</View>
	)
}

export default Index;