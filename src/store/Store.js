    // src/store/store.js
    import { configureStore } from '@reduxjs/toolkit';
    import productsReducer from '../slice/productsSlice';
    import cartReducer from '../slice/cartSlice';
    import couponsReducer from '../slice/couponsSlice';
    import flashSaleReducer from '../slice/FlashsaleSlice';
    import bestsaleReducer from '../slice/bestsaleSlice';
    import orderReducer from '../slice/orderSlice';
    import carouselsReducer from '../slice/firstcrauselsSlice';
    import loginReducer from '../slice/loginSlice';
    import signupReducer from '../slice/signupSlice';
    import notificationReducer from '../slice/notificationSlice';
    import recommendationReducer from '../slice/recommendationSlice';
    import combinedReducer from '../slice/combinedSlice';
    const store = configureStore({
      reducer: {
        combined: combinedReducer,

        products: productsReducer,
        cart: cartReducer,
        coupons: couponsReducer,
        flashSales: flashSaleReducer,
        bestsale: bestsaleReducer,
        orders: orderReducer,
        carousels: carouselsReducer,
        login: loginReducer,
        signup: signupReducer,
        notifications: notificationReducer,
        recommendations: recommendationReducer,
        
      },
    });

    export default store;
