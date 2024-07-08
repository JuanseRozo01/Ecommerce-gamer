import axios from "axios";
import { BASE_URL } from "../../utils/Constans";
import { createOrderFails, fetchOrderSuccess, fetchOrdersFail, fetchOrdersStart } from '../../redux/orders/orderSlice';
import { OrdersResponse, OrderAxios, User } from '../../utils/Types'
import { appDispatch } from "../../redux/store";

export const getOrders = async(dispatch: appDispatch, currentUser: User): Promise<void> => {
    dispatch(fetchOrdersStart());

    try{
        const response = await axios.get<OrdersResponse>(`${BASE_URL}orders`, {
            headers: {
                'x-token': currentUser.token,
            },
        })
        console.log(response);
        if(response.data && response.data.data){
            dispatch(fetchOrderSuccess(response.data.data));
        }
    }catch(error){
        console.error(error)
        dispatch(fetchOrdersFail('sin usuarios no hay ordenes'))
    }
}

export const createOrder = async (order: OrderAxios, dispatch: appDispatch, currentUser: User): Promise<void> => {
    try {
      const response = await axios.post<{ data: OrderAxios }>(`${BASE_URL}orders`, order, {
        headers: {
          'x-token': currentUser.token,
        },
      });
      if (response.data && response.data.data) {
        getOrders(dispatch, currentUser);
      }
    } catch (error) {
      console.error(error);
      dispatch(createOrderFails('error al hacer la orden'));
    }
  };