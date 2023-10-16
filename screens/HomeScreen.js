import { View, Text,Image,TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {

    ChevronDownIcon,
    MagnifyingGlassIcon,
    UserIcon,
    AdjustmentsVerticalIcon
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(()=>{
          navigation.setOptions({
            headerShown:false
          })
     },[]);
  return (
    <SafeAreaView className='bg-[#fff] flex-1 mb-12'>
    <View>
      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 mt-2">
        <Image
        source={{
            uri:'https://links.papareact.com/wru'
        }}
        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View className="flex-1">
        <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
        <Text className='font-bold text-black text-xl'>Current Location
        <ChevronDownIcon size={20} color='#00ccbb'/>
        </Text>
        </View>
        <UserIcon size={35} color='#00ccbb'/>
      </View>
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row flex-1 bg-gray-200 p-3 space-x-2'>
          <MagnifyingGlassIcon color='gray' size={24} />
          <TextInput placeholder='Resturants and cusines' keyboardType='default'/>
        </View>
        <AdjustmentsVerticalIcon color='#00ccbb'/>
      </View>
        <ScrollView className='bg-gray-100' 
        
        contentContainerStyle={{
          paddingBottom:100
        }}
        
        >
          {/* catergories */}
            <Categories/>
          {/* Featured row */}
          <FeaturedRow
          id="123"
           title="Featured"
           description="Paid placemants from our partner's"
           
           />
           <FeaturedRow
          id="1234"
           title="Tasty Discounts"
           description="Paid placemants from our partner's"
           
           />
           <FeaturedRow
          id="12345"
           title="Offers near you!"
           description="Why not support your local resturant tonight!"
           
           />

        </ScrollView>
      <StatusBar style='auto'/>
      
    </View>
    
   
    </SafeAreaView>
  )
}

export default HomeScreen