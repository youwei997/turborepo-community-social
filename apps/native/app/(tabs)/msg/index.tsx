import { StyleSheet, Text, View } from 'react-native';

const MsgScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>消息页面</Text>
    </View>
  );
};

export default MsgScreen;

// 样式定义
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
});
