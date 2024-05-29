import Image from "next/image";
import Link from "next/link";

const Hotel = ({ hotel }) => {
  return (
    <div className="border border-red-500 rounded-lg w-full mb-5 p-5">
      <div className="flex flex-col md:flex-row">
        <div className="md:mr-3">
          <Image
            src={hotel?.banner}
            width={400}
            height={400}
            alt="hotel"
            className="w-full md:w-[860px] h-72  mb-3"
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 mt-5">
          {
            hotel ? hotel.gallery?.map((image) => {
              return (<Image
            src={image}
            width={400}
            height={400}
            alt="hotel"
            className="w-40 h-12"
          />)
          })
          : null}
        </div>
        <div className="md:ml-5">
          <h2 className="font-extrabold text-2xl line-clamp-1 mt-2">
            {hotel.name}
          </h2>
          <p className="text-lg my-5">{hotel.description}</p>
          <p className="text-2xl my-5">
            <span className="font-bold">Facilities : </span>
          </p>
          <ul className="flex gap-3 lg:gap-10 mb-3">
              {hotel
                ? hotel.facilities.map((item) => {
                    return <li key={item.name} className="flex gap-2" >
                      <span><Image src={item.img} alt="icon" width={40} height={40} /></span>
                      <span>{item.name}</span>
                    </li>;
                  })
                : null}
            </ul>
          <div className="flex items-center gap-6">
            <button className="bg-blue-400 text-lg w-60 h-14 rounded-lg">
              Price : &#8377;{hotel.price}
            </button>
            <Link
              href={`/hotels/${hotel._id}`}
              className="text-xl font-bold text-red-600 hover:underline"
            >
              {" "}
              view details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
