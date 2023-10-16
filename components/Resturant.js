import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {StarIcon,MapPinIcon} from 'react-native-heroicons/mini'
const Resturant = ({
    id,
    title,
    description,
    image,
    rating,
    genre,
    address,
    long,
    dishes,
    
}) => {
    
  return (
    <TouchableOpacity className='bg-white mr-3 shadow flex-1'>
      <Image source={{uri:image}}
      className='h-36 w-64 rounded-sm'
      />
      <View className='px-3 pt-4'>
        <Text className='text-lg font-bold pt-2 '>{title}</Text>
      
      <View className='flex-row items-center space-x-1'>
        <StarIcon color='green' opacity={0.3} size={22}/>
        <Text className='text-xs text-gray-500'>
            <Text className='text-green-700'>{rating}</Text> . {genre}
        </Text>
      </View>
        <View className='flex-row items-center space-x-1'>
            <MapPinIcon color='gray' opacity={0.3} size={22}/>
            <Text className='text-xs text-gray-500'> Nearby . {address}</Text>
        </View>




      </View>

    </TouchableOpacity>
  )
}

export default Resturant