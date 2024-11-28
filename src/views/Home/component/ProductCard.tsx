import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";

const ProductCard = () => {


  // return(
  //   <Card shadow="sm"  isPressable onPress={() => console.log("item pressed")}>
  //         <CardBody className="overflow-visible p-0">
  //           <Image
  //             shadow="sm"
  //             radius="lg"
  //             width="100%"
  //             alt={'sgvfgs'}
  //             className="w-full object-cover h-[140px]"
  //             src={'https://nextui.org/images/card-example-6.jpeg'}
  //           />
  //         </CardBody>
  //         <CardFooter className="text-small justify-between">
  //           <b>{'Prodcub'}</b>
  //           <p className="text-default-500">{6799}</p>
  //         </CardFooter>
  //       </Card>
  // )

  return(
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
        <h4 className="text-black font-medium text-2xl">Acme camera</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="https://nextui.org/images/card-example-6.jpeg"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Available soon.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
  )

  return(
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
    <CardHeader className="absolute z-10 top-1 flex-col items-start">
      <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
      <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
    </CardHeader>
    <Image
      removeWrapper
      alt="Relaxing app background"
      className="z-0 w-full h-full object-cover"
      src="https://nextui.org/images/card-example-5.jpeg"
    />
    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
      <div className="flex flex-grow gap-2 items-center">
        <Image
          alt="Breathing app icon"
          className="rounded-full w-10 h-11 bg-black"
          src="https://nextui.org/images/breathing-app-icon.jpeg"
        />
        <div className="flex flex-col">
          <p className="text-tiny text-white/60">Breathing App</p>
          <p className="text-tiny text-white/60">Get a good night's sleep.</p>
        </div>
      </div>
      <Button radius="full" size="sm">Get App</Button>
    </CardFooter>
  </Card>
  )

  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Badge content="-40% off" color="danger" shape="rectangle">
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src="https://nextui.org/images/hero-card.jpeg"
          width={200}
        />
      </Badge>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <div>
          <p>My first prodi</p>
          <p>$600</p>

        </div>
        {/* <p className="text-tiny text-white/80">Available soon.</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Notify me
        </Button> */}
      </CardFooter>
    </Card>
  );
}

export default ProductCard