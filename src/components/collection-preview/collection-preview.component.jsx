import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  TitleElement,
  PreviewElement,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleElement>{title.toUpperCase()}</TitleElement>
    <PreviewElement>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewElement>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
