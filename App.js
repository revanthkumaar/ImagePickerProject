import React, {Fragment, Component} from 'react';
import ImagePicker from 'react-native-image-picker'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const options = {
  title:'Select Avatar',
  customButtons:[{name:'fb',title:'Choose Phto frm Facebook'}],
  storageOptions:{
    skipBackup: true,
    patch:'images'
  }
}


export default class App extends Component {

  


}

render() {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <Text style={{textAlign:'center',fontSize:20,paddingBottom:10}} >Pick Images from Camera & Gallery</Text>
          <View style={styles.ImageSections}>
            <View>
              {this.renderFileData()}
              <Text  style={{textAlign:'center'}}>Base 64 String</Text>
            </View>
            <View>
              {this.renderFileUri()}
              <Text style={{textAlign:'center'}}>File Uri</Text>
            </View>
          </View>

          <View style={styles.btnParentSection}>
            <TouchableOpacity onPress={this.chooseImage} style={styles.btnSection}  >
              <Text style={styles.btnText}>Choose File</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.launchCamera} style={styles.btnSection}  >
              <Text style={styles.btnText}>Directly Launch Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.launchImageLibrary} style={styles.btnSection}  >
              <Text style={styles.btnText}>Directly Launch Image Library</Text>
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>
    </Fragment>
  );
}
};