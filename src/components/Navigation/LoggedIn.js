import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";

export default function LoggedIn() {
  const dispatch = useDispatch();
  return (
    <>
      <Button className="btn btn-success" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </>
  );
}
