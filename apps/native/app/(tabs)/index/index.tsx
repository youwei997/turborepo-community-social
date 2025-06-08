import { api } from '@repo/convex/_generated/api';
import { useMutation, useQuery } from 'convex/react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

const IndexScreen: React.FC = () => {
  const topics = useQuery(api.topics.get);
  console.log(topics);

  const createTopic = useMutation(api.topics.create);

  return (
    <View style={styles.container}>
      <FlatList
        data={topics}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        )}
      />
      <Button
        title="按钮"
        onPress={() => {
          console.log('点击了按钮');
          createTopic({
            title: '测试标题',
          });
        }}
      ></Button>
      <Text style={styles.title}>欢迎来到首页</Text>
      <Text>这是一个基础的 React Native 页面。</Text>
    </View>
  );
};

export default IndexScreen;

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
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  desc: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
