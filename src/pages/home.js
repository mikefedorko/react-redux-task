import React from 'react';

import Alert from 'react-bootstrap/Alert';

function Home() {
  return (
    <div className="home-container">
      <Alert variant="info">
        <Alert.Heading style={{ textAlign: 'center' }}>HOME PAGE</Alert.Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisl
          nisl. Etiam tempor ullamcorper massa. Sed fringilla ex non enim
          vehicula venenatis. Vivamus vitae urna hendrerit quam ultricies
          molestie ut sed libero. Fusce scelerisque nisl sed dui convallis,
          suscipit faucibus nunc tristique. Aenean placerat lorem in ex
          vulputate, sit amet aliquet libero aliquet. Sed eu lacus et purus
          ultrices tempor. Ut tincidunt urna eget sapien varius dapibus. Morbi
          efficitur fermentum nibh, et efficitur ligula aliquet vel. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Aenean aliquet efficitur tellus nec aliquet.
          Phasellus nisl lectus, ultricies eleifend congue non, maximus eu
          tortor. Aliquam fringilla, metus eget ullamcorper blandit, ex risus
          hendrerit orci, vel molestie nibh nunc eget magna.
        </p>
      </Alert>
    </div>
  );
}

export default Home;
