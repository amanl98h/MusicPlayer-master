import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import menu from '../../../images/png.png'
import { useFonts } from 'expo-font';
import play from '../../../images/play-16.png'
import pause from '../../../images/pause-16.png'
import { Audio } from 'expo-av'
import Svg, { Path } from 'react-native-svg';



export default function ListMusic() {
    const [sound, setSound] = useState(false)
    const [music, setMusic] = useState('')
    const [data,setData] = useState([])


    React.useEffect(()=>{
        setData(items)
    },[items])
    const playSound = async (mus)=> {
        
        items.forEach(async (el)=>{
            if(el.id == mus){
                el.played = true 
                let q = el.music
                const { sound } = await Audio.Sound.createAsync(
                    q
                );
                
            setMusic(sound && sound);
            await sound.playAsync();
            setSound(true)
            }
        })
        setData(items)
        
        if (music != null) {
            await music?.pauseAsync()
        }
        
    }
    let items = [
        {
          id:1,
          name:'Не забывай',
          songer:'T-Fest',
          played : false,
          music: require('../../../musics/tFest.mp3')
        },
        {
          id:2,
          name:'Dancin',
          songer:'Aaron Smith',
          played : false,
          music: require('../../../musics/Dancin.mp3')
        },
        {
          id:3,
          name:'Kiss me more',
          songer:'Doja Cat',
          played : false,
          music: require('../../../musics/Kiss.mp3')
        },
        {
          id:4,
          name:'Brooklyn Blood Pop',
          songer:'Syko',
          played : false,
          music: require('../../../musics/Brooklyn.mp3')
        },
        {
          id:5,
          name:'Around The World',
          songer:'Daft Punk',
          played : false,
          music: require('../../../musics/around.mp3')
        },
        {
          id:6,
          name:'My girl',
          songer:'Shiloh Dynasty',
          played : false,
          music: require('../../../musics/myGirl.mp3')
        },
        {
          id:7,
          name:'Tuesday',
          songer:'Burak Yeter',
          played : false,
          music: require('../../../musics/tuesday.mp3')
        },
        {
          id:8,
          name:'Because You Move Me',
          songer:'Tinlicker',
          played : false,
          music: require('../../../musics/Move.mp3')
        },
        
    ]

    const pauseMusic = async (mus) => {
        setSound(false)
        items.forEach((el, i)=>{
            if(el.id == mus){
                el.played = false
            }
        })
        setData(items)
        if (music != null) {
            await music?.pauseAsync()
        }
    }
    

    const [loaded] = useFonts({
        Odibee: require('../../../assets/OdibeeSans-Regular.ttf'),
    });
    if (!loaded) {
        return null;
      }

      
    
  return (
    <View style={styles.wrapper}>
        <View style={styles.titleBox}>
            <Text style={styles.title}>MUSICAL<Text style={styles.span}>ity</Text></Text>
        </View>
        <View style={styles.centralView}>
            <View style={styles.leftBlock}><Svg  width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M9.11378 0.879385C8.83734 0.600988 8.50859 0.379979 8.14645 0.229063C7.7843 0.0781468 7.39589 0.000300619 7.00356 0C6.26146 0.000121309 5.54646 0.278893 5.00012 0.781119C4.45384 0.278808 3.73881 2.33401e-05 2.99669 0C2.60389 0.00040896 2.21506 0.0784927 1.85256 0.229757C1.49005 0.381022 1.16104 0.602481 0.884462 0.881391C-0.295238 2.0661 -0.294737 3.91913 0.885464 5.09883L5.00012 9.21349L9.11479 5.09883C10.295 3.91913 10.2955 2.0661 9.11378 0.879385Z" fill="#84878A"/>
                                            </Svg>
            </View>
            <View style={styles.logoBlock}><Image style={styles.utka} source={{uri:"https://cdn.dribbble.com/users/682206/screenshots/7081830/media/1cea1b0102978334331af83578ba4f26.png?compress=1&resize=400x300"}}/></View>
            <View style={styles.rightBlock}><Svg width="30" height="20" viewBox="0 0 26 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M2.85156 0.5C3.64844 0.5 4.26367 0.728516 4.69727 1.18555C5.13086 1.63086 5.34766 2.19336 5.34766 2.87305C5.34766 3.54102 5.13086 4.09766 4.69727 4.54297C4.26367 4.97656 3.64844 5.19336 2.85156 5.19336C2.08984 5.19336 1.48633 4.97656 1.04102 4.54297C0.595703 4.10938 0.373047 3.55273 0.373047 2.87305C0.373047 2.19336 0.589844 1.63086 1.02344 1.18555C1.45703 0.728516 2.06641 0.5 2.85156 0.5ZM12.9062 0.5C13.7031 0.5 14.3184 0.728516 14.752 1.18555C15.1855 1.63086 15.4023 2.19336 15.4023 2.87305C15.4023 3.54102 15.1855 4.09766 14.752 4.54297C14.3184 4.97656 13.7031 5.19336 12.9062 5.19336C12.1445 5.19336 11.541 4.97656 11.0957 4.54297C10.6504 4.10938 10.4277 3.55273 10.4277 2.87305C10.4277 2.19336 10.6445 1.63086 11.0781 1.18555C11.5117 0.728516 12.1211 0.5 12.9062 0.5ZM22.9609 0.5C23.7578 0.5 24.373 0.728516 24.8066 1.18555C25.2402 1.63086 25.457 2.19336 25.457 2.87305C25.457 3.54102 25.2402 4.09766 24.8066 4.54297C24.373 4.97656 23.7578 5.19336 22.9609 5.19336C22.1992 5.19336 21.5957 4.97656 21.1504 4.54297C20.7051 4.10938 20.4824 3.55273 20.4824 2.87305C20.4824 2.19336 20.6992 1.63086 21.1328 1.18555C21.5664 0.728516 22.1758 0.5 22.9609 0.5Z" fill="#84878A"/>
                                            </Svg>
            </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true} style={styles.box}>
            {
                data.map((item, index)=>{
                    return(
                    <View key={index} style={ item.played ? styles.item2 : styles.item}>
                        <View style={styles.leftTexts}>
                            <Text style={ item.played ? styles.itemSongName2 : styles.itemSongName}>{item.name}</Text>
                            <Text style={styles.itemSonger}>{item.songer}</Text>
                        </View>
                        <TouchableOpacity onPress={()=> item.played ? pauseMusic(item.id) : playSound(item.id)}> 
                            <View style={styles.player_btn}><Image style={ item.played ? styles.btn_pause : styles.btn_play} source={ item.played ? pause : play}/></View>
                        </TouchableOpacity>
                    </View>
                    )
                })
            }
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({ 
    box:{
        flex:1,
        marginBottom:'3%',  
        width:'90%',
        marginTop:'7%',
        overflow: 'hidden',
        backgroundColor:'transparent',
        
    },
    player_btn:{
        width:45,
        height:45,
        borderRadius:100,
        justifyContent:'flex-end',
        backgroundColor:'#2C2D34',
        alignItems:'center',
        justifyContent:'center',
        marginRight:'5%',
    },
    btn_pause:{
        width:15,
        height:15,
    },
    btn_play:{
        width:10,
        height:10,
    },
    leftTexts:{
        marginLeft:"5%",
    },
    item:{
        width:'100%',
        height:60,
        marginTop:5,
        marginBottom:5,
        borderRadius:15,
        backgroundColor:'transparent',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#33363A',
    },
    item2:{
        width:'100%',
        height:60,
        marginTop:5,
        marginBottom:5,
        borderRadius:15,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#1A1C1F',
        backgroundColor:'transparent',
        shadowOffset:{
            width:0,
            height:3,
        },
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 1,
        borderWidth:2,
        borderColor:'black',
    },
    itemSongName:{
        fontSize:19,
        color:'#93969A',
    },
    itemSongName2:{
        fontSize:19,
        color:'white',
    },
    itemSonger:{
        color:'#5B5B5D',
        fontSize:16,
    },
    wrapper:{
        width:'100%',
        height:'100%',
        flex:1,
        alignItems:'center',
        backgroundColor:'#24282C',
    },
    titleBox:{
        width:'100%',
        alignItems:'center',
        textAlign:'center',
        marginTop:"12%",
    },
    title:{
        fontSize:21,
        color:"#73767A",
        fontFamily:'Odibee'
    },
    span:{
        color:'white',
    },
    centralView:{
        width:"90%",
        height:100,
        flex:0.3,
        justifyContent:'space-around',
        flexDirection:'row',
        backgroundColor:'#24282C',
        marginTop:30,
        alignItems:'center',
    },
    leftBlock:{
        backgroundColor:'#292B31',
        width:50,
        height:50,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5.84,
        elevation: 5,
    },
    heart:{
        width:45,
        height:45,
    },
    rightBlock:{
        backgroundColor:'#292B31',
        width:50,
        height:50,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5.84,
        elevation: 5,
    },
    menu:{

    },
    logoBlock:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5.84,
        elevation: 5,
         borderRadius:100,
        borderWidth:5,
        borderColor:'black',
    },
    utka:{
        width:140,
        height:140,
        borderRadius:100,
    },

});
