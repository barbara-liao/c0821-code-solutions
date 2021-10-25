import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const topics = [
  {
    topic: 'Cat',
    detail: 'The cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.'
  },
  {
    topic: 'Tiger',
    detail: 'The tiger is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside. It is an apex predator, primarily preying on ungulates such as deer and wild boar.'
  },
  {
    topic: 'Snow Leopard',
    detail: 'The snow leopard, also known as the ounce, is a felid in the genus Panthera native to the mountain ranges of Central and South Asia. It is listed as Vulnerable on the IUCN Red List because the global population is estimated to number fewer than 10,000 mature individuals and is expected to decline about 10% by 2040.'
  }
];

ReactDOM.render(
  <Accordion topics={topics}/>,
  document.getElementById('root')
);
