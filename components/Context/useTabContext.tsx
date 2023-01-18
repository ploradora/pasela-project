import { useContext } from "react";
import {TabContext} from '../Context/TabContext';

export const useTabContext = () => {
  return useContext(TabContext);
};
