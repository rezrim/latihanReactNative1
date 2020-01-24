import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
  wrapper : {
    flex:1,
  },
  header:{
    justifyContent:'center',
    alignItems:'center',
    height:50,
    flex:1,
  },
  headerRightWrap : {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginRight:10
  },
  menuIcon : {
    width:30,
    height:30
  },
  title : {
    color: 'white',
    fontSize:30,
    fontWeight:'bold'
  },
  container : {
    backgroundColor:'white',
    paddingHorizontal:15,
    paddingVertical:10,
    width:'90%',
    alignSelf:'center',
    marginVertical:15
  },
  titleSection:{
    fontSize:20,
    borderBottomWidth:1,
    width:80,
    marginBottom:10
  },
  boxPaket:{
    width:100,
    height:70,
    justifyContent:'center',
    alignSelf:'center',
    marginHorizontal:10
  },
  textPaket:{
    backgroundColor : 'rgba(0,0,0,0.5)',
    paddingHorizontal:20,
    paddingVertical:5,
    color:'white',
    fontSize:14
  },
  shadow:{
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:4
    },
    shadowOpacity:0.30,
    shadowRadius:4.65,
    elevation:8
  },
  textRed:{
    color:"red"
  },
  viewBanner:{
    width:'100%',
    height:200,
    backgroundColor : 'white'
  },
  banner :{
    width:'100%',
    height:200
  },
  imgMateri:{
    width:100,
    height:70,
    justifyContent:'center',
    alignItems:'center',
  },
  titleSection:{
    fontSize:20,
    borderBottomWidth:1,
    width:80,
    marginBottom:10
  },
  boxMateri:{
    width:100,
    height:130,
    marginRight:10
  },
  titleMateri:{
    fontSize:14,
    fontWeight:'bold',
  },
  wrapHarga:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  hargaCoret:{
    fontSize:8,
    textDecorationLine:"line-through"
  },
  hargaReal:{
    fontSize:12
  }
})