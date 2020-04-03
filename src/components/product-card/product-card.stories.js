import TestCard from './product-card.vue';

export default {
  title: 'Product card',
  component: TestCard,
};

export const Default = () => ({
  components: { TestCard },
  template: '<TestCard />'
});
