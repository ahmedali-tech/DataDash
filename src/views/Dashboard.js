import React, { useState } from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
  Dropdown,
  FormControl,
} from "react-bootstrap";

function Dashboard() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCrispsType, setSelectedCrispsType] = useState("");
  const [selectedLoyaltyMembers, setSelectedLoyaltyMembers] = useState("");
  const [price, setPrice] = useState("");
  const [prediction, setPrediction] = useState("");
  const [idealPrediction, setIdealPrediction] = useState("");
  const [isPredictionDisabled, setIsPredictionDisabled] = useState(true);
  const locations = ["F10", "E7", "I8"];
  const crispsTypes = [
    "Flavor",
    "Price",
    "Weight",
    "Fat-free",
    "Sodium-free",
    "Gluten-free",
    "Organic",
    "Multipack",
  ];

  const handleSubmit = () => {
    // Generate random values for percentage and products
    const percentage = Math.floor(Math.random() * (90 - 50 + 1)) + 50;
    const products = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
  
    // Generate a random crisp feature for the additional info
    const crispFeatureOptions = ["Flavor", "Weight", "Fat-free", "Sodium-free", "Gluten-free", "Organic", "Multipack"];
    const randomCrispFeature = crispFeatureOptions[Math.floor(Math.random() * crispFeatureOptions.length)];

    // Perform processing or calculation based on the input fields
    const result = `Your business in ${selectedLocation} while selling ${selectedCrispsType} Crisps at ${price} is likely to succeed with a percentage of ${percentage}% and a demand of an average of ${products} per month`;

    // Additional information
    const additionalInfo = `The ideal product would be ${randomCrispFeature} Crisps in this location.`;

    // Combine the main result and additional info
    const fullResult = `${result} ${additionalInfo}`;

    setPrediction(result);
    setIdealPrediction(additionalInfo)
  };
  const loyaltyMembers = ["Yes", "No"];
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Data Collected</p>
                      <Card.Title as="h4">100MB</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update Now
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Rows of Data Analysed</p>
                      <Card.Title as="h4">150,000</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last day
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Rows removed during Cleaning</p>
                      <Card.Title as="h4">4221</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Accuracy</p>
                      <Card.Title as="h4">86%</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update now
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Location Based Demand</Card.Title>
                <p className="card-category">24 Hours performance</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "9:00AM",
                        "12:00AM",
                        "3:00PM",
                        "6:00PM",
                        "9:00PM",
                        "12:00PM",
                        "3:00AM",
                        "6:00AM",
                      ],
                      series: [
                        [287, 385, 490, 492, 554, 586, 300, 200],
                        [67, 152, 143, 240, 287, 335, 335, 237],
                        [23, 113, 67, 108, 190, 239, 100, 20],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 800,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  F10 <i className="fas fa-circle text-danger"></i>
                  E7 <i className="fas fa-circle text-warning"></i>
                  I8
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Feature Based Demand Share</Card.Title>
                <p className="card-category">24 hr Performance</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["60%", "15%", "25%"],
                      series: [60, 15, 25],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Weight <i className="fas fa-circle text-danger"></i>
                  Fat-Free <i className="fas fa-circle text-warning"></i>
                  Price
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock"></i>
                  Campaign sent 2 days ago
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">2021 Sales</Card.Title>
                <p className="card-category">All products including Taxes</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "Mai",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      series: [
                        [
                          542,
                          443,
                          320,
                          780,
                          553,
                          453,
                          326,
                          434,
                          568,
                          610,
                          756,
                          895,
                        ],
                        [
                          412,
                          243,
                          280,
                          580,
                          453,
                          353,
                          300,
                          364,
                          368,
                          410,
                          636,
                          695,
                        ],
                      ],
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 10,
                      axisX: {
                        showGrid: false,
                      },
                      height: "245px",
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          seriesBarDistance: 5,
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Crisps based on weight <i className="fas fa-circle text-danger"></i>
                  Fat Free Crisps
                </div>
                <hr></hr>
               
              </Card.Footer>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Demand Predictor</Card.Title>
                <p className="card-category">Location and Feature based predictor for Crisps</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          Location:
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              {selectedLocation || "Select Location"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              {locations.map((location) => (
                                <Dropdown.Item
                                  key={location}
                                  onClick={() => setSelectedLocation(location)}
                                >
                                  {location}
                                </Dropdown.Item>
                              ))}
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Type of Crisps:
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              {selectedCrispsType || "Select Crisps Type"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              {crispsTypes.map((type) => (
                                <Dropdown.Item
                                  key={type}
                                  onClick={() => setSelectedCrispsType(type)}
                                >
                                  {type}
                                </Dropdown.Item>
                              ))}
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Price to be set:
                          <FormControl
                            type="text"
                            placeholder="Enter Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Any Loyalty Members already existing:
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              {selectedLoyaltyMembers || "Select Membership"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              {loyaltyMembers.map((member) => (
                                <Dropdown.Item
                                  key={member}
                                  onClick={() => setSelectedLoyaltyMembers(member)}
                                >
                                  {member}
                                </Dropdown.Item>
                              ))}
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Prediction:
                          <FormControl
                            as="textarea"  // Change type to "textarea"
                            placeholder="Enter Prediction"
                            value={prediction}
                            onChange={(e) => setPrediction(e.target.value)}
                            disabled={isPredictionDisabled}
                            style={{ overflowWrap: 'break-word' }}  // Add this style
                          />
                           <div
                            style={{
                              backgroundColor: '#f2f2f2',  // Grey color
                              padding: '8px',  // Optional padding for styling
                              borderRadius: '5px',  // Optional border-radius for styling
                            }}
                          >
                            {idealPrediction}
                          </div>
                        </td>
                       
                      </tr>
                      <tr>
                        <td>
                          <Button variant="primary" onClick={handleSubmit}>
                            Submit
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="now-ui-icons loader_refresh spin"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
