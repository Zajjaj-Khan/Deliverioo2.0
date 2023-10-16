import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {ArrowRightIcon} from 'react-native-heroicons/outline'
import Resturant from './Resturant'
const FeaturedRow = ({id,title,description}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
      <Text className='text-lg font-bold'>{title}</Text>
      <ArrowRightIcon color='#00ccbb'/>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal:15,
        }}
        className='pt-4'
      >
        {/* Resturant Card */}
        <Resturant
         id="123"
         title="Yo!,Sushi"
         description="This is yummy"
         image="https://links.papareact.com/gn7"
         rating="4.5"
         genre="Asain"
         address="123 Main St"
         long={29}
         dishes={[]}/>
          <Resturant
         id="123"
         title="Yo!,Sushi"
         description="This is yummy"
         image="https://links.papareact.com/gn7"
         rating="4.5"
         genre="Asain"
         address="123 Main St"
         long={29}
         dishes={[]}/>
          <Resturant
         id="123"
         title="Yo!,Sushi"
         description="This is yummy"
         image="https://links.papareact.com/gn7"
         rating="4.5"
         genre="Asain"
         address="123 Main St"
         long={29}
         dishes={[]}/>
          <Resturant
         id="123"
         title="Yo!,Sushi"
         description="This is yummy"
         image="https://links.papareact.com/gn7"
         rating="4.5"
         genre="Asain"
         address="123 Main St"
         long={29}
         dishes={[]}/>
      </ScrollView>
    </View>
  )
}

export default FeaturedRow