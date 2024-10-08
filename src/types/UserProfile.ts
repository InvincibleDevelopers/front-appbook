import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {MyStackParamList} from './navigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface UserProfile {
  username: string;
  nickname: string;
  image?: string;
  serverToken?: string;
  kakaoOauthToken?: string;
  gender?: string;
  age?: number;
  genre?: string;
  introduce?: string | '소개글을 입력해주세요';
  OnClick?: Function;
  isMine?: boolean;
}
