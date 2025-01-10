import React from 'react';
import { cn } from "../../app/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title: string;
  description: string;
  header: React.ReactNode;
  children?: React.ReactNode;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  title,
  description,
  header,
  children,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white flex flex-col",
        className
      )}
    >
      {header}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
        {children}
      </div>
    </div>
  );
};

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "QUARTZ SINK",
    description: "High-quality, durable sink",
    image: "/images/quartzImg.avif",
  },
  {
    id: 2,
    name: "HANDMADE SINK",
    description: "Imported Piece",
    image: "/images/handmadeImg.jpg",
  },
  {
    id: 3,
    name: "ONE PIECE",
    description: "WESTERN-SEAT",
    image: "/images/onepiece.jpg",
  },
  {
    id: 4,
    name: "Shower Head Set",
    description: "Rainfall shower with handheld sprayer",
    image: "/images/handshower.jpg",
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Featured Products
        </h2>
        <BentoGrid>
          {products.map((product) => (
            <BentoGridItem
              key={product.id}
              title={product.name}
              description={product.description}
              header={
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              }
            >
              <Link
                href={`/product/${product.id}`}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-600 transition-colors duration-300"
              >
                View Details
              </Link>
            </BentoGridItem>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default FeaturedProducts;

