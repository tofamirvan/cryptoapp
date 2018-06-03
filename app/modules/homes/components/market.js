import React, { Component } from 'react';
import { View, Text, Button }  from 'react-native'
import { Column as Col, Row} from 'react-native-flexbox-grid';
import { Tabs, Tab, TabHeading, Icon } from 'native-base';
import { primaryColor } from '../../commons/const_style';
import { getAllData } from '../../markets/btc/action'
import { connect } from 'react-redux'  
import List from '../../markets/screens/list'

const filteredData = []

class Market extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
        }
    }

    handleStatusColor(isWin,isLose){
        if(isWin){
            return "#242d3d"
        }
        if(isLose){
            return "red"
        }
        return "#bbc2d0"
    }
    
    
    componentWillMount() {
        this.props.fetch()
    }
    
    filterGain(){
    }
    filterLoser(){

    }
    
  render() {
    return (
        <View>
<<<<<<< HEAD
            <Tabs initialPage={0} tabBarUnderlineStyle={{backgroundColor:'#2B79C9'}} locked>
                <Tab heading={
                    <TabHeading style={style.tab_header}>
                        <Icon name='trending-up' type='MaterialIcons'/>
                        <Text>Gainers</Text>
                    </TabHeading>
                } activeTextStyle={{color:'#2B79C9',width:'100%',borderRightColor:'#e9e9e9',borderRightWidth:1,textAlign:'center'}} tabStyle={style.tab_header} activeTabStyle={style.tab_header_active}>
                    <List  data={this.props.reducer.data} size={5} isGain={true}/>
                </Tab>
                <Tab heading={
                    <TabHeading style={style.tab_header}>
                        <Icon name='trending-down' type='MaterialIcons'/>
                        <Text>Loosers</Text>
                    </TabHeading>
                } activeTextStyle={{color:'#2B79C9',width:'100%',textAlign:'center'}} tabStyle={style.tab_header} activeTabStyle={style.tab_header_active} >
                    <List data={this.props.reducer.data} size={5} isGain={false}/>
=======
            <Tabs initialPage={0} tabBarUnderlineStyle={{backgroundColor:'#2B79C9'}}>
                <Tab heading="Gainers" activeTextStyle={{color:'#2B79C9',width:'100%',borderRightColor:'#e9e9e9',borderRightWidth:1,textAlign:'center'}} tabStyle={style.tab_header} activeTabStyle={style.tab_header_active}>
                    <List navigation={this.props.navigation} data={this.props.reducer.data} size={5} isGain={true}/>
                </Tab>
                <Tab heading="Loosers"activeTextStyle={{color:'#2B79C9',width:'100%',textAlign:'center'}} tabStyle={style.tab_header} activeTabStyle={style.tab_header_active} >
                    <List navigation={this.props.navigation} data={this.props.reducer.data} size={5} isGain={false}/>
>>>>>>> fix route in home
                </Tab>
            </Tabs>
            <View style={{justifyContent:'center',height:50}}>
                <Text style={{textAlign:'center',color:'#bbc2d0'}} onPress={()=>alert(JSON.stringify(this.props.nav))}>More</Text>
            </View>
        </View>
    )
  }
};

const style={
    title:{
        color:'#bbc2d0'
    },
    text_header:{
        color:'#bbc2d0',
    },
    text_content:{
        color:'#bbc2d0',
        fontSize: 18,
    },
    tab_header:{
        backgroundColor:'#fff'
    },
      tab_header_active:{
        backgroundColor:'#2B79C9'
    },
      text_header:{
        color:'#bbc2d0',
        fontSize:12
    },
      header:{
        alignItems: 'center',
        backgroundColor:'#fff'
    }
}
function mapStateToProps(state){
    return{
        reducer : state.btcReducer,
        root : state
    }
}

function dispatchToProps(dispatch){
    return{
        fetch : ()=>dispatch(getAllData())
    }
}
export default connect(mapStateToProps,dispatchToProps)(Market)