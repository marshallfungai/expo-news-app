import React from "react";
import {Dimensions} from "react-native";
import ContentLoader, { Rect, Circle } from "react-content-loader/native";

const {width, height} = Dimensions.get('window');
const SkeletonLoader = () => (
  
  <ContentLoader 
    height={height}
    width={width}
    speed={4}
    primaryColor="#d2d2d2"
    secondaryColor="#ecebeb"
  >
    <Rect x="54" y="70" rx="5" ry="5" width={width} height="10" /> 
    <Rect x="53" y="94" rx="5" ry="5" width={width} height="10" /> 
    <Rect x="53" y="120" rx="5" ry="5" width={width} height="10" /> 
    <Rect x="54" y="146" rx="5" ry="5" width={width} height="10" /> 
    <Rect x="5" y="53" rx="0" ry="0" width={width} height="25" /> 
    <Rect x="5" y="82" rx="0" ry="0" width={width} height="24" /> 
    <Rect x="5" y="110" rx="0" ry="0" width={width} height="24" /> 
    <Rect x="5" y="139" rx="0" ry="0" width={width} height="24" /> 
    <Rect x="4" y="2" rx="0" ry="0" width={width} height="45" />
  </ContentLoader>
)

export default SkeletonLoader