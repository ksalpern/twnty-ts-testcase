import React, { useEffect } from "react";
import { MDBContainer, MDBNavbar, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import { getCartTotal } from "../features/cartSlice";

export default function App() {
  const { cart, totalQuantity } = useAppSelector((state) => state.allCart);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <MDBNavbar dark bgColor="dark">
      <MDBContainer fluid>
        <span>
          <Link to="/">All Product </Link>
        </span>
        <MDBBtn color="dark">
          <Link to="/cart">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>(
            {totalQuantity})
          </Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}