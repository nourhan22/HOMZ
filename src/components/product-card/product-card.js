import './product-card.scss';

export default {

  data() {
    return {
      products: [{
        name: 'TRoyal Wing Chair in Blue Color By Dreamzz Furniture',
        img: 'bg1',
        price: 788,
        rateing:4,
        emptyStars:1

      },{
        name: 'Royal Wing Chair in Blue Color By Dreamzz Furniture',
        img:'bg2',
        price: 788,
        rateing:2,
        emptyStars:3
      },
      {
        name: 'Royal Wing Chair in Blue Color By Dreamzz Furnituree',
        img:'myimg',
        price: 788,
        rateing:0,
        emptyStars:5
      }]
    }
  },
  methods: {
    getImgUrl(item) {
      return require(`../../assets/${item}.jpg`);
      }

  }
  // ,
  // computed: {
  //   emptyStars:function(){
  //     this.emptyStars=5- this.rateing;
  //   }

  // }
  


}
