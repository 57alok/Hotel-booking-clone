import Image from "next/image";
function MediumCard({img,title}){
    return(
      <div className="cursor-pointer hover:scale-105 transform transition duration-300">
          <div className="relative h-60 w-60">
              <Image src={img} layout='fill' className="rounded-xl" />
          </div>
          <h3 className="test-2xl mt-3">{title}</h3>
      </div>  
    );
}

export default MediumCard;