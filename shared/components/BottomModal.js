import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {icons} from '../constants';
import Modal from 'react-native-modal';
import BottomModalStyle from '../../assets/styles/BottomModalStyle';

const BottomModal = ({isModalVisible, toggleModal, triggerFrom}) => {
  const renderShareContent = () => {
    return (
      <>
        <View style={BottomModalStyle.ContainerMenu}>
          <Text style={BottomModalStyle.ContentModalTitle}>More</Text>
        </View>
        <View style={BottomModalStyle.ContainerMenu}>
          <TouchableOpacity>
            <Text style={BottomModalStyle.ContentModalMenu}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={BottomModalStyle.ContainerMenu}>
          <TouchableOpacity>
            <Text style={BottomModalStyle.ContentModalMenu}>Block</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={BottomModalStyle.ContentModalMenu}>Report</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const renderMoreFromQuestionDetail = () => {
    return (
      <>
        <View style={BottomModalStyle.ContainerMenu}>
          <Text style={BottomModalStyle.ContentModalTitle}>More</Text>
        </View>
        <View style={BottomModalStyle.ContainerMenu}>
          <TouchableOpacity>
            <Text style={BottomModalStyle.ContentModalMenu}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={BottomModalStyle.ContainerMenu}>
          <TouchableOpacity>
            <Text style={BottomModalStyle.ContentModalMenu}>Report</Text>
          </TouchableOpacity>
        </View>
        <View style={BottomModalStyle.ContainerMenu}>
          <TouchableOpacity>
            <Text style={BottomModalStyle.ContentModalMenu}>Follow</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={BottomModalStyle.ContentModalMenu}>
              Suggest Question Edit
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const renderMoreFromQuestionComment = () => {
    return (
      <>
        <View style={BottomModalStyle.ContainerMenu}>
          <Text style={BottomModalStyle.ContentModalTitle}>More</Text>
        </View>
        <View style={BottomModalStyle.ContainerMenu}>
          <TouchableOpacity>
            <Text style={BottomModalStyle.ContentModalMenu}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={BottomModalStyle.ContainerMenu}>
          <TouchableOpacity>
            <Text style={BottomModalStyle.ContentModalMenu}>Report</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const renderSwitch = (param) => {
    switch (param) {
      case 'questiondetail':
        return renderMoreFromQuestionDetail();
      case 'questioncomment':
        return renderMoreFromQuestionComment();
      case 'reviewdetail':
        return renderMoreFromQuestionDetail();
      case 'reviewcomment':
        return renderMoreFromQuestionComment();
      default:
        return renderShareContent();
    }
  };

  return (
    <Modal
      isVisible={isModalVisible}
      swipeDirection={['up', 'left', 'right', 'down']}
      style={BottomModalStyle.Modal}>
      <View style={BottomModalStyle.ContentModal}>
        <View style={BottomModalStyle.ContainerClose}>
          <TouchableOpacity onPress={() => toggleModal(triggerFrom)}>
            <FastImage source={icons.x_red} />
          </TouchableOpacity>
        </View>

        {renderSwitch(triggerFrom)}
      </View>
    </Modal>
  );
};

export default BottomModal;
