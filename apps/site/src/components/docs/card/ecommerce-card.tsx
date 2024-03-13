import { Card, Typography, Button } from "@material-tailwind/react/dist";

export function EcommerceCard() {
  return (
    <Card className="w-96">
      <Card.Header
        as="img"
        src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
        alt="card-image"
        className="h-96 object-cover"
      />
      <Card.Body>
        <div className="mb-2 flex items-center justify-between">
          <Typography className="!font-medium">Apple AirPods</Typography>
          <Typography className="!font-medium">$95.00</Typography>
        </div>
        <Typography variant="small" className="font-normal opacity-75">
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </Card.Body>
      <Card.Footer className="pt-0">
        <Button
          isFullWidth
          color="secondary"
          className="shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </Card.Footer>
    </Card>
  );
}
