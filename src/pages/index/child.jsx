import { View, Text } from '@tarojs/components';

function Child(props){
    return (
        <View>
            <Text>child {props.userName}</Text>
        </View>
    )
}

export default Child