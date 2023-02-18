import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { addToCart } from "../features/cartSlice";

export default function App() {
  const items = useAppSelector((state) => state.allCart.items);

  const dispatch = useAppDispatch();

  return (
    <div className="m-2">
      <MDBContainer>
        <MDBRow className="mb-3">
          {items?.map((item) => (
            <MDBCol key={item.id} size="md">
              <MDBCard>
                <MDBCardImage src={item.img} position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>{item.price}</MDBCardText>
                  <MDBBtn onClick={() => dispatch(addToCart(item))}>
                    Add to Cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}