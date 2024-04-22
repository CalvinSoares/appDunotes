import Category from "components/categories/category"
import CreateNewList from "components/categories/create-new-list"
import Loader from "components/shared/loader"
import SafeAreaWrapper from "components/shared/safe-area-wrapper"
import axiosInstance from "services/config"
import { ICategory } from "types"
import { Box, Text } from "utils/theme"
import React, { useEffect, useState } from "react"
import { FlatList } from "react-native"

const CategoriesScreen = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('https://api-appdunotes.onrender.com/category');
        console.log(response.data)
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        setError('Something went wrong');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />
  }

  const renderItem = ({ item }: { item: ICategory }) => (
    <Category category={item} />
  )

  return (
    <SafeAreaWrapper>
      <Box flex={1} px="4">
        <Text variant="textXl" fontWeight="700" mb="10">
          Categories
        </Text>
        <FlatList
          data={categories}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Box height={14} />}
          keyExtractor={(item) => item._id}
        />
        <CreateNewList />
      </Box>
    </SafeAreaWrapper>
  )
}

export default CategoriesScreen