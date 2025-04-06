import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";

export default function HomePage() {
  // Sample design data
  const designs = [
    {
      id: 1,
      title: "Abstract Waves",
      price: "$49.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "Abstract",
    },
    {
      id: 2,
      title: "Geometric Patterns",
      price: "$39.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "Geometric",
    },
    {
      id: 3,
      title: "Minimalist Logo",
      price: "$59.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "Logo",
    },
    {
      id: 4,
      title: "Neon Typography",
      price: "$44.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "Typography",
    },
    {
      id: 5,
      title: "Watercolor Splash",
      price: "$54.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "Illustration",
    },
    {
      id: 6,
      title: "3D Render Scene",
      price: "$69.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "3D",
    },
    {
      id: 7,
      title: "Vintage Poster",
      price: "$49.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "Vintage",
    },
    {
      id: 8,
      title: "Digital Landscape",
      price: "$59.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "Digital Art",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Premium Graphic Design Resources
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover and download high-quality graphic design assets for your
            creative projects
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "All",
              "Abstract",
              "Logo",
              "Typography",
              "Illustration",
              "3D",
              "Vintage",
              "Digital Art",
            ].map((category) => (
              <Button
                key={category}
                variant={"default"}
                className={
                  category === "All"
                    ? "bg-purple-600 hover:bg-purple-700 hover:cursor-pointer"
                    : "border-gray-700 hover:border-purple-500 hover:text-purple-400 hover:cursor-pointer"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Designs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-8 lg:px-16">
          <h2 className="text-3xl font-bold mb-8">All Designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designs.map((design) => (
              <Card
                key={design.id}
                className="bg-gray-900 border-gray-800 overflow-hidden hover:border-purple-600 transition-all duration-300"
              >
                <div className="relative group">
                  <img
                    src={design.image || "/placeholder.svg"}
                    alt={design.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      Preview
                    </Button>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg text-white">
                        {design.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{design.category}</p>
                    </div>
                    <p className="text-purple-400 font-bold">{design.price}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t border-gray-800 pt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-300 hover:text-purple-400"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button
                    size="sm"
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination Section */}
      <section className="py-8">
        <div className="container mx-auto px-8 lg:px-16 flex justify-end">
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-purple-400"
            >
              Previous
            </Button>
            {[1, 2, 3, 4, 5].map((page) => (
              <Button
                key={page}
                size="sm"
                className="bg-gray-800 hover:bg-purple-600 text-white hover: cursor-pointer"
              >
                {page}
              </Button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-purple-400"
            >
              Next
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
