import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState("");
  const [instagram, setInstagram] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(
      signUp(
        name,
        email,
        password,
        birthday,
        street,
        number,
        city,
        postcode,
        country,
        image,
        instagram
      )
    );

    setEmail("");
    setPassword("");
    setName("");
    setBirthday("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Signup</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicBirthday">
          <Form.Label>Birthday</Form.Label>
          <Form.Control
            value={birthday}
            onChange={(event) => setBirthday(event.target.value)}
            type="date"
            placeholder="Enter date"
          />
        </Form.Group>
        <Form.Group controlId="formBasicStreetAndNumber">
          <Form.Label>Street and number</Form.Label>
          <Form.Control
            value={street}
            onChange={(event) => setStreet(event.target.value)}
            type="text"
            placeholder="Enter street"
          />
          <Form.Control
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            type="text"
            placeholder="Enter number"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCityPostcode">
          <Form.Label>City and postcode</Form.Label>
          <Form.Control
            value={city}
            onChange={(event) => setCity(event.target.value)}
            type="text"
            placeholder="Enter city"
          />
          <Form.Control
            value={postcode}
            onChange={(event) => setPostcode(event.target.value)}
            type="text"
            placeholder="Enter postcode"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCityPostcode">
          <Form.Label>Image and Instagram</Form.Label>
          <Form.Control
            value={image}
            onChange={(event) => setImage(event.target.value)}
            type="text"
            placeholder="Enter image"
          />
          <Form.Control
            value={instagram}
            onChange={(event) => setInstagram(event.target.value)}
            type="text"
            placeholder="Enter instagram"
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Sign up
          </Button>
        </Form.Group>
        <Link to="/login">Click here to log in</Link>
      </Form>
    </Container>
  );
}
