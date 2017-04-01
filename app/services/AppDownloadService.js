import {downloadStart, downloadResolve} from '../redux';
import {Linking} from 'react-native';
export function downloadApp(dispatch, bundleId){
  try{
    //catch this call because it will return exception always
    dispatch(downloadStart(bundleId));
    Linking.openURL('itms-services://?action=download-manifest&url=https://hue-smartdevice.sv.workslan/api/apps/'+bundleId+'/ios')
    .catch(function(){
      setTimeout(function(){
        dispatch(downloadResolve(bundleId));
      }, 1000);
    });
  }
  catch(ex){

  }
}
