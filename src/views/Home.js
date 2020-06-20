import React, { Component } from 'react';
import { View,Text,StyleSheet,FlatList,Dimensions,TouchableOpacity } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { connect } from 'react-redux'
import { Button } from '@ant-design/react-native';
import { setUserName } from '../store/action/home'
class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: ['zs','2','3','4','5','6','7','8'],
            refreshing: false
        }
    }

    componentDidMount() {
        SplashScreen.hide()
        this.props.setUserName('li')
    }
    onEndReached = () => {
        const { list } = this.state
        setTimeout(() => {
            const arr = []
            for (let i =0; i < 10;i++){
                arr.push(Math.random(10).toString())
            }
            this.setState({
                list:list.concat(arr)
            })

        },3000)
    }

    onRefresh = () => {
        this.setState({
            refreshing: true
        },()=>{
                setTimeout(() => {
                  const arr = Array('SDA','DS','SSA','CS','DSAD','CCD','EEE','TTT')
                    this.setState({
                        refreshing: false,
                        list: arr
                    })
                },3000)
            }
            )
    }

    renderItem = ({ item }) => {
        const { navigation } = this.props
        return (
            <TouchableOpacity onPress={() => navigation.navigate('HomeDetails', item)}>
                <View style={Styles.item}>
                    <Text style={Styles.title}>{item}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render(){
        const { list,refreshing } = this.state
        const { userName } = this.props
        return(
            <View>
                <View style={{justifyContent:'center',flexDirection:'row'}}>
                    <Button style={{height:40,width:200}}>{userName}</Button>
                </View>
                <FlatList
                    style={Styles.list}
                    data={list}
                    renderItem={this.renderItem}
                    keyExtractor={item => item}
                    ListFooterComponent={ListFooterComponent}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={0.2}
                    onRefresh={this.onRefresh}
                    refreshing={refreshing}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return{
        userName: state.Home
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setUserName: name => {
            dispatch((setUserName(name)))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

const ListFooterComponent = () => {
    return (<View style={Styles.ListFooterComponent}>
        <Text>数据加载中。。。。。</Text>
    </View>)
}


const Styles = StyleSheet.create({
    title:{
        color: 'green',
        fontSize: 32,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    ListFooterComponent:{
        justifyContent:'center',
        alignItems:'center',
        lineHeight: 50
    },
    list:{
        height: Dimensions.get('window').height - 80
    }
})