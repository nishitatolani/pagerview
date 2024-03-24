import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../Header/header';
import CarouselComponent from '../Corousel/corousel';
import Content from '../Content/content';

const PageLayout = ({ images, data }) => {
  return (
    <ScrollView>
      <Header />
      <CarouselComponent images={images} />
      <Content data={data} />
    </ScrollView>
  );
};

export default PageLayout;
